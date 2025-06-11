import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { useLike } from '../context/LikeContext'; // 전역 좋아요 상태 사용

export default function CityCard({ city }) {
  const navigate = useNavigate();
  const { likedCities, toggleCityLike } = useLike(); // ✅ Context 사용
  const isLiked = likedCities.includes(city.id);     // 좋아요 여부 확인

  const handleClick = () => {
    navigate(`/city/${city.id}`);
  };

  const handleLikeClick = (e) => {
    e.stopPropagation(); // 카드 클릭과 분리
    toggleCityLike(city.id); // ✅ 전역 상태 업데이트
  };

  return (
    <div
      onClick={handleClick}
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
        src={city.image}
        alt={city.name}
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover'
        }}
      />

      <button
        onClick={handleLikeClick}
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
          {city.name}, {city.country}
        </h3>
        <p style={{ fontSize: '14px', color: '#666' }}>{city.description}</p>
      </div>
    </div>
  );
}
