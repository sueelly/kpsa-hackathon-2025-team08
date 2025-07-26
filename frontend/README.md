너가 하고자 하는 흐름을 보면 다음과 같아:

> **1. 전체 흐름 정의 → 2. 페이지/라우터 설계 → 3. 상태관리 (UserContext) 구현 → 4. 기능별로 커서에서 작업 위임**

이걸 Cursor에서 효율적으로 개발 분담하려면 **리드미 + 태스크 정의 + 폴더 구조 + 코드 컨벤션 + 개발 흐름 가이드**까지 정리해서 주는 게 핵심이야. 순차적으로 정리해줄게.

---

## ✅ 1. 최상위 README에 작성할 기본 구조

```md
# 프로젝트 개요

React Native 기반 앱 (Expo), 사용자 인증 및 상태 관리 포함

## 📂 구조
```

```
src/
├── App.tsx
├── navigation/       # 모든 stack, tab, screen 관련 정의
├── pages/            # 각 페이지 컴포넌트
├── contexts/         # UserContext 등 글로벌 상태
├── components/       # 재사용 UI 컴포넌트
└── utils/            # 유틸, 상수, api 등
```


## ✅ 2. 작업 순서 가이드 (Cursor 작업 흐름)

### ① `navigation/` 세팅 (라우터 구조부터 먼저)


```tsx
// navigation/RootNavigator.tsx
const RootNavigator = () => {
  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
```

**Cursor에서 맡길 Task**:

* Stack/Tabs 구조 정의
* `App.tsx`에서 RootNavigator 연결

---

### ② `pages/` 디렉토리 생성 및 기본 화면 구성

들어가야하는 것은 다음과 같아.
Home: 
[ ] appbar를 갖고 있어. 하단 중앙에 고정된 위치로 띄워져 있는 형태야
[ ] 

* `pages/Login.tsx`
* `pages/Home.tsx`
* `pages/Profile.tsx`

**Cursor에서 맡길 Task**:

* 각 페이지에 dummy UI 추가
* 라우터와 연결

---

### ③ `contexts/UserContext.tsx` 생성

* 사용자 정보 (isLoggedIn, username 등)
* 로그인/로그아웃 처리

**Cursor에게 맡길 Task**:

* `UserContext` 생성
* Provider를 `App.tsx`에 wrap
* 간단한 로그인/로그아웃 함수 구현

---

### ④ 공통 스타일/컴포넌트 분리

* `components/Button.tsx`, `Input.tsx` 등
* `theme.js` 또는 `styled-components` 사용 x

---

## 🧩 TASK: Navigation 구조 세팅
- [ ] stack vs tab 구조 정리
- [ ] 로그인하지 않으면 앱 사용 불가
- [ ] Router ↔ Page 연결

## 🧩 TASK: UserContext 구현
- [ ] 우선 당장에는 로그인 없이 mock data로 user data 갖고 있음
- [ ] user: null | User
- [ ] login / logout 함수
- [ ] useContext + useUser 훅 생성

## 🧩 TASK: 초기 페이지 생성
- [ ] Home.tsx: "Welcome" 메시지
- [ ] Profile.tsx: 유저 정보 표시

