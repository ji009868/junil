import React from 'react';
import CityCard from './CityCard';
import { allCities } from './CityData.jsx';
import './Home.css';

export default function List() {
  return (
    <div className="section">
      <h2 style={{fontFamily: "'Pretendard Variable', sans-serif", fontSize: '2.5rem', fontWeight: '700', marginBottom: '40px', textAlign: 'center' }}>
        소도시 둘러보기
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '40px',
        justifyContent: 'center'
      }}>
        {allCities.map(city => (
          <CityCard key={city.id} city={city} />
        ))}
      </div>
    </div>
  );
}
