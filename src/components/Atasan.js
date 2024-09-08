//Atasan.js
import React from 'react';

const Atasan = () => {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div 
      className="relative h-screen bg-cover bg-center flex items-center" 
      style={{
        backgroundImage: "url('/img/bg/bg3.jpg')",
      }}
    >
      {/* Overlay dengan warna hex */}
      <div 
        className="absolute inset-0" 
        style={{
          backgroundColor: '#D16BA5',
          opacity: 0.7,
        }}
      ></div>

      {/* Konten */}
      <div className="relative z-10 w-full text-right pr-12">
        <p 
          className="text-3xl md:text-7xl text-white" 
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Hi,
        </p>
        <h1 
          className="text-6xl md:text-9xl font-bold text-white" 
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Elfira Aulia Septrian
        </h1>
        <p 
          className="text-3xl md:text-5xl mt-10 text-white font-bold animate-bounce" 
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Happy 21st Birthday!
        </p>

        <button 
          onClick={scrollToNextSection}
          className="mt-10 px-6 py-3 bg-white text-pink-500 rounded-full shadow-md transition hover:bg-pink-100"
        >
          Scroll Down
        </button>
      </div>
    </div>
  );
}

export default Atasan;
