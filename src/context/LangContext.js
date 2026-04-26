import React, { createContext, useContext, useState } from 'react';
import Reviews from '../modules/Reviews/Reviews';

const translations = {
  ru: {
    // Header
    hotels: 'Отели',
    flights: 'Авиабилеты',
    excursions: 'Экскурсии',
    signIn: 'Войти',
    signUp: 'Sign Up',
    logout: 'Выйти',
    hello: 'Привет',

    // Registration
    regTitle: 'Регистрация',
    regSubtitle: 'Создайте аккаунт и откройте Кыргызстан',
    name: 'Имя',
    namePlaceholder: 'Введите ваше имя',
    email: 'Email',
    emailPlaceholder: 'example@mail.com',
    phone: 'Телефон',
    phonePlaceholder: '+996 700 000 000',
    password: 'Пароль',
    passwordPlaceholder: 'Минимум 6 символов',
    confirmPassword: 'Подтвердите пароль',
    confirmPasswordPlaceholder: 'Повторите пароль',
    registerBtn: 'Зарегистрироваться',
    registering: 'Регистрация...',
    haveAccount: 'Уже есть аккаунт?',
    loginLink: 'Войти',
    regSuccess: 'Регистрация успешна!',
    regSuccessText: 'Добро пожаловать в Kyrgyz Travel. Теперь вы можете войти в аккаунт.',
    goLogin: 'Войти в аккаунт',

    // Login
    loginTitle: 'Вход в аккаунт',
    loginSubtitle: 'Рады видеть вас снова!',
    loginBtn: 'Войти',
    loggingIn: 'Входим...',
    noAccount: 'Нет аккаунта?',
    createAccount: 'Зарегистрироваться',
    loginSuccess: 'Добро пожаловать!',
    loginSuccessText: 'Вы успешно вошли в аккаунт.',

    // Validation errors
    errRequired: 'Это поле обязательно',
    errEmailFormat: 'Введите корректный email',
    errPasswordMin: 'Пароль должен содержать минимум 6 символов',
    errPasswordMatch: 'Пароли не совпадают',
    errPhoneFormat: 'Введите корректный номер телефона',
    errNameMin: 'Имя должно содержать минимум 2 символа',
    errDatePast: 'Дата не может быть в прошлом',
    errPersons: 'Укажите количество гостей (минимум 1)',
    errPersonsMax: 'Максимум 20 гостей',
    errCheckOut: 'Дата выезда должна быть позже заезда',
    errRoomRequired: 'Пожалуйста, выберите номер',

    // Tours
    toursTitle: 'Экскурсии по Кыргызстану',
    toursSubtitle: 'Откройте для себя уникальные маршруты — от горных озёр до древних городов Шёлкового пути',
    backToTours: '← Назад к экскурсиям',
    included: '✅ Включено',
    highlights: '⭐ Highlights',
    priceFrom: 'Цена от',
    perPerson: 'с человека',
    bookTour: 'Забронировать',
    tourBookMsg: 'Для бронирования позвоните: +996 700 123 456',
    loginToBook: 'Войдите, чтобы забронировать',
    difficulty: 'сложность',
    easy: 'Лёгкая',
    medium: 'Средняя',
    hard: 'Высокая',

    // Hotels / Booking
    bookHotel: 'Забронировать',
    bookRestrict: 'Войдите в аккаунт, чтобы забронировать отель',
    bookModalTitle: 'Заполните, чтобы забронировать',
    city: 'Город',
    date: 'Дата',
    persons: 'Персон',
    phoneNum: 'Номер Телефона',
    search: 'Поиск',
    bookSuccess: 'Отель успешно забронирован!',
    bookError: 'В данный момент в отеле нет мест!',
    bookFill: 'Сначала заполните всю информацию!',
    freePlaces: 'Есть свободные места',
    noPlaces: 'Нет мест',

    // Home
    homeTitle: 'Найдите жилье для новой поездки',
    homeSubtitle: 'Ищите спецпредложения на отели, дома и другие варианты.!',
    details: 'Подробнее',
    som: 'сом',
    reviews: 'Вот что говорят о StayGuest'
  },
  en: {
    // Header
    hotels: 'Hotels',
    flights: 'Flights',
    excursions: 'Excursions',
    signIn: 'Sign In',
    signUp: 'Sign Up',
    logout: 'Log Out',
    hello: 'Hello',

    // Registration
    regTitle: 'Create Account',
    regSubtitle: 'Sign up and discover Kyrgyzstan',
    name: 'Name',
    namePlaceholder: 'Enter your name',
    email: 'Email',
    emailPlaceholder: 'example@mail.com',
    phone: 'Phone',
    phonePlaceholder: '+996 700 000 000',
    password: 'Password',
    passwordPlaceholder: 'Minimum 6 characters',
    confirmPassword: 'Confirm Password',
    confirmPasswordPlaceholder: 'Repeat your password',
    registerBtn: 'Create Account',
    registering: 'Creating account...',
    haveAccount: 'Already have an account?',
    loginLink: 'Sign In',
    regSuccess: 'Registration Successful!',
    regSuccessText: 'Welcome to Kyrgyz Travel. You can now sign in to your account.',
    goLogin: 'Go to Sign In',

    // Login
    loginTitle: 'Sign In',
    loginSubtitle: 'Great to see you again!',
    loginBtn: 'Sign In',
    loggingIn: 'Signing in...',
    noAccount: "Don't have an account?",
    createAccount: 'Create Account',
    loginSuccess: 'Welcome back!',
    loginSuccessText: 'You have successfully signed in.',

    // Validation errors
    errRequired: 'This field is required',
    errEmailFormat: 'Enter a valid email address',
    errPasswordMin: 'Password must be at least 6 characters',
    errPasswordMatch: 'Passwords do not match',
    errPhoneFormat: 'Enter a valid phone number',
    errNameMin: 'Name must be at least 2 characters',
    errDatePast: 'Date cannot be in the past',
    errPersons: 'Please specify number of guests (min 1)',
    errPersonsMax: 'Maximum 20 guests',
    errCheckOut: 'Check-out must be after check-in',
    errRoomRequired: 'Please select a room',

    // Tours
    toursTitle: 'Excursions in Kyrgyzstan',
    toursSubtitle: 'Discover unique routes — from mountain lakes to ancient Silk Road cities',
    backToTours: '← Back to Excursions',
    included: '✅ Included',
    highlights: '⭐ Highlights',
    priceFrom: 'Price from',
    perPerson: 'per person',
    bookTour: 'Book Now',
    tourBookMsg: 'To book, call: +996 700 123 456',
    loginToBook: 'Sign in to book',
    difficulty: 'difficulty',
    easy: 'Easy',
    medium: 'Moderate',
    hard: 'Hard',

    // Hotels / Booking
    bookHotel: 'Book Now',
    bookRestrict: 'Sign in to book a hotel',
    bookModalTitle: 'Fill in to book',
    city: 'City',
    date: 'Date',
    persons: 'Guests',
    phoneNum: 'Phone Number',
    search: 'Search',
    bookSuccess: 'Hotel successfully booked!',
    bookError: 'No rooms available at the moment!',
    bookFill: 'Please fill in all information first!',
    freePlaces: 'Rooms available',
    noPlaces: 'No rooms',

    // Home
    homeTitle: 'Find accommodation for your next trip',
    homeSubtitle: 'Search for special deals on hotels, homes and more!',
    details: 'View Details',
    som: 'KGS',
    reviews: 'That is what people say about StayGuest'
  }
};

const LangContext = createContext(null);

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState('ru');
  const t = (key) => translations[lang][key] || key;
  const toggleLang = () => setLang(l => l === 'ru' ? 'en' : 'ru');

  return (
    <LangContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);
