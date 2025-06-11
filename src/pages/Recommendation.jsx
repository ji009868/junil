import React, { useState } from 'react';
import { allCities } from './CityData.jsx';
import './Home.css';

export default function Recommendation() {
  const [answers, setAnswers] = useState({
    vibe: '',
    group: '',
    budget: '',
    duration: '',
  });

  const handleChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  const matched = allCities.filter(city =>
    (!answers.vibe || city.vibe === answers.vibe) &&
    (!answers.group || city.group === answers.group) &&
    (!answers.budget || city.budget === answers.budget) &&
    (!answers.duration || city.duration === answers.duration)
  );

  return (
    <div style={{
      maxWidth: '900px',
      margin: '40px auto',
      padding: '30px',
      fontFamily: 'sans-serif'
    }}>
      <h2 style={{fontFamily: "'Pretendard Variable', sans-serif", fontSize: '28px', marginBottom: '24px' }}>나에게 맞는 소도시 추천</h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '20px',
        background: '#f9f9f9',
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
      }}>
        <label style={{ display: 'flex', flexDirection: 'column', fontWeight: 'bold' }}>
          여행 스타일
          <select name="vibe" onChange={handleChange} value={answers.vibe}
            style={selectStyle}>
            <option value="">선택</option>
            <option value="감성">감성</option>
            <option value="자연">자연</option>
            <option value="예술">예술</option>
            <option value="역사">역사</option>
            <option value="전통">전통</option>
            <option value="휴양">휴양</option>
          </select>
        </label>

        <label style={{ display: 'flex', flexDirection: 'column', fontWeight: 'bold' }}>
          동반자
          <select name="group" onChange={handleChange} value={answers.group}
            style={selectStyle}>
            <option value="">선택</option>
            <option value="혼자">혼자</option>
            <option value="연인">연인</option>
            <option value="가족">가족</option>
          </select>
        </label>

        <label style={{ display: 'flex', flexDirection: 'column', fontWeight: 'bold' }}>
          예산
          <select name="budget" onChange={handleChange} value={answers.budget}
            style={selectStyle}>
            <option value="">선택</option>
            <option value="저렴">저렴</option>
            <option value="중">중</option>
            <option value="고급">고급</option>
          </select>
        </label>

        <label style={{ display: 'flex', flexDirection: 'column', fontWeight: 'bold' }}>
          여행 기간
          <select name="duration" onChange={handleChange} value={answers.duration}
            style={selectStyle}>
            <option value="">선택</option>
            <option value="짧게">짧게 (1~3일)</option>
            <option value="길게">길게 (4일 이상)</option>
          </select>
        </label>
      </div>

      <div style={{ marginTop: '40px' }}>
        <h3 style={{fontFamily: "'Pretendard Variable', sans-serif", fontSize: '22px', marginBottom: '16px' }}>추천 결과</h3>
        {matched.length === 0 ? (
          <p style={{ color: '#888' }}>조건에 맞는 도시가 아직 없습니다.</p>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '20px'
          }}>
            {matched.map(city => (
              <div key={city.id} style={{
                background: '#fff',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                transition: 'transform 0.2s',
              }}>
                <h4 style={{ marginBottom: '10px' }}>{city.name}</h4>
                <p style={{ fontSize: '14px', color: '#666' }}>{city.country}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const selectStyle = {
  padding: '10px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  marginTop: '6px',
  fontSize: '15px'
};
