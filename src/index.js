import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 1️⃣ LikeProvider 추가
import { LikeProvider } from './context/LikeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 2️⃣ LikeProvider로 App을 감싼다 */}
    <LikeProvider>
      <App />
    </LikeProvider>
  </React.StrictMode>
);

reportWebVitals();
