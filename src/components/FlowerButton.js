import React from 'react';
import '../css/FlowerButton.css';

const FlowerButton = () => {
  const handleClick = () => {
    window.location.href = 'https://bunga.destio.my.id';
  };

  return (
    <div className="virtual-flower-invite">
      <h1 className="text-4xl font-bold text-center text-pink-600 mb-5">
        Aku punya bunga virtual nih buat kamu, mau liat ngga?</h1>
      <button className="button" onClick={handleClick}>
        MAU!
      </button>
    </div>
  );
};

export default FlowerButton;
