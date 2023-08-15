import React from 'react';
import Header from './components/Header';
import LoginHeader from './components/LoginHeader';
import Block1 from './components/Block1';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <Header />
    <div className="header-2">
      <LoginHeader />
    </div>
      <div className="content">
        <Block1 />
      </div>
    </div>
  );
};

export default App;