import React from 'react';
import { useUser } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      {/* 하단 고정 AppBar */}
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
          onClick={() => navigate('/profile')}
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            fontSize: '1rem',
            opacity: 0.7
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
        👤 프로필
      </h1>
      
      <div style={{ 
        backgroundColor: '#f9f9f9', 
        padding: '2rem', 
        borderRadius: '12px',
        maxWidth: '400px',
        margin: '0 auto'
      }}>
        {/* 프로필 이미지 */}
        <div style={{
          width: '120px',
          height: '120px',
          backgroundColor: '#646cff',
          borderRadius: '50%',
          margin: '0 auto 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '3rem',
          color: 'white'
        }}>
          👤
        </div>
        
        {/* 사용자 정보 */}
        <div style={{ textAlign: 'left' }}>
          <div style={{ 
            backgroundColor: 'white', 
            padding: '1rem', 
            borderRadius: '8px',
            marginBottom: '1rem',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ margin: '0 0 0.5rem 0', color: '#333' }}>이름</h3>
            <p style={{ margin: 0, fontSize: '1.1rem' }}>{user?.name}</p>
          </div>
          
          <div style={{ 
            backgroundColor: 'white', 
            padding: '1rem', 
            borderRadius: '8px',
            marginBottom: '1rem',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ margin: '0 0 0.5rem 0', color: '#333' }}>사용자명</h3>
            <p style={{ margin: 0, fontSize: '1.1rem' }}>{user?.username}</p>
          </div>
          
          <div style={{ 
            backgroundColor: 'white', 
            padding: '1rem', 
            borderRadius: '8px',
            marginBottom: '1rem',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ margin: '0 0 0.5rem 0', color: '#333' }}>이메일</h3>
            <p style={{ margin: 0, fontSize: '1.1rem' }}>{user?.email}</p>
          </div>
          
          <div style={{ 
            backgroundColor: 'white', 
            padding: '1rem', 
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ margin: '0 0 0.5rem 0', color: '#333' }}>사용자 ID</h3>
            <p style={{ margin: 0, fontSize: '1.1rem' }}>{user?.id}</p>
          </div>
        </div>
        
        {/* 편집 버튼 */}
        <button
          style={{
            marginTop: '2rem',
            backgroundColor: '#646cff',
            color: 'white',
            border: 'none',
            padding: '0.8rem 2rem',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1rem',
            width: '100%'
          }}
          onClick={() => alert('프로필 편집 기능은 추후 구현 예정입니다!')}
        >
          ✏️ 프로필 편집
        </button>
      </div>
      
      {/* 하단 여백 (고정된 AppBar 때문에) */}
      <div style={{ height: '100px' }}></div>
    </div>
  );
};

export default Profile; 