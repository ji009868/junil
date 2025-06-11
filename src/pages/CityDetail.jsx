import React from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function CityDetail() {
  const { id } = useParams();
  const cityId = parseInt(id);

  const allCities = [
    {
      id: 1,
      name: "Colmar",
      country: "France",
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/d/d0/ColmarFrance.jpg",
        "https://images.goway.com/production/styles/hero_s1_2xl/s3/hero/iStock-1423136049.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeYj0MqaXnK3WW1WRnB296lOcmiD-0YWIQRA&s"
      ],
      description: "운하가 흐르는 프랑스 동부의 감성 소도시",
      stats: {
        weather: 5,
        safety: 9,
        cost: 5,
        rating: 9
      },
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d170492.22472184178!2d7.227577797647129!3d48.11137363476527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479165dff670c1cf%3A0xe35d7e3e616ce966!2z7ZSE656R7IqkIDY4MDAwIOy9nOuniOultA!5e0!3m2!1sko!2skr!4v1745366676065!5m2!1sko!2skr"
    },
    {
      id: 2,
      name: "Arles",
      country: "France",
      images: [
              "https://upload.wikimedia.org/wikipedia/commons/3/3c/1_arles_france_2016.jpg",
              "https://asset-prod.france.fr/arenes_darles_credit_wego_productions_crtpaca_1af9c0a75b.jpg",
              "https://images.squarespace-cdn.com/content/v1/62015f66f840ef671da14ae7/f1066a37-3019-44e3-9c67-dcbb313592de/Aerial+view+of+Arles+038.JPG" 
            ],
      description: "고흐가 사랑한 도시, 로마 유적과 예술의 조화",
      stats: {
        weather: 8,
        safety: 9,
        cost: 6,
        rating: 9
      },
      mapEmbedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d370175.67931573594!2d4.321633141265574!3d43.54409412642055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b672075d4814cd%3A0x40819a5fd970550!2z7ZSE656R7IqkIOyVhOulvA!5e0!3m2!1sko!2skr!4v1745389245832!5m2!1sko!2sk"
    },
    {
      id: 3,
      name: "Annecy",
      country: "France",
      images: [
            "https://i.natgeofe.com/n/bb3e12df-8050-43fe-b54c-1557b3c05585/weekender_E9H6BK_ukHR.jpg",
            "https://www.flightgift.com/media/wp/FG/2022/08/ANNECY-OLD-TOWN.jpg",
            "https://lp-cms-production.imgix.net/2024-08/shutterstock2184916813.jpg?auto=format,compress&q=72&w=1440&h=810&fit=crop"
          ],
            description: "투명한 호수와 알프스 뷰, 운하가 흐르는 도시",
      stats: {
        weather: 6,
        safety: 8,
        cost: 7,
        rating: 9
      },
      mapEmbedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44433.152375364756!2d6.087303540938033!3d45.88987259726947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478b8ffa1c0551c9%3A0x42781681620534ba!2z7ZSE656R7IqkIOyVhOuEpOyUqCDslYjsi5w!5e0!3m2!1sko!2skr!4v1745389359915!5m2!1sko!2skr"
    },
    {
      id: 4,
      name: "Dinan",
      country: "France",
      images: ["https://d3dqioy2sca31t.cloudfront.net/Projects/cms/production/000/014/369/large/eff30c6cec54233a570c16a7536255a4/france-brittany-dinan-river.jpg",
              "https://i0.wp.com/thefrancehouse.com/wp-content/uploads/2022/07/2560px-Dinan_Panorama-header-1.png?fit=1389%2C1046&ssl=1",      
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL6o4DEktWTpJsyiSI8sf773hY3k82Kou6hA&s"
               ],
        description: "중세 분위기 그대로! 성벽과 돌길이 인상적",
      stats: {
        weather: 6,
        safety: 9,
        cost: 5,
        rating: 9
      },
      mapEmbedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42343.83551348371!2d-2.094491571884826!3d48.447132647262336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480e8a19322f72d9%3A0x40ca5cd36e637e0!2z7ZSE656R7IqkIDIyMTAwIOuUlOuEnQ!5e0!3m2!1sko!2skr!4v1745389397072!5m2!1sko!2skr"
    },
    {
      id: 5,
      name: "Ronda",
      country: "Spain",
      images: ["https://www.travelandleisure.com/thmb/icchrtOlu1RLTTYTDkORVQBkBAo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-ronda-bridge-RONDASP1123-eb30e708489c49c581918db3d2b8af47.jpg",
              "https://www.railbookers.co.uk/sites/railbookers/files/styles/hero/public/media/images/ronda.jpg?h=82f92a78&itok=QiXFy7l5",
             "https://vamospanish.com/wp-content/uploads/things-to-do-and-see-in-ronda-andalucia-spain-ronda-guide-1.jpg"
             ],
        description: "협곡을 가로지르는 드라마틱한 뷰, 투우의 본고장",
      stats: {
        weather: 8,
        safety: 9,
        cost: 6,
        rating: 8
      },
      mapEmbedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25577.9789416222!2d-5.178758789855616!3d36.740633074873074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0d3143e258a279%3A0x94358021349a5ba2!2z7Iqk7Y6Y7J24IDI5NDAwIOunkOudvOqwgCDroaDri6Q!5e0!3m2!1sko!2skr!4v1745389436163!5m2!1sko!2skr"
    },
    {
      id: 6,
      name: "Cuenca",
      country: "Spain",
      images: ["https://images.ctfassets.net/zmjc9gr9hbbf/3IB0gztqOVSBnsb3wN5i8I/c5c9b2b9f8feb1e9a21dcf2637ab46ad/MAN35497_The_city_of_Cuenca__a_UNESCO_World_Heritage_Site._Shutterstock.jpg?w=1980",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs95-6s3aXpTdgGuMMPbpQmVWg6Fz3pj9z_g&s",
              "https://www.spain.info/export/sites/segtur/.content/imagenes/cabeceras-grandes/castilla-mancha/cuenca-panoramica-s643574629.jpg"
            ],
        description: "유네스코 세계문화유산 / 예술가 마을 분위기",
      stats: {
        weather: 6,
        safety: 8,
        cost: 5,
        rating: 8
      },
      mapEmbedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48857.644342350686!2d-2.189224487866791!3d40.06196480342225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5d6741369751c3%3A0x6e81ab6ed08cd292!2z7Iqk7Y6Y7J24IOy_oOyXpey5tA!5e0!3m2!1sko!2skr!4v1745389479421!5m2!1sko!2skr"
    },
    {
      id: 7,
      name: "Ciudad Rodrigo",
      country: "Spain",
      images: ["https://upload.wikimedia.org/wikipedia/commons/4/4d/RI-53-0000010.jpg",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSri0Ay3XYpC1_cplxSxnt3RgAgaC8ySn3bPw&s",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt9kfFdRdfptO5fIp4HytiobFbPxaTgvzZow&s"
      ],
        description: "중세 성벽 도시, 작고 고요함",
      stats: {
        weather: 5,
        safety: 7,
        cost: 4,
        rating: 7
      },
      mapEmbedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24234.35011250155!2d-6.553627577966682!3d40.60134182023841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3c2f779d455923%3A0xb89f2f8011f47bcb!2zMzc1MDAgQ2l1ZGFkIFJvZHJpZ28sIOyCtOudvOunney5tCDsiqTtjpjsnbg!5e0!3m2!1sko!2skr!4v1745389510894!5m2!1sko!2skr"
    },
    {
      id: 8,
      name: "Cadaqués",
      country: "Spain",
      images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Cadaques_Pueblo_Marinero.JPG/1200px-Cadaques_Pueblo_Marinero.JPG",
              "https://qtxasset.com/quartz/qcloud1/media/image/2017-07/CadaquesFourth.jpg?VersionId=GElf62Gg6zriPxP6GinPraAJaQd4raG2",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3o4J3ml1c-Yd3ya2DKTgW1oSrL0nm7UXuzQ&s"
      ],
        description: "흰색 건물 + 바다 조합이 지중해 감성 그 자체",
      stats: {
        weather: 7,
        safety: 8,
        cost: 8,
        rating: 9
      },
      mapEmbedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23612.796637119136!2d3.2607413775314495!3d42.28707020675304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ba6f3e36acd499%3A0x6c31794ebb29ec70!2zQ2FkYXF1w6lzLCDsp4DroZzrgpgg7Iqk7Y6Y7J24!5e0!3m2!1sko!2skr!4v1745389541557!5m2!1sko!2skr"
    },
    {
      id: 9,
      name: "Kurashiki",
      country: "Japan",
      images: ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/f1/41/05/photo0jpg.jpg?w=1100&h=600&s=1",
              "https://res.cloudinary.com/jnto/image/upload/w_1080,h_756,c_fill,f_auto,fl_lossy,q_60/v1/media/filer_public/7e/50/7e506085-c22e-4c56-a031-a95e0091332c/kurashiki_bikan_aqlkx5",
              "https://place.matcha-jp.com/resize/1280x2000/2024/02/19-18-01-37-1001917491399653a9fe66550faa7442c7a7.webp?w=656"  
              ],
        description: "백벽 창고가 줄지은 운하 마을",
      stats: {
        weather: 7,
        safety: 9,
        cost: 6,
        rating: 8
      },
      mapEmbedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d210329.88387185603!2d133.5775064889614!3d34.54331403993225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355159b83d13161d%3A0x3b60170516ac23e!2z7J2867O4IOyYpOy5tOyVvOuniO2YhCDqtazrnbzsi5ztgqTsi5w!5e0!3m2!1sko!2skr!4v1745389574417!5m2!1sko!2skr"
    },
    {
      id: 10,
      name: "Karuizawa",
      country: "japan",
      images: ["https://res.klook.com/image/upload/c_fill,w_420,h_260/v1700568421/Karuizawa2_fdrdos.jpg",
            "https://www.japan-experience.com/sites/default/files/styles/scale_470/public/legacy/japan_experience/1453634355122.jpg.webp?itok=DnQq0Mh8",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPHt5TAa5s3LANhvp2XuC6V_xV0oX3LPoY2w&s"
              ],
      description: "도쿄 근교의 고급 별장지",
      stats: {
        weather: 3,
        safety: 9,
        cost: 8,
        rating: 9
      },
      mapEmbedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102828.55548885814!2d138.49994802774606!3d36.351274063193884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601dd23c3fc1a393%3A0x99118f4883da71f9!2z7J2867O4IOuCmOqwgOuFuO2YhCBLaXRhc2FrdSBEaXN0cmljdCwg6rCA66Oo7J207J6Q7JmA66eI7LmY!5e0!3m2!1sko!2skr!4v1745389597240!5m2!1sko!2skr"
    },
    {
      id: 11,
      name: "Takayama",
      country: "Japan",
      images: ["https://a.travel-assets.com/findyours-php/viewfinder/images/res70/109000/109225-Takayama.jpg",
      "https://www.japan-guide.com/thumb/XYZeXYZe5900_1680.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRixb92M_zPTe0VJR-WQ9w899vjoKkREqyoAw&s"
      ],
        description: "히다규(소고기) 요리로 유명, 옛 일본 분위기 그대로",
      stats: {
        weather: 5,
        safety: 9,
        cost: 4,
        rating: 9
      },
      mapEmbedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d824819.0865219595!2d136.54404726775206!3d36.14344146522607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6002a342a14fc349%3A0xd4f2fb84f0b8e3dc!2z7J2867O4IOq4sO2bhO2YhCDri6TsubTslbzrp4jsi5w!5e0!3m2!1sko!2skr!4v1745389624465!5m2!1sko!2skr"
    },
    {
      id: 12,
      name: "Obuse",
      country: "Japan",
      images: ["https://www.japan-guide.com/thumb/XYZeXYZe6020_1680a.jpg",
      "https://japandeluxetours.com/uploads/2018/11/20181101095356_5bdb2fa460bd7.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4F7cP6yhGKzEYdQ_roa8Inwy9-fDW4DIQjw&s"
      ],
        description: "호쿠사이 미술관, 작고 조용한 골목 + 현대 감성",
      stats: {
        weather: 4,
        safety: 9,
        cost: 4,
        rating: 8
      },
      mapEmbedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51180.731705624!2d138.27339237071536!3d36.70344620207615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601d896166e1f5b5%3A0x1bee4e1b26b1ccc0!2z7J2867O4IOuCmOqwgOuFuO2YhCBLYW1pdGFrYWkgRGlzdHJpY3QsIOyYpOu2gOyEuOuniOy5mA!5e0!3m2!1sko!2skr!4v1745389652421!5m2!1sko!2skr"
    }


  ];

   const city = allCities.find(c => c.id === cityId);
  if (!city) return <p style={{ textAlign: 'center', padding: '60px' }}>해당 도시를 찾을 수 없습니다.</p>;

  return (
    <div style={{ padding: '60px 20px', maxWidth: '960px', margin: '0 auto' }}>
      {/* 슬라이드 */}
      {city.images && (
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
          loop={true}
          spaceBetween={10}
          slidesPerView={1}
        >
          {city.images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`slide-${index}`}
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover',
                  borderRadius: '16px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                  marginBottom: '30px'
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* 제목 + 설명 */}
      <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '10px' }}>
        {city.name}, {city.country}
      </h2>
      <p style={{ fontSize: '1.1rem', color: '#444', marginBottom: '40px' }}>
        {city.description}
      </p>

      {/* 통계 */}
      {city.stats && (
        <div style={{ marginBottom: '40px' }}>
          <h3 style={{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '20px' }}>📊 도시 정보</h3>
          {Object.entries(city.stats).map(([label, value]) => (
            <div key={label} style={{ marginBottom: '16px' }}>
              <div style={{ fontSize: '14px', marginBottom: '4px', color: '#666' }}>{label}</div>
              <div style={{
                background: '#eee',
                height: '10px',
                borderRadius: '5px',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: `${value * 10}%`,
                  background: '#111',
                  height: '100%',
                  borderRadius: '5px'
                }} />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 지도 */}
      {city.mapEmbedUrl && (
        <div>
          <h3 style={{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '16px' }}>🗺️ 지도</h3>
          <iframe
            src={city.mapEmbedUrl}
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: '12px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      )}
    </div>
  );
}