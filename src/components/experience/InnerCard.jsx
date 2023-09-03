import React from 'react';
import './innercard.css';

const InnerCard = ({ icon, title, isActive, onClick }) => {
  return (
    <div className={`experience__card ${isActive ? 'active' : ''}`} onClick={onClick}>
      <h4>{icon}</h4>
      <h4>{title}</h4>
    </div>
  );
};

export default InnerCard;