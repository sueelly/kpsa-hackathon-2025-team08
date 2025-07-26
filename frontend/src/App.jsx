import React from 'react';
import { UserProvider } from './contexts/UserContext';
import RootNavigator from './navigation/RootNavigator';
import './App.css';

function App() {
  return (
    <UserProvider>
      <div className="App">
        <RootNavigator />
      </div>
    </UserProvider>
  );
}

export default App; 