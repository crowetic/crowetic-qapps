// src/components/Block1.js
import React from 'react';
import './Block1.css'; // Create this file for styling

const Block1 = () => {
  return (
    <div className="block1">
      <div className="left-column">
        <img src="../assets/avatar-big.jpg" alt="Left Column Image" />
      </div>
      <div className="right-column">
        <p>
          Welcome to the crowetic Q-App. This is my 'battleground' where I will be testing features and 
          coming up with new fun things to break!
        </p>
      </div>
    </div>
  );
};

export default Block1;