import React from 'react';
import Lottie from 'lottie-react';

// 애니메이션 import
import micAnimation from '../assets/animation/mic.json';

const LottieMicButton = ({ 
  onClick, 
  position = { bottom: '10px', leftOffset: 0 },
  size = { width: 200, height: 200 }
}) => {
  return (
    <div style={{
      position: 'absolute',
      bottom: position.bottom,
      left: '50%',
      transform: `translateX(${position.leftOffset - (size.width / 2)}px)`,
      zIndex: 5
    }}>
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
        <Lottie
          animationData={micAnimation}
          style={{ 
            width: size.width, 
            height: size.height 
          }}
          loop={true}
          autoplay={true}
        />
      </button>
    </div>
  );
};

export default LottieMicButton;