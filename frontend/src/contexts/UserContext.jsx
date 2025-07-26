import React, { createContext, useContext, useState } from 'react';

// User 타입 정의 (mock data)
const mockUser = {
  id: 1,
  familyId: 1,
  email: "team08@kpsa.com",
  name: "김정원"
};

// Context 생성
const UserContext = createContext();

// Provider 컴포넌트
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(mockUser); // 로그인했다고 가정
  
  // 로그인 함수 (mock)
  const login = (credentials) => {
    // 실제로는 API 호출을 하겠지만, 지금은 mock data 사용
    console.log('로그인 시도:', credentials);
    setUser(mockUser);
  };
  
  // 로그아웃 함수
  const logout = () => {
    setUser(null);
  };
  
  // 자동 로그인 (개발용 - 나중에 제거)
  const autoLogin = () => {
    setUser(mockUser);
  };
  
  const value = {
    user,
    login,
    logout,
    autoLogin,
    isLoggedIn: !!user
  };
  
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

// useUser 훅
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser는 UserProvider 내에서 사용되어야 합니다');
  }
  return context;
}; 