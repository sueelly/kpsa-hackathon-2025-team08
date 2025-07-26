import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// 앱바 컨테이너 - 하단 중앙에 고정
const AppbarContainer = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);  
  z-index: 1000;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
  width: 100%;
`;

// 둥근 앱바 배경
const AppbarWrapper = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  border-radius: 68.5px;
  background-color: #fff;
  height: 49px;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 233px;
  max-width: 233px;
  justify-content: space-between;
`;

// 개별 메뉴 아이템
const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 24px;
  transition: all 0.3s ease;
  user-select: none;
  
  /* 활성화 상태 스타일 */
  ${props => props.isActive && `
    background: rgba(100, 108, 255, 0.15);
    transform: scale(1.05);
  `}
  
  /* 호버 효과 */
  &:hover {
    background: ${props => props.isActive 
      ? 'rgba(100, 108, 255, 0.2)' 
      : 'rgba(100, 108, 255, 0.08)'
    };
    transform: scale(1.05);
  }
  
  /* 클릭 효과 */
  &:active {
    transform: scale(0.95);
  }
`;

// 아이콘 (나중에 SVG로 교체하기 쉽게 별도 컴포넌트)
const MenuIcon = styled.div`
  font-size: 20px;
  transition: all 0.3s ease;
  
  ${props => props.isActive && `
    color: #646cff;
    text-shadow: 0 2px 8px rgba(100, 108, 255, 0.3);
  `}
`;

// 메뉴 라벨
const MenuLabel = styled.span`
  font-size: 10px;
  font-weight: 600;
  color: ${props => props.isActive ? '#646cff' : '#666'};
  transition: color 0.3s ease;
`;

// 정원지기
const GardenerBtn = styled.div`
  width: 73px;
  height: 73px;
  border-radius: 50%;
  background-color: #FFffff;
  overflow: hidden;
`;

// 메뉴 데이터 정의
const MENU_ITEMS = [
  {
    key: 'home',
    label: '홈',
    icon: '🏠',
    activeIcon: '🏠' // 나중에 다른 아이콘으로 변경 가능
  },
  {
    key: 'garden',
    label: '정원',
    icon: '🌱',
    activeIcon: '🌿'
  },
  {
    key: 'record',
    label: '기록',
    icon: '📝',
    activeIcon: '📋'
  }
];

/**
 * 재사용 가능한 하단 앱바 컴포넌트
 * @param {string} activePage - 현재 활성화된 페이지 ('home', 'garden', 'record')
 * @param {function} onMenuClick - 메뉴 클릭 시 호출되는 함수 (menuKey) => void
 */
const Appbar = ({ activePage = 'home' }) => {
  const navigate = useNavigate();
  const handleMenuClick = (menuKey) => {
    switch (menuKey) {
      case 'home':
        navigate('/home');
        break;
      case 'garden':
        navigate('/garden');
        break;
      case 'record':
        navigate('/record');
        break;
      default:
        break;
    }
  };

  return (
    <AppbarContainer>
      <AppbarWrapper>
        {MENU_ITEMS.map((item) => {
          const isActive = activePage === item.key;
          
          return (
            <MenuItem
              key={item.key}
              isActive={isActive}
              onClick={() => handleMenuClick(item.key)}
            >
              <MenuIcon isActive={isActive}>
                {isActive ? item.activeIcon : item.icon}
              </MenuIcon>
              <MenuLabel isActive={isActive}>
                {item.label}
              </MenuLabel>
            </MenuItem>
          );
        })}
      </AppbarWrapper>
      <GardenerBtn />
    </AppbarContainer>
  );
};

export default Appbar;