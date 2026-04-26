 import ik1 from '../assets/images/Ik1.jpg'
 import ik2 from '../assets/images/Ik2.jpg'
 import ik3 from '../assets/images/ik3.jpg'
 import ik4 from '../assets/images/ik4.jpg'
 import al1 from '../assets/images/alai1.jpg'
 import al2 from '../assets/images/alai2.jpg'
 import al3 from '../assets/images/alai3.jpg'
 import al4 from '../assets/images/alai4.jpg'
 import bob1 from '../assets/images/bob1.jpg'
 import bob2 from '../assets/images/bob2.jpg'
 import bob3 from '../assets/images/bob3.jpg'
 import bob4 from '../assets/images/bob4.jpg'
import sk1 from '../assets/images/sk1.jpg'
import sk2 from '../assets/images/sk2.jpg'
import sk3 from '../assets/images/sk3.jpg'
import sk4 from '../assets/images/sk4.jpg'
import ck1 from '../assets/images/ck1.jpg'
import ck2 from '../assets/images/ck2.JPG'
import ck3 from '../assets/images/ck3.jpeg'
import ck4 from '../assets/images/ck4.jpg'
import osh1 from '../assets/images/osh1.jpg'
import osh2 from '../assets/images/osh2.webp'
import osh3 from '../assets/images/osh3.jpg'
import osh4 from '../assets/images/osh4.jpeg'



 

 
 export const TOURS_DATA = [
    {
      id: 1,
      emoji: "🏔️",
      titleRu: "Иссык-Куль — Жемчужина Кыргызстана",
      titleEn: "Issyk-Kul — Pearl of Kyrgyzstan",
      locationRu: "Иссык-Куль",
      locationEn: "Issyk-Kul",
      duration: "3 / 2",
      price: 8500,
      diffKey: "easy",
      descRu: "Иссык-Куль — второе по величине горное озеро в мире. Кристально чистая вода, песчаные пляжи и величественные горы Тянь-Шаня создают незабываемую атмосферу.",
      descEn: "Issyk-Kul is the second-largest alpine lake in the world. Crystal-clear water, sandy beaches and the majestic Tian Shan mountains create an unforgettable atmosphere.",
      includesRu: ["Трансфер из Бишкека", "Проживание в санатории", "Питание 3 раза в день", "Экскурсовод"],
      includesEn: ["Transfer from Bishkek", "Sanatorium accommodation", "3 meals a day", "Tour guide"],
      highlightsRu: ["Пляжный отдых", "Конные прогулки", "Семинарская долина"],
      highlightsEn: ["Beach relaxation", "Horse riding", "Semyonovka valley"],
      color: "#2f6f8f",
      images: [
        ik1,
        ik2,
        ik3,
        ik4,
      ],
    },
    {
      id: 2,
      emoji: "🦅",
      titleRu: "Алай — Высокогорное приключение",
      titleEn: "Alay — High-Altitude Adventure",
      locationRu: "Ошская область",
      locationEn: "Osh Region",
      duration: "5 / 4",
      price: 15200,
      diffKey: "medium",
      descRu: "Алайская долина — одно из красивейших мест Центральной Азии. Здесь вы увидите пик Ленина высотой 7134 м, познакомитесь с бытом кочевников.",
      descEn: "The Alay Valley is one of the most beautiful places in Central Asia. See Lenin Peak at 7,134 m, experience nomadic life and untouched nature.",
      includesRu: ["Авиаперелёт Бишкек–Ош", "Трансфер в горы", "Проживание в юртах", "Питание", "Гид"],
      includesEn: ["Bishkek–Osh flight", "Mountain transfer", "Yurt accommodation", "Meals", "Guide"],
      highlightsRu: ["Пик Ленина 7134м", "Юрточный лагерь", "Охота с беркутами", "Конный трек"],
      highlightsEn: ["Lenin Peak 7134m", "Yurt camp", "Eagle hunting", "Horse trekking"],
      color: "#d7262e",
      images: [
        al1,
        al2,
        al3,
        al4,
      ],
    },
    {
      id: 3,
      emoji: "🌿",
      titleRu: "Арсланбоб — Орехи и водопады",
      titleEn: "Arslanbob — Walnuts & Waterfalls",
      locationRu: "Джалал-Абад",
      locationEn: "Jalal-Abad",
      duration: "2 / 1",
      price: 5800,
      diffKey: "easy",
      descRu: "Арсланбоб — это крупнейший в мире природный грецкий орехово-фруктовый лес. Водопады, чистый горный воздух и гостеприимные жители.",
      descEn: "Arslanbob hosts the world's largest natural walnut forest. Waterfalls, fresh mountain air and incredibly warm-hearted locals await you.",
      includesRu: ["Трансфер", "Ночлег у местной семьи", "Завтрак и ужин", "Пеший гид"],
      includesEn: ["Transfer", "Homestay with local family", "Breakfast & dinner", "Walking guide"],
      highlightsRu: ["Большой водопад 80м", "Ореховый лес ЮНЕСКО", "Малый водопад", "Дегустация мёда"],
      highlightsEn: ["Big Waterfall 80m", "UNESCO walnut forest", "Small waterfall", "Honey tasting"],
      color: "#4a7c59",
      images: [
        bob1,
        bob2,
        bob3,
        bob4,
      ],
    },
    {
      id: 4,
      emoji: "🏕️",
      titleRu: "Сон-Куль — Небесное озеро",
      titleEn: "Son-Kul — Celestial Lake",
      locationRu: "Нарынская область",
      locationEn: "Naryn Region",
      duration: "2 / 1",
      price: 6900,
      diffKey: "medium",
      descRu: "Сон-Куль расположен на высоте 3016 м. Летом здесь кочевники разбивают юрты. Ночное небо без помех — это тысячи звёзд.",
      descEn: "Son-Kul sits at 3,016 m altitude. In summer nomads pitch their yurts here. The unpolluted night sky reveals thousands of stars.",
      includesRu: ["Трансфер из Бишкека", "Ночь в юрте", "Традиционная еда", "Экскурсовод"],
      includesEn: ["Transfer from Bishkek", "Night in a yurt", "Traditional food", "Tour guide"],
      highlightsRu: ["Ночёвка в юрте", "Звёздное небо", "Конная прогулка", "Закат над озером"],
      highlightsEn: ["Yurt overnight", "Starry sky", "Horse riding", "Lake sunset"],
      color: "#6b4fa0",
      images: [
        sk2,
        sk1,
        sk3,
        sk4,
      ],
    },
    {
      id: 5,
      emoji: "🗻",
      titleRu: "Чон-Кемин — Треккинг в горах",
      titleEn: "Chon-Kemin — Mountain Trekking",
      locationRu: "Чуйская область",
      locationEn: "Chui Region",
      duration: "3 / 2",
      price: 9400,
      diffKey: "hard",
      descRu: "Долина Чон-Кемин — идеальное место для треккинга рядом с Бишкеком. Снежные вершины, ледники, горные реки и альпийские луга.",
      descEn: "Chon-Kemin Valley is the perfect trekking destination near Bishkek. Snow peaks, glaciers, mountain rivers and alpine meadows.",
      includesRu: ["Трансфер", "Кемпинг-снаряжение", "Питание в полевых условиях", "Горный гид"],
      includesEn: ["Transfer", "Camping gear", "Field meals", "Mountain guide"],
      highlightsRu: ["Ледник Аксу", "Альпийские луга", "Горные реки", "Палаточный лагерь"],
      highlightsEn: ["Aksu Glacier", "Alpine meadows", "Mountain rivers", "Tent camp"],
      color: "#2f6f8f",
      images: [
        ck1,
        ck2,
        ck3,
        ck4,
      ],
    },
    {
      id: 6,
      emoji: "🏛️",
      titleRu: "Ош — Древний Шёлковый путь",
      titleEn: "Osh — Ancient Silk Road",
      locationRu: "Ош",
      locationEn: "Osh",
      duration: "2 / 1",
      price: 7100,
      diffKey: "easy",
      descRu: "Ош — один из древнейших городов Средней Азии, ему более 3000 лет. Священная гора Сулайман-Тоо, колоритный базар и мечети.",
      descEn: "Osh is one of the oldest cities in Central Asia, over 3,000 years old. The sacred Sulaiman-Too mountain, colorful bazaar and mosques.",
      includesRu: ["Авиаперелёт", "Отель 3*", "Завтрак", "Городской гид"],
      includesEn: ["Flight", "3* hotel", "Breakfast", "City guide"],
      highlightsRu: ["Гора Сулайман-Тоо", "Базар Жайма", "Мечеть Равзайи Аввалин"],
      highlightsEn: ["Sulaiman-Too mountain", "Jayma Bazaar", "Ravzai Avvalin Mosque"],
      color: "#c97820",
      images: [
        osh1,
        osh2,
        osh3,
        osh4,
      ],
    },
  ];