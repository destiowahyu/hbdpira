import React from 'react';
import PageFlip from 'react-pageflip';
import '../css/FotoBuku.css'; // Pastikan CSS ini digunakan untuk styling yang sebelumnya kamu suka

const FotoBuku = () => {
  const photos = [
    '/img/a1.jpg',
    '/img/a2.jpg',
    '/img/a3.jpg',
    '/img/a4.jpg',
    '/img/a5.jpg',
    '/img/a6.jpg',
    '/img/a7.jpg',
    '/img/a8.jpg',
  ];

  return (
    <div className="flipbook-container flex justify-center items-center py-10">
      <PageFlip
        className="flipbook shadow-2xl"
        width={300}
        height={400}
        showCover={true}
        mobileScrollSupport={false}
        style={{ touchAction: 'none', overflow: 'hidden', borderRadius: '15px', margin: '20px' }}
      >
        {/* Sampul Buku */}
        <div className="page" data-density="hard">
          <div className="page-cover">
            <div className="cover-content">
              <h1>Elfira's Love Story</h1>
              <p>A Journey of Love and Memories</p>
            </div>
          </div>
        </div>

        {/* Halaman Pembuka */}
        <div className="page">
          <div className="flex flex-col justify-center items-center h-full p-6">
            <h2 className="text-2xl font-bold mb-4">Selamat Datang di FlipBook Elfira</h2>
            <p className="text-center text-lg">Kumpulan kenangan terbaik untuk ulang tahun Elfira yang ke-21.</p>
          </div>
        </div>

        {/* Foto-foto */}
        {photos.map((photo, index) => (
          <div key={index} className="page">
            <div className="flex flex-col justify-center items-center h-full p-4">
              <img src={photo} alt={`photo-${index}`} className="h-3/4 w-auto mb-4 shadow-lg rounded-lg" />
              <p className="text-lg">Halaman {index + 1}</p>
            </div>
          </div>
        ))}

        {/* Halaman Penutup */}
        <div className="page" data-density="hard">
          <div className="page-cover">
            <div className="cover-content">
              <h1>The End</h1>
              <p>Terima kasih telah melihat FlipBook ini!</p>
            </div>
          </div>
        </div>
      </PageFlip>
    </div>
  );
};

export default FotoBuku;
