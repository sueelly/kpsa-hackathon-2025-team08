import React from 'react';
import styled from 'styled-components';
import Appbar from '../../components/Appbar';
import { useState } from 'react';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ff7b3e;
  color: #fff;
`;

const Header = styled.div`
  display: flex;
  padding: 45px 16px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 100px;
`;

const Title = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 13px;
`;

const Logo = styled.div`
  font-size: 30px;
  font-weight: 600;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Greeting = styled.div`
  font-size: 16px;
`;

const Subtitle = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

const PopupContainer = styled.div`
  position: absolute;
  bottom: 116px;
  left: 0;
  right: 0;

  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 9px;
`;

const MedicationPopupContainer = styled.div`
  width: 321px;
  height: 101px;
  background-color: #fff;
  border-radius: 16px;
  padding: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

const MedicationInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

const MedicationTime = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #444444;
`;

const MedicationInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8.5px;
`;

const IsTakenIcon = styled.div`
  width: 24px;
  height: 24px;
  background-color: #444444;
  border-radius: 50%;
`;

const MedicationName = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

const MedicationMethodWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2.5px;
  font-size: 12px;
  color: #ACACAC;
`;

const Home = () => {
  const [mode, setMode] = useState('home'); // home, view mode
  const [isTaken, setIsTaken] = useState(false);

  const setTaken = () => {
    setIsTaken(true);
  };

  const handleModeChange = () => {
    setMode(mode === 'home' ? 'view' : 'home');
  };

  return (
    <Container>
      <Header>
        <Title>
          <Logo>기억의 정원</Logo>
          <Description>
            <Greeting>영희님 좋은 아침이에요!</Greeting>
            <Subtitle>오늘 드실 약 꼭 챙겨 드세요.</Subtitle>
            <Subtitle>식물도 함께 자라요!</Subtitle>
          </Description>
        </Title>
        <div>👤</div>
      </Header>
      <PopupContainer>
        <MedicationPopupContainer>
          <MedicationInfoWrapper>
            <MedicationTime>9:00</MedicationTime>
            <MedicationInfoContainer>
              <IsTakenIcon isTaken={isTaken} onClick={setTaken}/>
              <MedicationName>아스피린 1정</MedicationName>
            </MedicationInfoContainer>
            <MedicationMethodWrapper>
              <div>💊</div>
            </MedicationMethodWrapper>
          </MedicationInfoWrapper>
        </MedicationPopupContainer>
      </PopupContainer>
      <Appbar activePage="home" />
    </Container>
  );
};

export default Home;