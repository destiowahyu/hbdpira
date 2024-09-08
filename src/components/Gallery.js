import React from 'react';

const photos = [
  { src: '/img/gallery/1.jpg', caption: 'Happy' },
  { src: '/img/gallery/2.jpg', caption: 'Birthday' },
  { src: '/img/gallery/3.jpg', caption: 'Sayang' },
];

const Gallery = () => {
  return (
    <div className="py-20 bg-white">
      <h2 className="text-center text-3xl font-bold text-pink-600">Gallery of Memories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-10 px-4">
        {photos.map((photo, index) => (
          <div key={index} className="relative group">
            <img src={photo.src} alt={photo.caption} className="w-full h-64 object-cover rounded-lg shadow-lg" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-white text-lg">{photo.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
