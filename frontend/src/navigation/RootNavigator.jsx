import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import Main from '../pages/Main';
import Profile from '../pages/Profile';
import Login from '../pages/Login';
import Home from '../pages/home/Home';

const RootNavigator = () => {
  const { user } = useUser();

  return (
    <BrowserRouter>
      <Routes>
        {user ? (
          // 로그인된 사용자용 라우트
          <>
            <Route path="/" element={<Main />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        ) : (
          // 로그인하지 않은 사용자용 라우트
          <>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default RootNavigator; 