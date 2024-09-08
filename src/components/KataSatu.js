import React from 'react';

const KataSatu = () => {
  const scrollToAlbumSection = () => {
    const albumSection = document.getElementById('album-section');
    if (albumSection) {
      albumSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white py-16 px-8 text-center mx-auto max-w-screen-lg">
      <h2 className="text-4xl md:text-4xl font-bold text-pink-600 mb-6">Untukmu, Elfira</h2>
      <p className="text-lg md:text-xl text-gray-700 italic mb-4">
        Happy Birthday 21th Elfira Aulia Septrian. Hari ini aku langitkan semua doa terbaikku untuk kamu. Semoga hal - hal yang membuat kamu runtuh turut menjadi
        alasan kamu untuk selalu tumbuh dan tidak menyerah. Semoga dunia senantiasa menjagamu di mana pun kamu berada.
        Semoga hari harimu selalu diiringi cinta yang tidak pernah ada batasnya.
      </p>
      <p className="text-lg md:text-xl text-gray-700 italic mb-4">
        Aku selalu berdoa agar di setiap langkahmu selalu dipenuhi dengan kebahagiaan, jangan nangis mulu yaaa. 
        Terima kasih sudah jadi bagian penting dalam hidupku.
      </p>
      <p className="text-lg md:text-xl text-gray-700 font-bold italic">
        I love you so much ❤️
      </p>

      <button
        onClick={scrollToAlbumSection}
        className="mt-10 font-bold bg-pink-400 text-white px-6 py-4 rounded-full shadow-lg hover:bg-gray-100 hover:text-pink-400 transition-colors"
      >
        Lihat Album
      </button>
      
    </div>
  );
}

export default KataSatu;
