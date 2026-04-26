import React, { useState } from 'react';
import style from './style.module.css';
import { useLang } from '../../context/LangContext';
import { useNavigate } from 'react-router-dom';
import BookingModal from '../../modules/BookingModal/BookingModal';
import {TOURS_DATA} from '../../constants/Tours'



const diffColors = { easy: "#4a7c59", medium: "#c97820", hard: "#d7262e" };

const Slider = ({ images, color }) => {
  const [idx, setIdx] = useState(0);
  return (
    <div className={style.slider}>
      <img className={style.sliderImg} src={images[idx]} alt="" key={idx} />
      <button className={`${style.sliderBtn} ${style.sliderPrev}`} style={{ borderColor: color }}
        onClick={e => { e.stopPropagation(); setIdx(i => (i - 1 + images.length) % images.length); }}>‹</button>
      <button className={`${style.sliderBtn} ${style.sliderNext}`} style={{ borderColor: color }}
        onClick={e => { e.stopPropagation(); setIdx(i => (i + 1) % images.length); }}>›</button>
      <div className={style.sliderDots}>
        {images.map((_, i) => (
          <span key={i} className={style.dot}
            style={{ background: i === idx ? color : '#ccc' }}
            onClick={e => { e.stopPropagation(); setIdx(i); }} />
        ))}
      </div>
    </div>
  );
};

const Tours = () => {
  const { t, lang } = useLang();
  const [selected, setSelected] = useState(null);
  const [bookingTour, setBookingTour] = useState(null);

  const get = (tour, field) => lang === 'en' ? tour[field + 'En'] : tour[field + 'Ru'];

  if (selected !== null) {
    const tour = TOURS_DATA[selected];
    const [days, nights] = tour.duration.split(' / ');
    const durationLabel = lang === 'en' ? `${days} days / ${nights} nights` : `${days} дня / ${nights} ночи`;

    return (
      <>
        {bookingTour && (
          <BookingModal
            onClose={() => setBookingTour(null)}
            tourTitle={bookingTour ? (lang === 'en' ? bookingTour.titleEn : bookingTour.titleRu) : ''}
            isFree={true}
          />
        )}
        <div className={style.page}>
          <button className={style.backBtn} onClick={() => setSelected(null)}>{t('backToTours')}</button>
          <div className={style.detailCard}>
            <Slider images={tour.images} color={tour.color} />
            <div className={style.detailBody}>
              <div className={style.detailBadges}>
                <span className={style.badge} style={{ background: tour.color }}>{durationLabel}</span>
                <span className={style.badge} style={{ background: diffColors[tour.diffKey] }}>
                  {t(tour.diffKey)} {t('difficulty')}
                </span>
              </div>
              <h1 className={style.detailTitle}>{get(tour, 'title')}</h1>
              <p className={style.detailLocation}>📍 {get(tour, 'location')}</p>
              <p className={style.detailDesc}>{get(tour, 'desc')}</p>
              <div className={style.detailSections}>
                <div className={style.detailSection}>
                  <h3 className={style.sectionTitle}>{t('included')}</h3>
                  <ul className={style.sectionList}>
                    {get(tour, 'includes').map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </div>
                <div className={style.detailSection}>
                  <h3 className={style.sectionTitle}>{t('highlights')}</h3>
                  <ul className={style.sectionList}>
                    {get(tour, 'highlights').map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </div>
              </div>
              <div className={style.detailFooter}>
                <div className={style.detailPrice}>
                  <span className={style.priceLabel}>{t('priceFrom')}</span>
                  <span className={style.priceValue} style={{ color: tour.color }}>
                    {tour.price.toLocaleString()} {t('som')}
                  </span>
                  <span className={style.priceNote}>{t('perPerson')}</span>
                </div>
                <button
                  className={style.bookBtn}
                  style={{ background: tour.color }}
                  onClick={() => setBookingTour(tour)}
                >
                  {t('bookTour')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className={style.page}>
      <div className={style.heroSection}>
        <h1 className={style.heroTitle}>{t('toursTitle')}</h1>
        <p className={style.heroSubtitle}>{t('toursSubtitle')}</p>
      </div>
      <div className={style.grid}>
        {TOURS_DATA.map((tour, idx) => (
          <div key={tour.id} className={style.card} onClick={() => setSelected(idx)}>
            <div className={style.cardImgWrap}>
              <img className={style.cardImg} src={tour.images[0]} alt={get(tour, 'title')} />
              <span className={style.diffBadge} style={{ background: diffColors[tour.diffKey] }}>
                {t(tour.diffKey)}
              </span>
            </div>
            <div className={style.cardBody}>
              <div className={style.cardMeta}>
                <span className={style.cardLocation}>📍 {get(tour, 'location')}</span>
                <span className={style.cardDuration}>
                  ⏱ {lang === 'en' ? `${tour.duration.split('/')[0].trim()}d` : `${tour.duration.split('/')[0].trim()} дн.`}
                </span>
              </div>
              <h3 className={style.cardTitle}>{get(tour, 'title')}</h3>
              <p className={style.cardDesc}>{get(tour, 'desc').slice(0, 90)}...</p>
              <div className={style.cardFooter}>
                <div>
                  <span className={style.cardPriceLabel}>{lang === 'en' ? 'from ' : 'от '}</span>
                  <span className={style.cardPrice} style={{ color: tour.color }}>
                    {tour.price.toLocaleString()} {t('som')}
                  </span>
                </div>
                <button className={style.moreBtn} style={{ borderColor: tour.color, color: tour.color }}>
                  {lang === 'en' ? 'Details →' : 'Подробнее →'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tours;
