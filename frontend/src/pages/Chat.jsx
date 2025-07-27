import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';

// 이미지 및 애니메이션 import
import characterhi from '../assets/images/character/character_hi.png';
import characterfront from '../assets/images/character/character_front.png';
import characterdisapp from '../assets/images/character/character_disappointed.png';
import charactercurious from '../assets/images/character/character_curious.png';

import listeningMicImage from '../assets/images/button/listening_chatroom.svg';
import micAnimation from '../assets/animation/mic.json';

const Chat = () => {
  const navigate = useNavigate();
  const [isListening, setIsListening] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const handleMicClick = () => {
    console.log('마이크 버튼 클릭됨!');
    
    // 상태 토글 (듣기 ↔ 일반)
    setIsListening(!isListening);
    
    // 듣기 상태에서 일반 상태로 변할 때 단계 증가
    if (isListening) {
      setCurrentStep(prevStep => prevStep + 1);
    }
  };

  // 단계별 캐릭터 이미지 결정
  const getCharacterImage = () => {
    if (isListening) {
      // 듣기 상태 - 집중해서 듣고 있는 모습
      switch(currentStep) {
        case 1: 
          return characterfront;
        case 2: 
          return characterdisapp;
        case 3: 
          return characterfront;
        default: 
          return characterhi;
      }
    } else {
      // 일반 상태 - 단계별로 다른 감정 표현
      switch(currentStep) {
        case 1: 
          return charactercurious;
        case 2: 
          return characterdisapp;
        case 3: 
          return characterdisapp;
        case 4: 
          return characterhi;
        default: 
          return characterhi;
      }
    }
  };

  // 단계별 메시지 정의
  const getMessageText = () => {
    if (isListening) {
      // 듣기 상태 메시지
      switch(currentStep) {
        case 1: 
          return (
            <>
              나에게는 사랑스러운 딸이 있어. 방도 따로 있는데 내 옆이 좋다며 눈 뜨고 일어나면<br />
              딸애가 옆에 누워있곤 했지<br />
              어느순간부터 안보이더라고....
            </>
          );
        case 2: 
          return (
            <>
              집도 이상하게 낯설고... 낯선 사람들도 자꾸 집에 있고...<br />
              근데 그 낯선 얼굴에서 내 딸이 보이는거야<br />
              내 딸이었어...
            </>
          );
        case 3: 
          return (
            <>
              슬펐어<br />
              내 딸을 다시 잊고 싶지 않아.<br />
              그래서 다시 왔어...
            </>
          );
        default: 
          return <>음성을 듣고 있습니다...</>;
      }
    } else {
      // 일반 상태 메시지
      switch(currentStep) {
        case 1: 
          return (
            <>
              기다리고 있었어요~<br />
              무슨 일 있었던 건가요?
            </>
          );
        case 2: 
          return <>무슨 일이 있었던 건가요?</>;
        case 3: 
          return <>많이 놀라고 힘드셨겠어요.</>;
        case 4: 
          return (
            <>
              잘하셨어요. 소중한 사람들과 함께한 그 기억을<br />
              저와 함께 지켜보아요.
            </>
          );
        default: 
          return <>대화가 완료되었습니다.</>;
      }
    }
  };

  // 텍스트 길이에 따른 폰트 크기 계산
  const getFontSize = () => {
    const textLength = getMessageText().props?.children?.toString().length || 0;
    
    if (isListening) {
      // 듣기 상태 (긴 텍스트)
      switch(currentStep) {
        case 1: return 16; // 가장 긴 텍스트
        case 2: return 16; // 긴 텍스트
        case 3: return 18; // 짧은 텍스트
        default: return 20;
      }
    } else {
      // 일반 상태
      switch(currentStep) {
        case 1: return 22; // 보통 길이
        case 2: return 24; // 짧은 텍스트
        case 3: return 24; // 짧은 텍스트
        case 4: return 18; // 긴 텍스트
        default: return 20;
      }
    }
  };

  const handlePreviousChats = () => {
    console.log('이전 대화 클릭');
    alert('이전 대화 기능은 준비 중입니다.');
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#fff', 
      display: 'flex', 
      flexDirection: 'column',
      position: 'relative'
    }}>
      {/* 상단 네비게이션 바 */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 56,
        borderBottom: '1px solid #eee',
        padding: '0 20px',
        position: 'sticky',
        top: 0,
        background: '#fff',
        zIndex: 10
      }}>
        {/* 뒤로가기 버튼 */}
        <button
          style={{ 
            background: 'none', 
            border: 'none', 
            fontSize: 24, 
            cursor: 'pointer',
            color: '#333',
            padding: '8px',
            borderRadius: '4px'
          }}
          onClick={() => navigate(-1)}
          aria-label="뒤로가기"
        >
          ‹
        </button>
        
        {/* 이전 대화 버튼 */}
        <button 
          style={{
            background: '#fff',
            border: '1px solid #ddd',
            borderRadius: 20,
            color: '#aaa',
            padding: '4px 16px',
            fontSize: 14,
            cursor: 'pointer',
          }}
          onClick={handlePreviousChats}
        >
          이전 대화
        </button>
        
        {/* 제목 - 중앙 고정 */}
        <span style={{ 
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          fontWeight: 700, 
          fontSize: 20,
          color: '#333',
          pointerEvents: 'none'
        }}>
          정원지기
        </span>
      </div>

      {/* 메인 화면 레이아웃 */}
      <div style={{ 
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: '0 24px'
      }}>
        {/* 말풍선 - 항상 표시, 텍스트만 변경 */}
        <div style={{
          marginTop: 40,
          marginBottom: 20,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          gap: 12
        }}>
          <span
            style={{
              display: 'inline-block',
              border: '2.5px solid #F7B37A',
              borderRadius: 145,
              padding: '35px 24px',
              fontSize: getFontSize(),
              fontWeight: 600,
              color: '#222',
              background: 'transparent',
              lineHeight: 1.4,
              marginBottom: 8,
              textAlign: 'center',
              width: 'auto',
              maxWidth: '90vw'
            }}
          >
            {getMessageText()}
          </span>
        </div>

        {/* 캐릭터 영역 - 항상 고정된 위치와 크기 */}
        <div style={{
          flex: 1,
          display: 'flex',
          alignItems: 'flex-start', // 항상 flex-start로 고정
          justifyContent: 'center',
          minHeight: '300px',
          position: 'relative',
          marginTop: -30 // 항상 동일한 marginTop
        }}>
          {/* 캐릭터 이미지 - 단계별로 다른 이미지 사용 */}
          <img
            src={getCharacterImage()}
            alt={`정원지기 캐릭터 - ${isListening ? '듣기' : '대화'} 상태`}
            style={{ 
              width: 600, 
              height: 600,
              objectFit: 'contain',
              transition: 'opacity 0.3s ease-in-out' // 이미지 전환 시 부드러운 효과
            }}
          />

          {/* 일반 상태 마이크 버튼 - Lottie 애니메이션 */}
          {!isListening && (
            <div style={{
              position: 'absolute',
              bottom: '35px',
              left: '34%',
              transform: 'translateX(-50%)',
              zIndex: 5
            }}>
              <button
                onClick={handleMicClick}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  outline: 'none',
                  transition: 'transform 0.2s ease',
                  width: 100,
                  height: 100
                }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              >
                <Lottie
                  animationData={micAnimation}
                  style={{ 
                    width: 210, 
                    height: 210
                  }}
                  loop={true}
                  autoplay={true}
                />
              </button>
            </div>
          )}

          {/* 듣기 상태 마이크 버튼 - SVG 이미지 */}
          {isListening && (
            <div style={{
              position: 'absolute',
              bottom: '91px', // 듣기 상태에서는 다른 위치
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 5
            }}>
              <button
                onClick={handleMicClick}
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
                  src={listeningMicImage}
                  alt="listening mic"
                  style={{ 
                    width: 85, 
                    height: 85,
                    display: 'block'
                  }}
                />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 하단 여백 */}
      <div style={{ height: '60px' }} />
    </div>
  );
};

export default Chat;