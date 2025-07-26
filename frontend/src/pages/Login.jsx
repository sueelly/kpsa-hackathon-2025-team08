import React, { useState } from 'react';
import { useUser } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const { login, autoLogin } = useUser();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // 실제로는 credentials를 검증하겠지만, 지금은 mock login
    login(credentials);
    navigate('/');
  };

  const handleDemoLogin = () => {
    autoLogin();
    navigate('/');
  };

  return (
    <div style={{ 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f5f5f5',
      padding: '2rem'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '3rem',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        width: '100%',
        maxWidth: '400px'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{ color: '#333', marginBottom: '0.5rem' }}>
            🎯 KPSA 해커톤 2025
          </h1>
          <p style={{ color: '#666', fontSize: '1.1rem' }}>
            Team 08 프로젝트에 로그인하세요
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ marginBottom: '1.5rem' }}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '0.5rem', 
              color: '#333',
              fontWeight: '500'
            }}>
              사용자명
            </label>
            <input
              type="text"
              value={credentials.username}
              onChange={(e) => setCredentials({
                ...credentials,
                username: e.target.value
              })}
              style={{
                width: '100%',
                padding: '0.8rem',
                border: '2px solid #e1e1e1',
                borderRadius: '8px',
                fontSize: '1rem',
                boxSizing: 'border-box'
              }}
              placeholder="사용자명을 입력하세요"
              required
            />
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '0.5rem', 
              color: '#333',
              fontWeight: '500'
            }}>
              비밀번호
            </label>
            <input
              type="password"
              value={credentials.password}
              onChange={(e) => setCredentials({
                ...credentials,
                password: e.target.value
              })}
              style={{
                width: '100%',
                padding: '0.8rem',
                border: '2px solid #e1e1e1',
                borderRadius: '8px',
                fontSize: '1rem',
                boxSizing: 'border-box'
              }}
              placeholder="비밀번호를 입력하세요"
              required
            />
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              backgroundColor: '#646cff',
              color: 'white',
              border: 'none',
              padding: '1rem',
              borderRadius: '8px',
              fontSize: '1.1rem',
              fontWeight: '500',
              cursor: 'pointer',
              marginBottom: '1rem'
            }}
          >
            🔐 로그인
          </button>
        </form>

        {/* 구분선 */}
        <div style={{
          textAlign: 'center',
          margin: '1.5rem 0',
          position: 'relative'
        }}>
          <hr style={{ border: 'none', borderTop: '1px solid #e1e1e1' }} />
          <span style={{
            position: 'absolute',
            top: '-10px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'white',
            padding: '0 1rem',
            color: '#666',
            fontSize: '0.9rem'
          }}>
            또는
          </span>
        </div>

        {/* 데모 로그인 버튼 */}
        <button
          onClick={handleDemoLogin}
          style={{
            width: '100%',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            padding: '1rem',
            borderRadius: '8px',
            fontSize: '1.1rem',
            fontWeight: '500',
            cursor: 'pointer'
          }}
        >
          ⚡ 데모 로그인 (빠른 시작)
        </button>

        <p style={{ 
          textAlign: 'center', 
          marginTop: '1.5rem', 
          color: '#666', 
          fontSize: '0.9rem' 
        }}>
          🚀 해커톤 기간 중이므로 데모 로그인을 사용하여<br/>
          빠르게 프로젝트를 시작할 수 있습니다!
        </p>
      </div>
    </div>
  );
};

export default Login; 