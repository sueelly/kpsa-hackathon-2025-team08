import React from 'react';
import { useUser } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const goToProfile = () => {
    navigate('/profile');
  };

  return (
    <div style={{ textAlign: 'center', width: '100%', height: '100%' }}>
      {/* 상단 AppBar */}
      <div style={{ 
        position: 'fixed', 
        bottom: '20px', 
        left: '50%', 
        transform: 'translateX(-50%)',
        backgroundColor: '#646cff',
        padding: '1rem 2rem',
        borderRadius: '50px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        display: 'flex',
        gap: '1rem',
        zIndex: 1000
      }}>
        <button 
          onClick={() => navigate('/')}
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            fontSize: '1rem'
          }}
        >
          🏠 홈
        </button>
        <button 
          onClick={goToProfile}
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            fontSize: '1rem'
          }}
        >
          👤 프로필
        </button>
        <button 
          onClick={handleLogout}
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            fontSize: '1rem'
          }}
        >
          🚪 로그아웃
        </button>
      </div>

      {/* 메인 컨텐츠 */}
      <h1 style={{ marginBottom: '2rem' }}>
        🎉 Welcome to KPSA 해커톤 2025!
      </h1>
      
      <div style={{ 
        backgroundColor: '#f9f9f9', 
        padding: '2rem', 
        borderRadius: '12px',
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        <h2>안녕하세요, {user?.name || user?.username}님! 👋</h2>
        <p style={{ color: '#666', fontSize: '1.1rem', lineHeight: '1.6' }}>
          KPSA 해커톤 2025 Team 08 프로젝트에 오신 것을 환영합니다!<br/>
          React와 Vite로 구성된 이 프로젝트에서 멋진 아이디어를 구현해보세요.
        </p>
        
        <div style={{ marginTop: '2rem' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            marginTop: '1.5rem'
          }}>
            <div style={{ 
              backgroundColor: 'white', 
              padding: '1.5rem', 
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              <h3>🚀 프로젝트 시작</h3>
              <p>아이디어를 현실로 만들어보세요!</p>
            </div>
            
            <div style={{ 
              backgroundColor: 'white', 
              padding: '1.5rem', 
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              <h3>🤝 팀 협업</h3>
              <p>함께 만들어가는 즐거움을 느껴보세요!</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* 하단 여백 (고정된 AppBar 때문에) */}
      <div style={{ height: '100px' }}></div>
    </div>
  );
};

export default Main; 