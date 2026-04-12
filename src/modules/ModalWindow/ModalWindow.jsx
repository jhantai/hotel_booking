import React, {useState} from 'react';
import style from './style.module.css'
import CloseIcon from '@mui/icons-material/Close';
import geoIcon from '../../assets/images/location-sign-svgrepo-com.svg'
import dateIcon from '../../assets/images/date-range-svgrepo-com.svg'
import userIcon from '../../assets/images/user-icon-svgrepo-com.svg'
import InputMaterial from "../../components/InputMaterial/InputMaterial";
import phoneIcon from '../../assets/images/phone-call-svgrepo-com.svg'; 
import {showError, showInfo, showSuccess} from "../../utils/Alert";


const ModalWindow = (props) => {

    const {
        active
    } = props

    const [data, setData] = useState({
        city: '',
        date: '',
        persons: 0,
    });

    return (
        <div
            className={style.ModalWindowBlur}
           
            onClick={active}
        >
            <div
                className={style.ModalWindow}
                onClick={(e) => {
                    e.stopPropagation()
                }}
            >
                <div
                    className={style.closeBtn}
                    onClick={active}
                >
                    <CloseIcon/>
                </div>
                <h2>Заполните, чтобы забронировать</h2>
                <div className={style.Inputs}>
                    <InputMaterial
                        icon={geoIcon}
                        placeholder={'Город'}
                        type={'text'}
                        height={'8vh'}
                        width={'250px'}
                        onChange={(e) => {setData(prevState => ({...prevState, city: e.target.value}))}}
                    />
                    <InputMaterial
                        icon={dateIcon}
                        placeholder={'Дата'}
                        type={'date'}
                        height={'8vh'}
                        width={'252px'}
                        onChange={(e) => {setData(prevState => ({...prevState, date: e.target.value}))}}
                    />
                    <InputMaterial
                        icon={userIcon}
                        placeholder={'Персон'}
                        type={'number'}
                        height={'8vh'}
                        width={'250px'}
                        onChange={(e) => {setData(prevState => ({...prevState, persons: e.target.value}))}}
                    />
                    <InputMaterial
                        icon={phoneIcon}
                        placeholder={'Номер Телефона'}
                        type={'number'}
                        height={'8vh'}
                        width={'250px'}
                        onChange={(e) => {setData(prevState => ({...prevState, persons: e.target.value}))}}
                    />
                  
                    <input
                        onClick={() => {
                            if (data.city && data.date && data.persons) {
                                const free = sessionStorage.getItem('free')
                                if (free === 'true') {
                                    showSuccess('Готово', 'Отель успешно забронирован!')
                                } else {
                                    showError('Ошибка', 'В данный момент в отеле нет мест!')
                                }
                            } else {
                                showInfo('Отклонено', 'Сначало заполните всю информацию!')
                            }
                        }}
                        className={style.Button}
                        type="button"
                        value={'Поиск'}
                    />
                </div>
            </div>
        </div>
    );
};

export default ModalWindow;