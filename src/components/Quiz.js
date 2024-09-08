import React, { useState, useEffect } from 'react';
import '../css/Quiz.css';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showGiftOptions, setShowGiftOptions] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [successPopupVisible, setSuccessPopupVisible] = useState(false);
  const [wrongAnswerPopup, setWrongAnswerPopup] = useState(false);
  const [giftClickCount, setGiftClickCount] = useState(0);
  const [autoPopupVisible, setAutoPopupVisible] = useState(false);

  const questions = [
    { question: 'Berapa Tanggal Lahir Elfira?', answers: ['8 September', '9 September', '10 September', '11 September'], correctAnswer: '9 September' },
    { question: 'Siapa yang suka ngambek?', answers: ['Destio', 'Wahyu', 'Lanio', 'Elfira Aulia Septrian'], correctAnswer: 'Elfira Aulia Septrian' },
    { question: 'Minuman Favorite Elfira', answers: ['Coklat', 'Strawberry', 'Matcha', 'Grape'], correctAnswer: 'Matcha' },
    { question: 'Hal yang paling ga disukain Elfira', answers: ['Foto', 'Destio Friendly', 'Selfie', 'Ngasih PAP'], correctAnswer: 'Destio Friendly' },
    { question: 'Manusia paling spesial yang pernah dikirim Tuhan buat Destio', answers: ['Elfira', 'Aulia', 'Septrian', 'Semuanya Bener'], correctAnswer: 'Semuanya Bener' },
    { question: 'Di foto ini kita udah jadian belum?', answers: ['Udah', 'Belum'], correctAnswer: 'Belum', image: '/img/quiz/quiz1.jpg' },
  ];

  useEffect(() => {
    setSelectedAnswer(null);
  }, [currentQuestion]);

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    if (answer === questions[currentQuestion].correctAnswer) {
      if (currentQuestion < questions.length - 1) {
        setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300);
      } else {
        setSuccessPopupVisible(true);
      }
    } else {
      setWrongAnswerPopup(true);
    }
  };

  const handleGiftClick = (gift) => {
    if (gift !== 'Dipeluk') {
      setGiftClickCount(giftClickCount + 1);
      if (giftClickCount >= 5) {
        setAutoPopupVisible(true);
      }
    } else {
      setPopupVisible(true);
    }
  };

  const handleAutoPopupClose = () => {
    setAutoPopupVisible(false);
  };

  const handlePopupClose = () => {
    setSuccessPopupVisible(false);
    setShowGiftOptions(true);
  };

  const handleSendWhatsapp = () => {
    window.open('https://wa.me/6285929095672?text=Mas%20Tio%20Fira%20mau%20peluk!!!', '_blank');
  };

  const moveGiftOption = (e) => {
    if (e.target.textContent !== 'Dipeluk') {
      const element = e.target;
      const x = Math.random() * 150 - 75 + 'px';
      const y = Math.random() * 150 - 75 + 'px';
      element.style.transform = `translate(${x}, ${y})`;
    }
  };

  return (
    <div className="quiz-container">
      <div className="header">
        <h1 className="text-4xl font-bold text-center text-pink-600 mb-1">
          Tebak Jawabannya Nanti Dapet Hadiah
        </h1>
      </div>

      {!showGiftOptions ? (
        <div className="question-box">
          {questions[currentQuestion].image && (
            <img src={questions[currentQuestion].image} alt="Pertanyaan" className="question-image mb-4" />
          )}
          <p className="question-text">
            {questions[currentQuestion].question}
          </p>
          <ul className="space-y-3">
            {questions[currentQuestion].answers.map((answer, index) => (
              <li
                key={index}
                className={`answer-option ${
                  selectedAnswer === answer ? 'selected-answer' : ''
                }`}
                onClick={() => handleAnswer(answer)}
              >
                {answer}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="gift-container">
          <h2 className="text-2xl font-bold text-center mb-6 text-pink-600">
            Pilih Hadiah Ulang Tahunmu!
          </h2>
          <div className="gift-box">
            <ul className="space-y-3">
              {['Inova Reborn', 'Aerox', 'Iphone 15', 'Dipeluk'].map(
                (gift, index) => (
                  <li
                    key={index}
                    className={`gift-option ${
                      gift === 'Dipeluk' ? 'selected-gift' : ''
                    }`}
                    onClick={() => handleGiftClick(gift)}
                    onMouseEnter={gift !== 'Dipeluk' ? moveGiftOption : null}
                  >
                    {gift}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      )}

      {popupVisible && (
        <div className="popup">
          <div className="popup-content">
            <h3 className="text-xl font-bold mb-4">Selamat!</h3>
            <p className="text-lg mb-4">Yaudah besok dipeluk yaah ❤️</p>
            <button
              className="popup-button"
              onClick={() => {
                setPopupVisible(false);
                handleSendWhatsapp(); // Kirim pesan WhatsApp setelah menutup popup
              }}
            >
              Baik
            </button>
          </div>
        </div>
      )}

      {wrongAnswerPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3 className="text-xl font-bold mb-4">Oops!</h3>
            <p className="text-lg mb-4">Yaah Jawaban Salah, coba lagi ya...</p>
            <button
              className="popup-button"
              onClick={() => setWrongAnswerPopup(false)}
            >
              Tutup
            </button>
          </div>
        </div>
      )}

      {autoPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <h3 className="text-xl font-bold mb-4">Udah nyerah aja deh wkwk</h3>
            <p className="text-lg mb-4">Yakin gamau hadiah paling bawah tuh?😄</p>
            <button
              className="popup-button"
              onClick={handleAutoPopupClose}
            >
              Iya iyaaaaa
            </button>
          </div>
        </div>
      )}

      {successPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <h3 className="text-xl font-bold mb-4">Yeeey!</h3>
            <p className="text-lg mb-4">Kamu berhasil menjawab semua pertanyaan dengan benar! 🎉</p>
            <button
              className="popup-button"
              onClick={handlePopupClose}
            >
              Pilih Hadiah
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
