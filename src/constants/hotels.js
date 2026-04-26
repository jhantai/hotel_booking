import ambassador1 from "../assets/images/AMBASSADOR.png";
import ambassador2 from "../assets/images/ambassador2.jpg";
import ambassador3 from "../assets/images/ambassador3.jpg";
import ambassador4 from "../assets/images/ambassador4.jpg";
import ambassador5 from "../assets/images/ambassador5.jpg";
import ambassador6 from "../assets/images/ambassador6.jpg";
import sheraton1 from "../assets/images/SHERATON.png";
import sheraton2 from "../assets/images/sheraton2.jpg";
import sheraton3 from "../assets/images/sheraton3.jpg";
import sheraton4 from "../assets/images/sheraton4.jpg";
import sheraton5 from "../assets/images/sheraton5.jpg";
import sheraton6 from "../assets/images/sheraton6.jpg";
import orion1 from "../assets/images/ORION.png";
import orion2 from "../assets/images/orion2.jpg";
import orion3 from "../assets/images/orion3.jpg";
import orion4 from "../assets/images/orion4.jpg";
import orion5 from "../assets/images/orion5.jpg";
import orion6 from "../assets/images/orion6.jpg";
import novotel1 from "../assets/images/NOVOTEL.png";
import novotel2 from "../assets/images/novotel2.jpg";
import novotel3 from "../assets/images/novotel3.jpg";
import novotel4 from "../assets/images/novotel4.jpg";
import novotel5 from "../assets/images/novotel5.jpg";
import novotel6 from "../assets/images/novotel6.jpg";
import goldentulp1 from "../assets/images/RAMADA.png";
import goldentulp2 from "../assets/images/ramada2.jpg";
import goldentulp3 from "../assets/images/ramada3.jpg";
import goldentulp4 from "../assets/images/ramada4.jpg";
import goldentulp5 from "../assets/images/ramada5.jpg";
import goldentulp6 from "../assets/images/ramada6.jpg";
import goldendragon1 from "../assets/images/GOLDENDRAGON.png";
import goldendragon2 from "../assets/images/garden2.jpg";
import goldendragon3 from "../assets/images/garden3.jpg";
import goldendragon4 from "../assets/images/garden4.jpg";
import goldendragon5 from "../assets/images/garden5.jpg";
import goldendragon6 from "../assets/images/garden6.jpg";
import jannat from "../assets/images/jannat.png";
import jannat2 from "../assets/images/jannat2.jpg";
import jannat3 from "../assets/images/jannta3.jpg";
import jannat4 from "../assets/images/jannat4.jpg";
import jannat5 from "../assets/images/jannat5.jpg";
import jannat6 from "../assets/images/jannat6.jpg";
import centrum from "../assets/images/centrum.png";
import centrum2 from "../assets/images/centrum2.jpg";
import centrum3 from "../assets/images/centrum3.jpg";
import centrum4 from "../assets/images/centrum4.jpg";
import centrum5 from "../assets/images/centrum5.jpg";
import centrum6 from "../assets/images/centrum6.jpg";
import evropa from "../assets/images/evropa.png";
import evropa2 from "../assets/images/evropa2.jpg";
import evropa3 from "../assets/images/evropa3.jpg";
import evropa4 from "../assets/images/evropa4.jpg";
import evropa5 from "../assets/images/evropa5.jpg";
import evropa6 from "../assets/images/evropa6.jpg";
import garden from "../assets/images/garden.png";
import garden2 from "../assets/images/garden2.jpg";
import garden3 from "../assets/images/garden3.jpg";
import garden4 from "../assets/images/garden4.jpg";
import garden5 from "../assets/images/garden5.jpg";
import garden6 from "../assets/images/garden6.jpg";
import hayat from "../assets/images/Hayat.png";
import haya2 from "../assets/images/hayat2.jpg";
import hayat3 from "../assets/images/hayat3.jpg";
import hayat4 from "../assets/images/hayat4.jpg";
import hayat5 from "../assets/images/hayat5.jpg";
import hayat6 from "../assets/images/hayat6.jpg";
import parkHotel from "../assets/images/parkHotel.png";
import parkHotel2 from "../assets/images/park2.jpg";
import parkHotel3 from "../assets/images/park3.jpg";
import parkHotel4 from "../assets/images/park4.jpg";
import parkHotel5 from "../assets/images/park5.jpg";
import parkHotel6 from "../assets/images/park6.jpg";
import plaza from "../assets/images/plaza.png";
import plaza2 from "../assets/images/park2.jpg";
import plaza3 from "../assets/images/park3.jpg";
import plaza4 from "../assets/images/park4.jpg";
import plaza5 from "../assets/images/park5.jpg";
import plaza6 from "../assets/images/park6.jpg";
import smartHotel from "../assets/images/SmartHotel.png";
import smartHotel2 from "../assets/images/Smart2.jpg";
import smartHotel3 from "../assets/images/smart3.jpg";
import smartHotel4 from "../assets/images/smart4.jpg";
import smartHotel5 from "../assets/images/smart5.jpg";
import smartHotel6 from "../assets/images/smart6.jpg";
import futuro from "../assets/images/futuro.png";
import futuro2 from "../assets/images/futuro2.jpg";
import futuro3 from "../assets/images/futuro3.jpg";
import futuro4 from "../assets/images/futuro4.jpg";
import futuro5 from "../assets/images/futuro5.jpg";
import futuro6 from "../assets/images/futuro6.jpg";

