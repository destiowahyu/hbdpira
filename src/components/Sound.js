import React, { useState } from 'react';

const Sound = ({ onConfirm }) => {
  const [showPopup, setShowPopup] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const handlePlaySound = () => {
    const audio = new Audio('/audio/sound1.mp3');
    audio.play();
    triggerFadeOut();
  };

  const handleNoSound = () => {
    triggerFadeOut();
  };

  const triggerFadeOut = () => {
    setFadeOut(true);
    setTimeout(() => {
      setShowPopup(false);
      if (onConfirm) onConfirm();
    }, 600);  // Sesuaikan dengan durasi animasi
  };

  return (
    <>
      {showPopup && (
        <div className={`fixed inset-0 bg-pink-200 bg-opacity-90 flex items-center justify-center z-50 ${fadeOut ? 'fade-out' : ''}`}>
          <div className="bg-white rounded-lg p-6 text-center shadow-xl max-w-sm">
            <h2 className="text-pink-600 text-xl font-bold mb-4">Play Sound?</h2>
            <p className="text-gray-700 mb-6">Would you like to play a beautiful song along with the experience?</p>
            <div className="flex justify-around">
              <button
                onClick={handlePlaySound}
                className="bg-pink-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-pink-600 transition-colors duration-300"
              >
                Yes
              </button>
              <button
                onClick={handleNoSound}
                className="bg-gray-300 text-gray-800 py-2 px-6 rounded-lg shadow-md hover:bg-gray-400 transition-colors duration-300"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sound;
