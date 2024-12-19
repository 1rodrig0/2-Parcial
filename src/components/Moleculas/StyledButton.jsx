import React from 'react';
import './StyledButton.css';

const StyledButton = ({ label, onClick }) => (
  <button className="styled-button" onClick={onClick}>
    {label}
  </button>
);

export default StyledButton;
