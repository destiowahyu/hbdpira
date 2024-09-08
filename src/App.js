import React, { useState, useEffect } from 'react';
import Atasan from './components/Atasan';
import KataSatu from './components/KataSatu';
import Album from './components/Album';
import Quiz from './components/Quiz';
import Sound from './components/Sound';
import FlowerButton from './components/FlowerButton';
import Gallery from './components/Gallery';

function App() {
  const [showPopup, setShowPopup] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleConfirm = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setShowPopup(false);
      setShowContent(true);
      setIsTransitioning(false);
    }, 1200); // Match animation timing
  };

  return (
    <div className="bg-white min-h-screen">
      {showPopup && (
        <div className={`popup-wrapper ${isTransitioning ? 'morph-out' : ''}`}>
          <Sound onConfirm={handleConfirm} />
        </div>
      )}

      <div className={`main-content-wrapper ${showContent ? 'morph-in' : ''}`}>
        <Atasan />
        <KataSatu />
        <Album />
        <Quiz />
        <Gallery />
        <FlowerButton />
      </div>
    </div>
  );
}

export default App;
