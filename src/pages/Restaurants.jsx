import React from 'react';
import { allRestaurants } from './CityData.jsx';
import './Home.css';
import { useLike } from '../context/LikeContext';

export default function Restaurants() {
  const { likedRestaurants, toggleRestaurantLike } = useLike();

  return (
    <div style={{ padding: '40px' }}>
      <h2 style={{fontFamily: "'Pretendard Variable', sans-serif", fontSize: '2.5rem', fontWeight: '700', marginBottom: '40px', textAlign: 'center'  }}>
        추천 음식점
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '32px',
        justifyItems: 'center',
        maxWidth: '1020px',
        margin: '0 auto'
      }}>
        {allRestaurants.map(restaurant => {
          const isLiked = likedRestaurants.includes(restaurant.id);

          return (
            <div
              key={restaurant.id}
              className="card"
              style={{
                width: '300px',
                cursor: 'pointer',
                position: 'relative',
                transition: 'transform 0.2s ease-in-out'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <img
                src={restaurant.image}
                alt={restaurant.name}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover'
                }}
              />

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleRestaurantLike(restaurant.id);
                }}
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  background: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  padding: '6px 10px',
                  fontSize: '18px',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.2)',
                  cursor: 'pointer'
                }}
              >
                {isLiked ? '❤️' : '🤍'}
              </button>

              <div style={{ padding: '16px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '6px', color: '#111' }}>
                  {restaurant.name}
                </h3>
                <p style={{ fontSize: '14px', color: '#666' }}>{restaurant.city}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
