import React, { useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import "../css/PhotoBook.css";

const FlipBookSection = () => {
  const images = [
    { src: "img/a1.jpg", alt: "Elfira Photo 1" },
    { src: "img/a2.jpg", alt: "Elfira Photo 2" },
    { src: "img/a3.jpg", alt: "Elfira Photo 3" },
    { src: "img/a4.jpg", alt: "Elfira Photo 4" },
    { src: "img/a5.jpg", alt: "Elfira Photo 5" },
    { src: "img/a6.jpg", alt: "Elfira Photo 6" },
    { src: "img/a7.jpg", alt: "Elfira Photo 7" },
    { src: "img/a8.jpg", alt: "Elfira Photo 8" },
  ];

  useEffect(() => {
    const preventScroll = (e) => {
      e.preventDefault();
    };

    // Disable scrolling when interacting with the flipbook
    document.querySelector(".flipbook-wrapper").addEventListener("touchmove", preventScroll, { passive: false });

    return () => {
      document.querySelector(".flipbook-wrapper").removeEventListener("touchmove", preventScroll);
    };
  }, []);

  return (
    <div className="flipbook-container">
      <div className="flipbook-wrapper">
        <HTMLFlipBook
          width={350}
          height={300}
          size="stretch"
          minWidth={200}
          maxWidth={500}
          minHeight={300}
          maxHeight={700}
          maxShadowOpacity={0.5}
          flippingTime={1000}
          mobileScrollSupport={false}  // Nonaktifkan mobile scroll support
          className="flipbook"
        >
          {/* Halaman Judul */}
          <div className="page">
            <div className="title-page">
              <h1>Elfira's 21st Birthday</h1>
              <p>A Collection of Memories and Love</p>
            </div>
          </div>

          {/* Halaman Foto */}
          {images.map((image, index) => (
            <div key={index} className="page">
              <img src={image.src} alt={image.alt} className="flipbook-image" />
              <div className="page-number">{index + 1}</div>
            </div>
          ))}
        </HTMLFlipBook>
      </div>
    </div>
  );
};

export default FlipBookSection;
