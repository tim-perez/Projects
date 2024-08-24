import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className="question-button">
      {text}
    </button>
  );
};

export default Button;