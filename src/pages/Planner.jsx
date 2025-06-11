import React, { useState, useEffect } from 'react';
import { useLike } from '../context/LikeContext';
import { allCities, allRestaurants } from './CityData.jsx';
import './Home.css';

export default function Planner() {
  // localStorage에서 불러오기
  const [plans, setPlans] = useState(() => {
    const saved = localStorage.getItem('plans');
    return saved ? JSON.parse(saved) : [];
  });

  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const { likedCities, likedRestaurants } = useLike();
  const likedCityData = allCities.filter(city => likedCities.includes(city.id));
  const likedRestaurantData = allRestaurants.filter(r => likedRestaurants.includes(r.id));

  // plans 변경될 때 localStorage에 저장
  useEffect(() => {
    localStorage.setItem('plans', JSON.stringify(plans));
  }, [plans]);

  const handleAdd = () => {
    if (title.trim() && date && time) {
      const newPlan = `${date} ${time} - ${title}`;
      setPlans([...plans, newPlan]);
      setTitle('');
      setDate('');
      setTime('');
    }
  };

  return (
    <div style={{ maxWidth: '700px', margin: '40px auto', padding: '20px' }}>
      <h2 style={{fontSize: '28px', marginBottom: '20px' }}>
        여행 일정 플래너
      </h2>

      {/* 일정 추가 폼 */}
      <div style={{
        background: '#f9f9f9',
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
        marginBottom: '30px'
      }}>
        <label style={{ fontSize: '16px', fontWeight: 'bold', display: 'block', marginBottom: '10px' }}>
          새로운 일정 추가
        </label>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <input
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            style={{
              padding: '10px',
              fontSize: '16px',
              borderRadius: '8px',
              border: '1px solid #ccc'
            }}
          />
          <input
            type="time"
            value={time}
            onChange={e => setTime(e.target.value)}
            style={{
              padding: '10px',
              fontSize: '16px',
              borderRadius: '8px',
              border: '1px solid #ccc'
            }}
          />
          <input
            type="text"
            value={title}
            placeholder="예: Colmar 산책"
            onChange={e => setTitle(e.target.value)}
            style={{
              padding: '10px',
              fontSize: '16px',
              borderRadius: '8px',
              border: '1px solid #ccc'
            }}
          />
          <button
            onClick={handleAdd}
            style={{
              padding: '10px 18px',
              fontSize: '16px',
              backgroundColor: '#008080',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              marginTop: '5px'
            }}
          >
            일정 추가
          </button>
        </div>
      </div>

      {/* 일정 목록 */}
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ fontSize: '22px', marginBottom: '15px' }}>
          나의 일정
        </h3>
        {plans.length === 0 ? (
          <p style={{ color: '#666' }}>아직 추가된 일정이 없습니다.</p>
        ) : (
          <ul>
            {plans.map((plan, index) => (
              <li key={index} style={{ marginBottom: '12px' }}>{plan}</li>
            ))}
          </ul>
        )}
      </div>

      {/* 좋아요한 도시 */}
      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>
          좋아요한 도시
        </h3>
        <ul>
          {likedCityData.length === 0 ? (
            <li style={{ color: '#777' }}>아직 좋아요한 도시가 없습니다.</li>
          ) : (
            likedCityData.map(city => (
              <li key={city.id}>{city.name} ({city.country})</li>
            ))
          )}
        </ul>
      </div>

      {/* 좋아요한 음식점 */}
      <div>
        <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>
          좋아요한 음식점
        </h3>
        <ul>
          {likedRestaurantData.length === 0 ? (
            <li style={{ color: '#777' }}>아직 좋아요한 음식점이 없습니다.</li>
          ) : (
            likedRestaurantData.map(r => (
              <li key={r.id}>{r.name} – {r.city}</li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
