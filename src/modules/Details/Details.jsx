import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { HOTELS_DATA } from '../../constants/hotels';
import style from './style.module.css';
import { useLang } from '../../context/LangContext';
import BookingModal from '../BookingModal/BookingModal';

// Same custom slider as Tours page
const Slider = ({ images }) => {
  const [idx, setIdx] = useState(0);
  return (
    <div className={style.slider}>
      <img className={style.sliderImg} src={images[idx]} alt="" key={idx} />
      <button className={`${style.sliderBtn} ${style.sliderPrev}`}
        onClick={() => setIdx(i => (i - 1 + images.length) % images.length)}>‹</button>
      <button className={`${style.sliderBtn} ${style.sliderNext}`}
        onClick={() => setIdx(i => (i + 1) % images.length)}>›</button>
      <div className={style.sliderDots}>
        {images.map((_, i) => (
          <span key={i} className={`${style.dot} ${i === idx ? style.dotActive : ''}`}
            onClick={() => setIdx(i)} />
        ))}
      </div>
      <div className={style.sliderCount}>{idx + 1} / {images.length}</div>
    </div>
  );
};

const StarRating = ({ count }) => (
  <span className={style.stars}>{'★'.repeat(count)}{'☆'.repeat(5 - count)}</span>
);

const Details = () => {
  const { id } = useParams();
  const { t, lang } = useLang();
  const [showModal, setShowModal] = useState(false);

  const hotel = HOTELS_DATA[Number(id)];
  if (!hotel) return <h2 style={{ padding: '100px 40px' }}>Отель не найден</h2>;

  const desc = lang === 'en' ? hotel.textEn : hotel.textRu;

  return (
    <>
      {showModal && (
        <BookingModal
          onClose={() => setShowModal(false)}
          hotel={hotel}
        />
      )}
      <div className={style.page}>

        {/* Slider */}
        <div className={style.sliderSection}>
          <Slider images={hotel.images} />
        </div>

        {/* Main content */}
        <div className={style.content}>

          {/* Left: info */}
          <div className={style.infoCol}>
            <div className={style.titleRow}>
              <h1 className={style.hotelName}>{hotel.name}</h1>
              <StarRating count={hotel.stars || 3} />
            </div>

            <div className={style.metaRow}>
              <span className={style.metaItem}>📍 {hotel.address}</span>
              <span className={style.metaDot}>·</span>
              <span className={style.metaItem}>🚶 {hotel.distCenter}</span>
            </div>

            <p className={style.description}>{desc}</p>

            <div className={style.infoCards}>
              <div className={style.infoCard}>
                <span className={style.infoCardIcon}>✅</span>
                <span className={style.infoCardLabel}>{lang === 'ru' ? 'Заезд' : 'Check-in'}</span>
                <span className={style.infoCardValue}>{hotel.checkIn}</span>
              </div>
              <div className={style.infoCard}>
                <span className={style.infoCardIcon}>🚪</span>
                <span className={style.infoCardLabel}>{lang === 'ru' ? 'Выезд' : 'Check-out'}</span>
                <span className={style.infoCardValue}>{hotel.checkOut}</span>
              </div>
              <div className={style.infoCard}>
                <span className={style.infoCardIcon}>{hotel.free ? '🟢' : '🔴'}</span>
                <span className={style.infoCardLabel}>{lang === 'ru' ? 'Места' : 'Rooms'}</span>
                <span className={style.infoCardValue}>{hotel.free ? t('freePlaces') : t('noPlaces')}</span>
              </div>
            </div>

            <div className={style.amenitiesSection}>
              <h3 className={style.sectionTitle}>{lang === 'ru' ? '🛎 Удобства' : '🛎 Amenities'}</h3>
              <div className={style.amenitiesGrid}>
                {hotel.amenities.map((a, i) => (
                  <span key={i} className={style.amenityTag}>{a}</span>
                ))}
              </div>
            </div>

            <div className={style.roomsPreview}>
              <h3 className={style.sectionTitle}>{lang === 'ru' ? '🛏 Типы номеров' : '🛏 Room Types'}</h3>
              <div className={style.roomGrid}>
                {hotel.rooms.map(room => (
                  <div key={room.id} className={`${style.roomPreviewCard} ${!room.available ? style.roomUnavailable : ''}`}>
                    <span className={style.roomPreviewName}>{lang === 'ru' ? room.nameRu : room.nameEn}</span>
                    <span className={style.roomPreviewMeta}>{room.size} м² · {room.beds === 1 ? (lang === 'ru' ? '1 кровать' : '1 bed') : (lang === 'ru' ? '2 кровати' : '2 beds')}</span>
                    <span className={`${style.roomPreviewBadge} ${room.available ? style.badgeFree : style.badgeTaken}`}>
                      {room.available ? (lang === 'ru' ? 'Свободен' : 'Available') : (lang === 'ru' ? 'Занят' : 'Taken')}
                    </span>
                    <span className={style.roomPreviewPrice}>{room.price.toLocaleString()} {t('som')}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: booking card */}
          <div className={style.bookingCard}>
            <p className={style.priceLabel}>{lang === 'ru' ? 'от' : 'from'}</p>
            <p className={style.price}>{hotel.price.toLocaleString()} <span className={style.priceCur}>{t('som')}</span></p>
            <p className={style.priceNote}>{lang === 'ru' ? 'за ночь' : 'per night'}</p>
            <button className={style.bookBtn} onClick={() => setShowModal(true)}>
              {t('bookHotel')}
            </button>
            <div className={style.bookCardMeta}>
              <div>⭐ {hotel.stars}.0 / 5</div>
              <div>{hotel.free ? `🟢 ${t('freePlaces')}` : `🔴 ${t('noPlaces')}`}</div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Details;
