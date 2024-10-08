// components/Album.js
import React from 'react';
import PageFlip from 'react-pageflip';
import '../css/Album.css'; // Pastikan CSS diimport dengan benar

const Album = () => {
  const photos = ['a1.jpg', 'a21.jpg', 'a31.jpg', 'a4.jpg', 'a5.jpg', 'a6.jpg', 'a7.jpg', 'a8.jpg', 'a9.jpg', 'a10.jpg', 'a11.jpg'];

  return (
    <div id="album-section" className="page-flip-container flex justify-center items-center ">
      
      <PageFlip
        className="page-flip shadow-2xl"
        width={350}
        height={450}
        showCover={true}
        mobileScrollSupport={false} // Disable mobile scroll
        style={{ touchAction: 'none', overflow: 'hidden', borderRadius: '15px', margin: '30px' }}
      >
        
        {/* Sampul Buku */}
        <div className="page" data-density="hard">
          <div className="page-cover">
            <div className="cover-content">
              <h1>Elfira: A Portrait of Perfection</h1>
              <p>Every picture, a reminder of how stunning you are.</p>
            </div>
          </div>
        </div>

        {/* Halaman Pembuka */}
        <div className="page">
          <div className="flex flex-col justify-center items-center h-full p-10">
            <h2 className="text-3xl font-bold font-serif text-pink-900 mb-4">Welcome to Elfira's Album</h2>
            <p className="text-sm text-center text-pink-900 italic">
              A collection of beautiful moments that capture your charm and grace.
            </p>
          </div>
        </div>

        {/* Foto-foto hingga a31.jpg */}
        {photos.slice(0, 3).map((photo, index) => (
          <div key={`photo-${index}`} className="page"> {/* Tambahkan key unik */}
            <div className="flex flex-col justify-center items-center h-full p-4">
              <img
                src={`/img/${photo}`}
                alt={`photo-${index}`}
                className="photo mb-4 shadow-lg rounded-lg"
              />
              <p className="page-number bg-pink-200 bg-opacity-80 text-pink-900 py-1 px-4 rounded-full shadow-lg text-sm font-medium mt-4">
                Page {index + 1} of 12
              </p>
            </div>
          </div>
        ))}

        {/* Video setelah a31.jpg */}
        <div key="video-ultahfira" className="page"> {/* Tambahkan key unik */}
          <div className="flex flex-col justify-center items-center h-full p-4">
            <video controls width="200" className="video mb-4 shadow-lg rounded-lg">
              <source src="/video/ultahfira2.mp4" type="video/mp4" />
              Yah browsermu ngga support, ngga bisa muter video
            </video>
            <p className="page-number bg-pink-200 bg-opacity-80 text-pink-900 py-1 px-4 rounded-full shadow-lg text-sm font-medium mt-4">
              Page 4 of 12
            </p>
          </div>
        </div>


        {/* Foto-foto setelah video */}
        {photos.slice(3).map((photo, index) => (
          <div key={index + 3} className="page">
            <div className="flex flex-col justify-center items-center h-full p-4">
              <img
                src={`/img/${photo}`}
                alt={`photo-${index + 3}`}
                className="photo mb-4 shadow-lg rounded-lg"
              />
              <p className="page-number bg-pink-200 bg-opacity-80 text-pink-900 py-1 px-4 rounded-full shadow-lg text-sm font-medium mt-4">
                Page {index + 5} of 12
              </p>
            </div>
          </div>
        ))}

        {/* Halaman Penutup */}
        <div className="page" data-density="hard">
          <div className="page-cover">
            <div className="cover-content">
              <h1>The End</h1>
              <p>Terima kasih telah melihat album ini!</p>
            </div>
          </div>
        </div>
      </PageFlip>
    </div>
  );
};

export default Album;
