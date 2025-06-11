// src/data/cityData.js

export const allCities = [
  {
    id: 1,
    name: "Colmar",
    country: "France",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d0/ColmarFrance.jpg",
    description: "운하가 흐르는 프랑스 동부의 감성 소도시",
    vibe: "감성", group: "혼자", budget: "중", duration: "짧게"
  },
  {
    id: 2,
    name: "Arles",
    country: "France",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/1_arles_france_2016.jpg",
    description: "고흐가 사랑한 도시, 로마 유적과 예술의 조화",
    vibe: "예술", group: "연인", budget: "중", duration: "짧게"
  },
  {
    id: 3,
    name: "Annecy",
    country: "France",
    image: "https://i.natgeofe.com/n/bb3e12df-8050-43fe-b54c-1557b3c05585/weekender_E9H6BK_ukHR.jpg",
    description: "투명한 호수와 알프스 뷰, 운하가 흐르는 도시",
    vibe: "자연", group: "가족", budget: "고급", duration: "길게"
  },
  {
    id: 4,
    name: "Dinan",
    country: "France",
    image: "https://d3dqioy2sca31t.cloudfront.net/Projects/cms/production/000/014/369/large/eff30c6cec54233a570c16a7536255a4/france-brittany-dinan-river.jpg",
    description: "중세 분위기 그대로! 성벽과 돌길이 인상적",
    vibe: "역사", group: "혼자", budget: "중", duration: "짧게"
  },
  {
    id: 5,
    name: "Ronda",
    country: "Spain",
    image: "https://www.travelandleisure.com/thmb/icchrtOlu1RLTTYTDkORVQBkBAo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-ronda-bridge-RONDASP1123-eb30e708489c49c581918db3d2b8af47.jpg",
    description: "협곡을 가로지르는 드라마틱한 뷰, 투우의 본고장",
    vibe: "자연", group: "연인", budget: "저렴", duration: "길게"
  },
  {
    id: 6,
    name: "Cuenca",
    country: "Spain",
    image: "https://images.ctfassets.net/zmjc9gr9hbbf/3IB0gztqOVSBnsb3wN5i8I/c5c9b2b9f8feb1e9a21dcf2637ab46ad/MAN35497_The_city_of_Cuenca__a_UNESCO_World_Heritage_Site._Shutterstock.jpg?w=1980",
    description: "유네스코 세계문화유산 / 예술가 마을 분위기",
    vibe: "예술", group: "혼자", budget: "중", duration: "길게"
  },
  {
    id: 7,
    name: "Ciudad Rodrigo",
    country: "Spain",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/RI-53-0000010.jpg",
    description: "중세 성벽 도시, 작고 고요함",
    vibe: "역사", group: "혼자", budget: "저렴", duration: "짧게"
  },
  {
    id: 8,
    name: "Cadaqués",
    country: "Spain",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Cadaques_Pueblo_Marinero.JPG/1200px-Cadaques_Pueblo_Marinero.JPG",
    description: "흰색 건물 + 바다 조합이 지중해 감성 그 자체",
    vibe: "감성", group: "연인", budget: "중", duration: "짧게"
  },
  {
    id: 9,
    name: "Kurashiki",
    country: "Japan",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/f1/41/05/photo0jpg.jpg?w=1100&h=600&s=1",
    description: "백벽 창고가 줄지은 운하 마을",
    vibe: "전통", group: "혼자", budget: "중", duration: "짧게"
  },
  {
    id: 10,
    name: "Karuizawa",
    country: "Japan",
    image: "https://res.klook.com/image/upload/c_fill,w_420,h_260/v1700568421/Karuizawa2_fdrdos.jpg",
    description: "도쿄 근교의 고급 별장지",
    vibe: "휴양", group: "가족", budget: "고급", duration: "짧게"
  },
  {
    id: 11,
    name: "Takayama",
    country: "Japan",
    image: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/109000/109225-Takayama.jpg",
    description: "히다규(소고기) 요리로 유명, 옛 일본 분위기 그대로",
    vibe: "전통", group: "연인", budget: "중", duration: "짧게"
  },
  {
    id: 12,
    name: "Obuse",
    country: "Japan",
    image: "https://www.japan-guide.com/thumb/XYZeXYZe6020_1680a.jpg",
    description: "호쿠사이 미술관, 작고 조용한 골목 + 현대 감성",
    vibe: "예술", group: "혼자", budget: "저렴", duration: "짧게"
  }
];

export const allRestaurants = [
  {
    id: 1,
    name: "La Petite Table",
    country: "France",
    theme: "감성 카페",
    image: "https://source.unsplash.com/400x300/?french,cafe",
    description: "조용한 거리의 감성 프렌치 카페",
  },
  {
    id: 2,
    name: "Sakura Sushi",
    country: "Japan",
    theme: "일식",
    image: "https://source.unsplash.com/400x300/?sushi,japan",
    description: "현지 느낌 그대로의 스시 바",
  },
  {
    id: 3,
    name: "Casa de Tapas",
    country: "Spain",
    theme: "타파스 바",
    image: "https://source.unsplash.com/400x300/?spanish,tapas",
    description: "스페인의 정취를 느낄 수 있는 타파스 전문점",
  }
];

export default allCities;