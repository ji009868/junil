import React from 'react';
import './Home.css'; // 전역 스타일 유지

function Feature({ icon, title, desc }) {
  return (
    <div style={{
      textAlign: 'center',
      padding: '20px',
      borderRadius: '12px',
      background: '#fafafa',
      boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
    }}>
      <div style={{ fontSize: '2rem' }}>{icon}</div>
      <h3 style={{ margin: '10px 0 6px' }}>{title}</h3>
      <p style={{ color: '#666', fontSize: '0.95rem' }}>{desc}</p>
    </div>
  );
}

export default function Small_Towns() {
  return (
    <div style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
      {/* Hero Section */}
      <section style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{ fontFamily: "'Pretendard Variable', sans-serif", fontSize: '2.8rem', fontWeight: '700', marginBottom: '12px' }}>
          소도시에서 찾는 나만의 시간
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#555' }}>
          복잡한 일상에서 벗어나, 느리고 깊은 여정을 떠나보세요.
        </p>
      </section>

      {/* 매력 요소 Section */}
      <section style={{fontFamily: "'Pretendard Variable', sans-serif", fontSize: '1.2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', marginBottom: '60px' }}>
        <Feature icon="🌿" title="자연과 여유" desc="복잡한 도심을 벗어나 푸른 숲과 맑은 공기 속에서 재충전의 시간을 보내보세요." />
        <Feature icon="🎨" title="감성과 예술" desc="작은 골목마다 감성이 흐르는, 예술적인 분위기를 느낄 수 있어요." />
        <Feature icon="☕" title="현지의 삶" desc="지역 주민들과 어울리고, 그들의 삶 속에서 진짜 여행을 경험해보세요." />
      </section>

      {/* 미리보기 Section */}
      <section style={{ display: 'grid', gap: '40px', marginBottom: '80px' }}>
        <div className="card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/ColmarFrance.jpg" alt="콜마르" />
          <div style={{ padding: '20px' }}>
            <h4>🏡 프랑스 콜마르</h4>
            <p style={{ color: '#666' }}>동화 속 같은 운하 마을에서 산책을 즐겨보세요.</p>
          </div>
        </div>

        <div className="card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/1_arles_france_2016.jpg" alt="아를" />
          <div style={{ padding: '20px' }}>
            <h4>🎨 아를</h4>
            <p style={{ color: '#666' }}>고흐가 사랑한 예술 도시에서 영감을 받아보세요.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{ textAlign: 'center', background: '#f4f4f4', padding: '40px', borderRadius: '12px' }}>
        <h2 style={{ fontFamily: "'Pretendard Variable', sans-serif",marginBottom: '16px' }}>지금, 작지만 특별한 여정을 시작해보세요</h2>
        <p style={{ fontSize: '1rem', color: '#444' }}>당신만의 속도로, 당신만의 감성으로</p>
      </section>
    </div>
  );
}
