import React, { useState } from "react";
import style from "./style.module.css";
import { useAuth } from "../../context/AuthContext";
import { useLang } from "../../context/LangContext";
import { useNavigate } from "react-router-dom";

const TOKEN = "8622746861:AAHiKX4T_E6FLc15RtT6OO9UAZDCzTaelWw";
const CHAT_ID = "1071716647";

const sendTelegram = async (text) => {
  try {
    await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: "HTML" }),
    });
  } catch (_) {}
};

const todayStr = () => new Date().toISOString().split("T")[0];

const validate = (f, t, isHotel) => {
  const e = {};
  if (!f.checkIn) e.checkIn = t("errRequired");
  if (isHotel) {
    if (!f.checkOut) e.checkOut = t("errRequired");
    else if (f.checkIn && f.checkOut <= f.checkIn)
      e.checkOut = t("errCheckOut");
  }
  if (!f.phone.trim()) e.phone = t("errRequired");
  else if (!/^\+?[\d\s\-()]{7,15}$/.test(f.phone))
    e.phone = t("errPhoneFormat");
  if (!f.adults || Number(f.adults) < 1) e.adults = t("errPersons");
  if (isHotel && !f.roomId) e.roomId = t("errRoomRequired");
  return e;
};

// Simple text input field
const Field = ({
  fkey,
  label,
  type,
  icon,
  min,
  max,
  fields,
  errors,
  touched,
  set,
  blur,
}) => (
  <div className={style.field}>
    <label className={style.label}>{label}</label>
    <div
      className={`${style.inputWrap} ${
        errors[fkey] && touched[fkey] ? style.inputError : ""
      }`}
    >
      <span className={style.icon}>{icon}</span>
      <input
        className={style.input}
        type={type}
        value={fields[fkey]}
        min={min}
        max={max}
        onChange={set(fkey)}
        onBlur={blur(fkey)}
      />
    </div>
    {errors[fkey] && touched[fkey] && (
      <span className={style.errMsg}>⚠ {errors[fkey]}</span>
    )}
  </div>
);