// Helper — generate room list for a hotel
const makeRooms = (basePrice, hasFreeRooms) => [
  { id: 'std_city', nameRu: 'Стандарт (вид на город)', nameEn: 'Standard (city view)', price: basePrice, available: hasFreeRooms, beds: 1, size: 22 },
  { id: 'std_yard', nameRu: 'Стандарт (вид во двор)', nameEn: 'Standard (courtyard view)', price: Math.round(basePrice * 0.9), available: true, beds: 1, size: 20 },
  { id: 'dbl_window', nameRu: 'Двухместный у окна', nameEn: 'Double (window side)', price: Math.round(basePrice * 1.15), available: hasFreeRooms, beds: 2, size: 28 },
  { id: 'dbl_quiet', nameRu: 'Двухместный (тихий)', nameEn: 'Double (quiet side)', price: Math.round(basePrice * 1.05), available: true, beds: 2, size: 26 },
  { id: 'suite', nameRu: 'Люкс', nameEn: 'Suite', price: Math.round(basePrice * 1.8), available: hasFreeRooms, beds: 2, size: 45 },
];

export const HOTELS_DATA = [
  {
    image: orion1,
    images: [orion1, orion2, orion3, orion4, orion5, orion6],
    free: true,
    name: "Orion Hotel Bishkek",
    price: 19637,
    address: "Эркиндик бульвар 21, Бишкек 720040",
    stars: 4,
    checkIn: "14:00", checkOut: "12:00",
    distCenter: "1.4 км от центра",
    textRu: "Современный бизнес-отель в самом сердце Бишкека на легендарном бульваре Эркиндик. Просторные номера с панорамными окнами, конференц-залы и фирменный ресторан делают его идеальным как для деловых поездок, так и для семейного отдыха.",
    textEn: "A modern business hotel in the heart of Bishkek on the legendary Erkindik boulevard. Spacious rooms with panoramic windows, conference halls and a signature restaurant make it ideal for both business trips and family vacations.",
    amenities: ["📶 Wi-Fi", "🚗 Парковка", "🍽 Ресторан", "💪 Фитнес-зал", "🏊 Бассейн", "🛎 Консьерж", "💼 Бизнес-центр"],
    rooms: makeRooms(19637, true),
  },
  {
    image: goldendragon1,
    images: [goldendragon1, goldendragon2, goldendragon3, goldendragon4, goldendragon5, goldendragon6],
    free: true,
    name: "Golden Dragon",
    price: 10763,
    address: "ул. Элебаева 60, Бишкек 720005",
    stars: 3,
    checkIn: "14:00", checkOut: "12:00",
    distCenter: "2.8 км от центра",
    textRu: "Уютный отель в тихом районе Бишкека с ориентальным интерьером. Отличается домашней атмосферой, вкусным завтраком и добросовестным сервисом. Прекрасный выбор для туристов, ценящих спокойствие и соотношение цена-качество.",
    textEn: "A cozy hotel in a quiet district of Bishkek with oriental interior. Known for its homely atmosphere, delicious breakfast and attentive service. Perfect for travelers who value peace and a great price-to-quality ratio.",
    amenities: ["📶 Wi-Fi", "🚗 Парковка", "🍽 Ресторан", "☕ Завтрак включён"],
    rooms: makeRooms(10763, true),
  },
  {
    image: sheraton1,
    images: [sheraton1, sheraton2, sheraton3, sheraton4, sheraton5, sheraton6],
    free: false,
    name: "Sheraton Bishkek",
    price: 19456,
    address: "ул. Киевская 148B, Бишкек 720001",
    stars: 5,
    checkIn: "14:00", checkOut: "12:00",
    distCenter: "0.5 км от центра",
    textRu: "Флагманский отель международной сети Sheraton в самом центре Бишкека. Безупречный сервис мирового уровня, роскошные номера с видом на горы, спа-центр и несколько ресторанов с авторской кухней. Идеально для деловых делегаций и VIP-гостей.",
    textEn: "The flagship Sheraton hotel in the center of Bishkek. World-class service, luxurious rooms with mountain views, a full spa and multiple signature restaurants. Ideal for business delegations and VIP guests.",
    amenities: ["📶 Wi-Fi", "🚗 Парковка", "🍽 Ресторан", "💪 Фитнес-зал", "🏊 Бассейн", "🧖 СПА", "🛎 Консьерж", "✈️ Трансфер"],
    rooms: makeRooms(19456, false),
  },
  {
    image: novotel1,
    images: [novotel1, novotel2, novotel3, novotel4, novotel5, novotel6],
    free: false,
    name: "Novotel Bishkek City Center",
    price: 16332,
    address: "просп. Манаса 16, Бишкек 720020",
    stars: 4,
    checkIn: "13:00", checkOut: "12:00",
    distCenter: "1.6 км от центра",
    textRu: "Стильный отель сети Accor в деловом центре города. Дизайнерские номера в современном стиле, панорамный бассейн на крыше и круглосуточный ресторан — главные достоинства. Отличная транспортная доступность.",
    textEn: "A stylish Accor hotel in the business center of the city. Designer rooms in a modern style, a rooftop panoramic pool and a 24-hour restaurant are the main highlights. Excellent transport accessibility.",
    amenities: ["📶 Wi-Fi", "🚗 Парковка", "🍽 Ресторан", "💪 Фитнес-зал", "🏊 Бассейн на крыше", "🛎 Консьерж"],
    rooms: makeRooms(16332, false),
  },
  {
    image: jannat,
    images: [jannat, jannat2, jannat3, jannat4, jannat5, jannat6],
    free: true,
    name: "Jannat Regency",
    price: 12267,
    address: "ул. Аалы Токомбаева 21/2, Бишкек 720060",
    stars: 4,
    checkIn: "14:00", checkOut: "13:00",
    distCenter: "5.9 км от центра",
    textRu: "Просторный отель с собственным парком в одном из самых зелёных районов Бишкека. Большой открытый бассейн, детская площадка и банкетные залы делают его любимым местом для семей и корпоративных мероприятий.",
    textEn: "A spacious hotel with its own park in one of the greenest areas of Bishkek. A large outdoor pool, children's playground and banquet halls make it a favorite for families and corporate events.",
    amenities: ["📶 Wi-Fi", "🚗 Парковка", "🍽 Ресторан", "💪 Фитнес-зал", "🏊 Бассейн", "🌳 Парк", "👶 Детская площадка"],
    rooms: makeRooms(12267, true),
  },
  {
    image: ambassador1,
    images: [ambassador1, ambassador2, ambassador3, ambassador4, ambassador5, ambassador6],
    free: true,
    name: "Ambassador Hotel",
    price: 10079,
    address: "ул. Орозбекова 32, Бишкек 720040",
    stars: 3,
    checkIn: "14:00", checkOut: "12:00",
    distCenter: "1.0 км от центра",
    textRu: "Небольшой уютный отель в историческом центре Бишкека с доброжелательным персоналом. Идеален для туристов, которые хотят быть близко к основным достопримечательностям. Вкусный завтрак и чистые просторные номера — главный плюс.",
    textEn: "A small cozy hotel in the historic center of Bishkek with friendly staff. Ideal for tourists who want to be close to the main attractions. A delicious breakfast and clean spacious rooms are the main highlight.",
    amenities: ["📶 Wi-Fi", "🚗 Парковка", "🍽 Ресторан", "☕ Завтрак включён"],
    rooms: makeRooms(10079, true),
  },
  {
    image: parkHotel,
    images: [parkHotel, parkHotel2, parkHotel3, parkHotel4, parkHotel5, parkHotel6],
    free: false,
    name: "Park Hotel",
    price: 13853,
    address: "ул. Орозбекова 87, Бишкек 720040",
    stars: 4,
    checkIn: "13:00", checkOut: "12:00",
    distCenter: "1.7 км от центра",
    textRu: "Элегантный отель на тихой улице в центре города. Уютный внутренний дворик, живописный сад и ресторан с авторской кухней создают особую атмосферу. Любимое место дипломатов и деловых путешественников.",
    textEn: "An elegant hotel on a quiet street in the city center. A cozy inner courtyard, a picturesque garden and a restaurant with signature cuisine create a special atmosphere. A favorite among diplomats and business travelers.",
    amenities: ["📶 Wi-Fi", "🚗 Парковка", "🍽 Ресторан", "💪 Фитнес-зал", "🌳 Сад", "🛎 Консьерж"],
    rooms: makeRooms(13853, false),
  },
  {
    image: goldentulp1,
    images: [goldentulp1, goldentulp2, goldentulp3, goldentulp4, goldentulp5, goldentulp6],
    free: false,
    name: "Ramada by Wyndham Bishkek Centre",
    price: 12145,
    address: "ул. Исанова 37, Бишкек 720017",
    stars: 4,
    checkIn: "13:00", checkOut: "12:00",
    distCenter: "0.1 км от центра",
    textRu: "Отель международной сети Wyndham в 100 метрах от центра города. Безупречное расположение, стильные номера и безупречный сервис международного бренда. Отличный выбор для тех, кто ценит удобство и качество.",
    textEn: "A Wyndham branded hotel 100 meters from the city center. Unbeatable location, stylish rooms and impeccable service from an international brand. An excellent choice for those who value convenience and quality.",
    amenities: ["📶 Wi-Fi", "🚗 Парковка", "🍽 Ресторан", "💪 Фитнес-зал", "🏊 Бассейн", "🛎 Консьерж"],
    rooms: makeRooms(12145, false),
  },
  {
    image: centrum,
    images: [centrum, centrum2, centrum3, centrum4, centrum5, centrum6],
    free: true,
    name: "Bishkek Centrum Hotel",
    price: 6182,
    address: "ул. Султана Ибраимова 113, Бишкек 720211",
    stars: 3,
    checkIn: "14:00", checkOut: "12:30",
    distCenter: "1.4 км от центра",
    textRu: "Доступный отель с отличным расположением вблизи центра. Чистые номера, приветливый персонал и удобная парковка. Подходит для бюджетных поездок без потери в качестве базового сервиса.",
    textEn: "An affordable hotel in an excellent location near the center. Clean rooms, friendly staff and convenient parking. Suitable for budget trips without losing quality basic service.",
    amenities: ["📶 Wi-Fi", "🚗 Парковка", "🍽 Ресторан", "☕ Завтрак"],
    rooms: makeRooms(6182, true),
  },
  {
    image: futuro,
    images: [futuro, futuro2, futuro3, futuro4, futuro5, futuro6],
    free: false,
    name: "Futuro Hotel Bishkek",
    price: 6505,
    address: "ул. Удмуртская 13, Бишкек 720000",
    stars: 3,
    checkIn: "14:00", checkOut: "12:00",
    distCenter: "5.3 км от центра",
    textRu: "Современный отель с минималистичным дизайном в спальном районе города. Тихое и спокойное место, идеальное для длительного проживания. Оборудованные кухни в некоторых номерах — большой плюс для командировочных.",
    textEn: "A modern hotel with minimalist design in a residential area. A quiet and peaceful place, ideal for long-term stays. Equipped kitchens in some rooms are a big advantage for business travelers.",
    amenities: ["📶 Wi-Fi", "🚗 Парковка", "🍽 Кафе", "🏠 Апартаменты с кухней"],
    rooms: makeRooms(6505, false),
  },
  {
    image: plaza,
    images: [plaza, plaza2, plaza3, plaza4, plaza5, plaza6],
    free: true,
    name: "Plaza Hotel Bishkek",
    price: 9723,
    address: "ул. Тоголок Молдо 52, Бишкек 720044",
    stars: 3,
    checkIn: "14:00", checkOut: "12:00",
    distCenter: "1.2 км от центра",
    textRu: "Классический городской отель с многолетней историей. Просторные номера, большой банкетный зал и ресторан с блюдами национальной кухни привлекают как туристов, так и местных жителей на торжества.",
    textEn: "A classic city hotel with a long history. Spacious rooms, a large banquet hall and a restaurant with national cuisine attract both tourists and locals for celebrations.",
    amenities: ["📶 Wi-Fi", "🚗 Парковка", "🍽 Ресторан", "🎉 Банкетный зал"],
    rooms: makeRooms(9723, true),
  },
  {
    image: garden,
    images: [garden, garden2, garden3, garden4, garden5, garden6],
    free: false,
    name: "Garden Hotel & SPA",
    price: 9136,
    address: "Южная Магистраль / ул. Баха, Бишкек 720047",
    stars: 4,
    checkIn: "14:00", checkOut: "12:00",
    distCenter: "5.1 км от центра",
    textRu: "Загородный формат в черте города — роскошный парк, несколько бассейнов и полноценный СПА-центр. Отель идеален для романтических уик-эндов и оздоровительных туров. Фирменный ресторан с видом на сад запомнится надолго.",
    textEn: "A resort-style hotel within the city — a lush park, multiple pools and a full spa center. Ideal for romantic weekends and wellness tours. The signature restaurant overlooking the garden is unforgettable.",
    amenities: ["📶 Wi-Fi", "🚗 Парковка", "🍽 Ресторан", "💪 Фитнес-зал", "🏊 Бассейн", "🧖 СПА", "🌳 Парк"],
    rooms: makeRooms(9136, false),
  },
  {
    image: evropa,
    images: [evropa, evropa2, evropa3, evropa4, evropa5, evropa6],
    free: true,
    name: "Hotel Evropa",
    price: 10363,
    address: "ул. Ибраимова 70, Бишкек 720039",
    stars: 3,
    checkIn: "14:00", checkOut: "12:00",
    distCenter: "1.3 км от центра",
    textRu: "Уютный отель в европейском стиле неподалёку от центра города. Тёплая атмосфера, внимательный персонал и аккуратные номера с хорошим соотношением цены и качества. Популярен среди путешественников из СНГ.",
    textEn: "A cozy European-style hotel near the city center. Warm atmosphere, attentive staff and tidy rooms with a good price-quality ratio. Popular among travelers from CIS countries.",
    amenities: ["📶 Wi-Fi", "🚗 Парковка", "🍽 Ресторан", "☕ Завтрак включён"],
    rooms: makeRooms(10363, true),
  },
  {
    image: smartHotel,
    images: [smartHotel, smartHotel2, smartHotel3, smartHotel4, smartHotel5, smartHotel6],
    free: false,
    name: "Smart Hotel Bishkek",
    price: 11763,
    address: "ул. Абдрахманова 204, Бишкек 720140",
    stars: 3,
    checkIn: "14:00", checkOut: "12:00",
    distCenter: "2.1 км от центра",
    textRu: "Технологичный отель со смарт-системами управления номером. Быстрый Wi-Fi, электронные замки, планшеты в каждом номере. Отличный выбор для молодых путешественников и IT-специалистов в командировке.",
    textEn: "A tech-savvy hotel with smart room management systems. Fast Wi-Fi, electronic locks, tablets in every room. An excellent choice for young travelers and IT professionals on business trips.",
    amenities: ["📶 Wi-Fi (1 Гбит/с)", "🚗 Парковка", "🍽 Кафе", "💻 Коворкинг", "📱 Smart-управление"],
    rooms: makeRooms(11763, false),
  },
  // ── NEW HOTEL ─────────────────────────────────────────────────────────
  {
    image: hayat,
    images: [hayat, haya2, hayat3, hayat4, hayat5, hayat6],
    free: true,
    name: "Hyatt Regency Bishkek",
    price: 24800,
    address: "ул. Московская 191, Бишкек 720010",
    stars: 5,
    checkIn: "15:00", checkOut: "12:00",
    distCenter: "0.8 км от центра",
    textRu: "Легендарный пятизвёздочный отель Hyatt Regency — эталон роскоши и безупречного сервиса в Бишкеке. Панорамные виды на горы Тянь-Шаня из каждого номера, infinity-бассейн на 8-м этаже, мишленовский ресторан и полноценный Spa & Wellness-центр площадью 2000 м². Любимое место глав государств и звёзд мировой величины.",
    textEn: "The legendary five-star Hyatt Regency — the benchmark of luxury and impeccable service in Bishkek. Panoramic Tian Shan mountain views from every room, an 8th-floor infinity pool, a Michelin-starred restaurant and a 2,000 m² Spa & Wellness center. The favorite destination of heads of state and world-class celebrities.",
    amenities: ["📶 Wi-Fi (1 Гбит/с)", "🚗 Подземная парковка", "🍽 Ресторан Michelin", "💪 Фитнес 24/7", "🏊 Infinity-бассейн", "🧖 Spa 2000 м²", "🛎 Butler-сервис", "✈️ Трансфер из аэропорта", "🏔 Вид на горы"],
    rooms: [
      { id: 'deluxe_mtn', nameRu: 'Делюкс (вид на горы)', nameEn: 'Deluxe Mountain View', price: 24800, available: true, beds: 1, size: 38 },
      { id: 'deluxe_city', nameRu: 'Делюкс (вид на город)', nameEn: 'Deluxe City View', price: 22000, available: true, beds: 1, size: 36 },
      { id: 'king_mtn', nameRu: 'Кинг (вид на горы)', nameEn: 'King Mountain View', price: 29500, available: true, beds: 1, size: 48 },
      { id: 'junior_suite', nameRu: 'Джуниор Люкс', nameEn: 'Junior Suite', price: 38000, available: false, beds: 2, size: 60 },
      { id: 'presidential', nameRu: 'Президентский люкс', nameEn: 'Presidential Suite', price: 85000, available: false, beds: 2, size: 120 },
    ],
  },
];
