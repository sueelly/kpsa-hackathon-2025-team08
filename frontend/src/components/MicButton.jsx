import React from 'react';

// 마이크 이미지 import
import micIcon from '../assets/images/button/mic_orange.svg';

const MicButton = ({ onClick, isListening = false }) => {
  return (
    <button
      onClick={onClick}
      style={{
        background: 'none',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
        outline: 'none',
        transition: 'transform 0.2s ease'
      }}
      onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
      onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
    >
      <img
        src={micIcon}
        alt="mic"
        style={{ 
          width: 80, 
          height: 80,
          display: 'block'
        }}
        onError={(e) => {
          // 이미지 로드 실패 시 이모지로 대체
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'flex';
        }}
      />
      
      {/* 이미지 로드 실패 시 대체 표시 */}
      <div style={{
        display: 'none',
        width: 120,
        height: 120,
        background: 'linear-gradient(180deg, #F7B37A 0%, #E98B5A 100%)',
        borderRadius: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '48px',
        color: 'white',
        boxShadow: '0 4px 16px rgba(233, 139, 90, 0.2)'
      }}>
        🎤
      </div>
    </button>
  );
};

export default MicButton;