const BookingModal = ({ onClose, hotel, tourTitle }) => {
  const { isLoggedIn, user } = useAuth();
  const { t, lang } = useLang();
  const navigate = useNavigate();

  const isHotel = !!hotel;
  const rooms = hotel?.rooms || null;
  const title = hotel?.name || tourTitle || "";

  const [fields, setFields] = useState({
    checkIn: "",
    checkOut: "",
    adults: 1,
    children: 0,
    phone: "",
    roomId: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [booked, setBooked] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (key) => (e) => {
    const val = e.target.value;
    setFields((f) => ({ ...f, [key]: val }));
    if (touched[key]) {
      const errs = validate({ ...fields, [key]: val }, t, isHotel);
      setErrors((prev) => ({ ...prev, [key]: errs[key] }));
    }
  };

  const blur = (key) => () => {
    setTouched((prev) => ({ ...prev, [key]: true }));
    setErrors((prev) => ({
      ...prev,
      [key]: validate(fields, t, isHotel)[key],
    }));
  };

  const selectRoom = (roomId) => {
    setFields((f) => ({ ...f, roomId }));
    setTouched((prev) => ({ ...prev, roomId: true }));
    setErrors((prev) => ({ ...prev, roomId: undefined }));
  };

  const nights = () => {
    if (!fields.checkIn || !fields.checkOut) return 0;
    const diff = new Date(fields.checkOut) - new Date(fields.checkIn);
    return Math.max(0, Math.round(diff / 86400000));
  };

  const selectedRoom = rooms?.find((r) => r.id === fields.roomId);
  const totalPrice = selectedRoom
    ? selectedRoom.price * Math.max(1, nights())
    : 0;

  const handleSubmit = async () => {
    const keys = isHotel
      ? {
          checkIn: true,
          checkOut: true,
          phone: true,
          adults: true,
          roomId: true,
        }
      : { checkIn: true, phone: true, adults: true };
    setTouched(keys);
    const errs = validate(fields, t, isHotel);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    if (isHotel && selectedRoom && !selectedRoom.available) {
      setErrors((prev) => ({
        ...prev,
        roomId:
          lang === "ru" ? "Этот номер занят" : "This room is not available",
      }));
      return;
    }

    setLoading(true);

    const roomLabel = selectedRoom
      ? lang === "ru"
        ? selectedRoom.nameRu
        : selectedRoom.nameEn
      : "";

    const msg = isHotel
      ? `🏨 <b>Бронирование отеля</b>\n\n📍 Отель: <b>${title}</b>\n🛏 Номер: <b>${roomLabel}</b>\n📅 Заезд: <b>${
          fields.checkIn
        }</b>\n📅 Выезд: <b>${
          fields.checkOut
        }</b>\n🌙 Ночей: <b>${nights()}</b>\n👤 Взрослых: <b>${
          fields.adults
        }</b>\n👶 Детей: <b>${fields.children}</b>\n📞 Телефон: <b>${
          fields.phone
        }</b>\n👤 Пользователь: <b>${user?.name || "—"}</b> (${
          user?.email || "—"
        })\n💰 Итого: <b>${totalPrice.toLocaleString()} сом</b>\n\n📌 Источник: StayGuest — страница отелей`
      : `🗺 <b>Бронирование экскурсии</b>\n\n🏔 Экскурсия: <b>${title}</b>\n📅 Дата: <b>${
          fields.checkIn
        }</b>\n👤 Взрослых: <b>${fields.adults}</b>\n👶 Детей: <b>${
          fields.children
        }</b>\n📞 Телефон: <b>${fields.phone}</b>\n👤 Пользователь: <b>${
          user?.name || "—"
        }</b> (${
          user?.email || "—"
        })\n\n📌 Источник: StayGuest — страница экскурсий`;

    await sendTelegram(msg);
    setLoading(false);
    setBooked(true);
  };

  // ── Not logged in ─────────────────────────────────────────────
  if (!isLoggedIn) {
    return (
      <div className={style.overlay} onClick={onClose}>
        <div className={style.modal} onClick={(e) => e.stopPropagation()}>
          <button className={style.closeBtn} onClick={onClose}>
            ✕
          </button>
          <div className={style.authBlock}>
            <div className={style.authEmoji}>🔒</div>
            <h2 className={style.authTitle}>{t("bookRestrict")}</h2>
            <p className={style.authSub}>
              {lang === "ru"
                ? "Войдите или создайте аккаунт для бронирования."
                : "Sign in or create an account to book."}
            </p>
            <button
              className={style.btnPrimary}
              onClick={() => {
                onClose();
                navigate("/Login");
              }}
            >
              {t("signIn")}
            </button>
            <button
              className={style.btnSecondary}
              onClick={() => {
                onClose();
                navigate("/Registration");
              }}
            >
              {t("createAccount")}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── Success ───────────────────────────────────────────────────
  if (booked) {
    return (
      <div className={style.overlay} onClick={onClose}>
        <div className={style.modal} onClick={(e) => e.stopPropagation()}>
          <button className={style.closeBtn} onClick={onClose}>
            ✕
          </button>
          <div className={style.resultBlock}>
            <div
              className={style.resultIcon}
              style={{ background: "linear-gradient(135deg,#2f6f8f,#1a4f6a)" }}
            >
              ✓
            </div>
            <h2 className={style.resultTitle} style={{ color: "#2f6f8f" }}>
              {lang === "ru" ? "Заявка отправлена!" : "Request Sent!"}
            </h2>
            <p className={style.resultText}>
              {lang === "ru"
                ? `Мы свяжемся с вами по номеру ${fields.phone} для подтверждения.`
                : `We will contact you at ${fields.phone} to confirm.`}
            </p>
            <button className={style.btnPrimary} onClick={onClose}>
              {lang === "ru" ? "Закрыть" : "Close"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── Main form ─────────────────────────────────────────────────
  const fieldProps = { fields, errors, touched, set, blur };

  return (
    <div className={style.overlay} onClick={onClose}>
      <div className={style.modalLarge} onClick={(e) => e.stopPropagation()}>
        <button className={style.closeBtn} onClick={onClose}>
          ✕
        </button>

        {/* Header */}
        <div className={style.modalHeader}>
          <div className={style.modalIcon}>{isHotel ? "🏨" : "🗺"}</div>
          <h2 className={style.modalTitle}>{t("bookModalTitle")}</h2>
          {title && <p className={style.modalSubtitle}>«{title}»</p>}
        </div>

        <div className={style.formCol}>
          {/* ── Room selection (hotels only) ── */}
          {isHotel && rooms && (
            <div className={style.field}>
              <p className={style.roomSectionLabel}>
                {lang === "ru" ? "🛏 Выберите номер" : "🛏 Select a room"}
              </p>
              <div className={style.roomList}>
                {rooms.map((room) => (
                  <div
                    key={room.id}
                    className={[
                      style.roomCard,
                      fields.roomId === room.id ? style.roomSelected : "",
                      !room.available ? style.roomTaken : "",
                    ].join(" ")}
                    onClick={() => room.available && selectRoom(room.id)}
                  >
                    <div className={style.roomCardInner}>
                      <div className={style.roomCardLeft}>
                        <span className={style.roomName}>
                          {lang === "ru" ? room.nameRu : room.nameEn}
                        </span>
                        <span className={style.roomMeta}>
                          {room.size} м²&nbsp;·&nbsp;
                          {room.beds === 1
                            ? lang === "ru"
                              ? "1 кровать"
                              : "1 bed"
                            : lang === "ru"
                            ? "2 кровати"
                            : "2 beds"}
                        </span>
                      </div>
                      <div className={style.roomCardRight}>
                        {room.available ? (
                          <>
                            <span className={style.roomPrice}>
                              {room.price.toLocaleString()} {t("som")}
                            </span>
                            <span className={style.roomPerNight}>
                              {lang === "ru" ? "/ ночь" : "/ night"}
                            </span>
                          </>
                        ) : (
                          <span className={style.roomTakenBadge}>
                            {lang === "ru" ? "Занят" : "Taken"}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {errors.roomId && touched.roomId && (
                <span className={style.errMsg}>⚠ {errors.roomId}</span>
              )}
            </div>
          )}

          <div className={style.divider} />

          {/* ── Dates ── */}
          <div className={style.row}>
            <Field
              fkey="checkIn"
              label={
                isHotel
                  ? lang === "ru"
                    ? "📅 Дата заезда"
                    : "📅 Check-in"
                  : lang === "ru"
                  ? "📅 Дата экскурсии"
                  : "📅 Tour date"
              }
              type="date"
              icon="📅"
              min={todayStr()}
              {...fieldProps}
            />
            {isHotel ? (
              <Field
                fkey="checkOut"
                label={lang === "ru" ? "📅 Дата выезда" : "📅 Check-out"}
                type="date"
                icon="📅"
                min={fields.checkIn || todayStr()}
                {...fieldProps}
              />
            ) : (
              <div className={style.field}>
                <label className={style.label}>
                  {lang === "ru" ? "👤 Гид" : "👤 Guide"}
                </label>
                <div className={style.infoBox}>
                  ✓ {lang === "ru" ? "Включён в стоимость" : "Included"}
                </div>
              </div>
            )}
          </div>

          {/* ── Guests ── */}
          <div className={style.row}>
            <Field
              fkey="adults"
              label={lang === "ru" ? "👤 Взрослых" : "👤 Adults"}
              type="number"
              icon="👤"
              min="1"
              max="20"
              {...fieldProps}
            />
            <Field
              fkey="children"
              label={lang === "ru" ? "👶 Детей" : "👶 Children"}
              type="number"
              icon="👶"
              min="0"
              max="10"
              {...fieldProps}
            />
          </div>

          {/* ── Phone ── */}
          <Field
            fkey="phone"
            label={lang === "ru" ? "📞 Телефон для связи" : "📞 Contact Phone"}
            type="tel"
            icon="📞"
            {...fieldProps}
          />

          {/* ── Price summary ── */}
          {isHotel && selectedRoom && nights() > 0 && (
            <div className={style.summary}>
              <span>
                {selectedRoom.price.toLocaleString()} {t("som")} × {nights()}
                &nbsp;
                {lang === "ru"
                  ? nights() === 1
                    ? "ночь"
                    : nights() < 5
                    ? "ночи"
                    : "ночей"
                  : nights() === 1
                  ? "night"
                  : "nights"}
              </span>
              <span className={style.summaryTotal}>
                {totalPrice.toLocaleString()} {t("som")}
              </span>
            </div>
          )}

          {/* ── Submit ── */}
          <button
            className={style.submitBtn}
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading
              ? lang === "ru"
                ? "Отправка..."
                : "Sending..."
              : t("bookHotel")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
