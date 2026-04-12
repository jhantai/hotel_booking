import React from "react";
import { useParams } from "react-router-dom";
import { HOTELS_DATA } from "../../constants/hotels";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";
import style from "./style.module.css";
import {showError, showSuccess} from "../../utils/Alert";


const Details = (props) => {
    
    const { id } = useParams();
  const {
    active
} = props
console.log("Пропсы в Details:", props);

  const hotel = HOTELS_DATA[Number(id)];

  if (!hotel) {
    return <h2>Отель не найден</h2>;
  }

  const images = hotel.images.map((img) => ({
    original: img,
    
  
  }));

  return (
    <div className={style.home_info}>
     <div className={style.sliderWrapper}>
     <ImageGallery
  items={images}
  showFullscreenButton={false}
  showPlayButton={false}
  showThumbnails={false}
  renderItem={(item) => (
    <img
      src={item.original}
      style={{
        width: "100%",
        height: "600px",
        objectFit: "cover"
      }}
    />
  )}
/>
      </div>
      <div className={style.hotels_info}>
      <h1>{hotel.name}</h1>
      <p>{hotel.text}</p>
      <h3>{hotel.price} сом</h3>
      <h4>{hotel.amenities} </h4>

      <p>{hotel.free ? "Есть свободные места" : "Нет мест"}</p>
      <button className={style.book}
     // onClick={() => {
        //     item.free ?
        //         showSuccess('Готово', 'Отель успешно забронирован!')
        //         :
        //         showError('Ошибка', 'В данный момент в отеле нет мест!')
        // }}
        onClick={() => {
            active()
            sessionStorage.setItem('free', String(hotel.free))
        }}
      >Забронировать</button>
      </div>
    </div>
  );
};

export default Details;
