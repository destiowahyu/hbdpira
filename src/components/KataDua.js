import React from 'react';

const KataDua = () => {
  const scrollToAlbumSection = () => {
    const albumSection = document.getElementById('album-section');
    if (albumSection) {
      albumSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white py-16 px-8 text-center mx-auto max-w-screen-lg">
      <p className="text-lg md:text-xl text-gray-700 italic mb-4">
      Di tiap detik yang bergulir, ada semesta kecil yang menguntai doa untukmu. 
      Tepat di hari ini, 21 tahun yang lalu, seluruh semesta menahan napas, menanti kedatanganmu, sosok yang membawa 
      sinar baru ke dalam dunia ini. Setiap hembusan angin, setiap getar dedaunan, seolah mengiringi kelahiranmu dengan lembut.
       Kau adalah hadiah bagi dunia, dan sejak saat itu, setiap langkahmu menjadi bagian dari irama kehidupan yang mengalir indah.
      </p>
      <p className="text-lg md:text-xl text-gray-700 italic mb-4">
      Aku tau kok, sekarang ini kamu hidup tanpa kehangatan seorang mama. 
      Tapi walaupun mama ga lagi di sisi kamu, kamu harus tetep bahagia gimanapun caranya. 
      Izinkan aku memberi sedikit kehangatan dalam kehidupanmu, walaupun tak bisa sepenuhnya memberikan kehangatan 
      padamu layaknya seorang mama, namun aku ingin hadir sebagai pelukan hangat saat kamu merasa rindu, sedih, 
      bahagia, dan segala keadaanmu.
      </p>
      <p className="text-lg md:text-xl text-gray-700 italic mb-4">
      Selamat ulang tahun, semoga cahaya yang kau bawa selalu menerangi langkahmu, jangan berhenti jadi orang baik,
      dan dalam setiap harimu semoga ada kebahagiaan yang tak pernah pudar."
      </p>
      <p className="text-lg text-pink-900 italic font-bold">
        -Destio Wahyu-
      </p>
      
    </div>
  );
}

export default KataDua;
