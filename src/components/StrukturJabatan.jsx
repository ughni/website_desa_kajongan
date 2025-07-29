import React from 'react';

// --- GANTI SEMUA DATA DI BAWAH INI DENGAN DATA ASLI DESA KAJONGAN ---

// Data untuk Kepala Desa
const kepalaDesa = {
  nama: 'Bapak Solehudin, S.Sos.',
  jabatan: 'Kepala Desa',
  foto: '/public/Images/pakLurah.png'
};

// Data untuk Sekretaris, Kaur, dan Kasi
const perangkatDesa = [
  { id: 1, nama: 'Ibu Siti Aminah, S.E.', jabatan: 'Sekretaris Desa', foto: 'https://plus.unsplash.com/premium_photo-1738592736106-a17b897c0ab1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2FqYWglMjBhbmltYXNpfGVufDB8fDB8fHww' },
  { id: 2, nama: 'Budi Hartono', jabatan: 'Kasi Pemerintahan', foto: 'https://plus.unsplash.com/premium_photo-1738497320977-d718f647b6e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdhamFoJTIwYW5pbWFzaXxlbnwwfHwwfHx8MA%3D%3D' },
  { id: 3, nama: 'Anisa Rahmawati', jabatan: 'Kasi Kesejahteraan', foto: 'https://plus.unsplash.com/premium_photo-1738497320977-d718f647b6e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdhamFoJTIwYW5pbWFzaXxlbnwwfHwwfHx8MA%3D%3D' },
  { id: 4, nama: 'Eko Prasetyo', jabatan: 'Kasi Pelayanan', foto: 'https://plus.unsplash.com/premium_photo-1738497320977-d718f647b6e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdhamFoJTIwYW5pbWFzaXxlbnwwfHwwfHx8MA%3D%3D' },
  { id: 5, nama: 'Wahyu Hidayat', jabatan: 'Kaur Keuangan', foto: 'https://plus.unsplash.com/premium_photo-1738497320977-d718f647b6e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdhamFoJTIwYW5pbWFzaXxlbnwwfHwwfHx8MA%3D%3D' },
  { id: 6, nama: 'Linda Sari', jabatan: 'Kaur Perencanaan', foto: 'https://plus.unsplash.com/premium_photo-1738497320977-d718f647b6e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdhamFoJTIwYW5pbWFzaXxlbnwwfHwwfHx8MA%3D%3D' },
];

// Data untuk Kepala Dusun
const kepalaDusun = [
  { id: 1, nama: 'Bapak Suprapto', jabatan: 'Kepala Dusun Krajan', foto: 'https://via.placeholder.com/200x250/000000/FFFFFF?text=Foto+Kadus' },
  { id: 2, nama: 'Bapak Slamet Riyadi', jabatan: 'Kepala Dusun Sawahan', foto: 'https://via.placeholder.com/200x250/000000/FFFFFF?text=Foto+Kadus' },
  { id: 3, nama: 'Bapak Purnomo', jabatan: 'Kepala Dusun Dukuh', foto: 'https://via.placeholder.com/200x250/000000/FFFFFF?text=Foto+Kadus' },
  { id: 4, nama: 'Bapak Sugeng', jabatan: 'Kepala Dusun Lor', foto: 'https://via.placeholder.com/200x250/000000/FFFFFF?text=Foto+Kadus' },
];

// Komponen kecil untuk menampilkan kartu profil setiap orang
const PersonCard = ({ nama, jabatan, foto }) => (
  <div className="bg-white rounded-lg shadow-md text-center p-6 transform transition-transform hover:-translate-y-2">
    <img
      src={foto}
      alt={`Foto ${nama}`}
      className="w-32 h-40 mx-auto rounded-md object-cover mb-4 ring-2 ring-gray-200"
    />
    <h4 className="text-lg font-bold text-gray-900">{nama}</h4>
    <p className="text-cyan-600 font-semibold">{jabatan}</p>
  </div>
);


export default function StrukturPerangkatDesa() {
  return (
    <div className="bg-gray-50 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Struktur Perangkat Desa Kajongan
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Mengenal para abdi masyarakat yang bertugas di Desa Kajongan.
          </p>
        </div>

        {/* Kepala Desa */}
        <div className="mb-12 flex justify-center">
          <div className="w-full max-w-xs">
            <PersonCard nama={kepalaDesa.nama} jabatan={kepalaDesa.jabatan} foto={kepalaDesa.foto} />
          </div>
        </div>

        {/* Sekretariat dan Pelaksana Teknis */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8 border-b-2 border-cyan-500 pb-2">
            Sekretariat & Pelaksana Teknis
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {perangkatDesa.map(person => (
              <PersonCard key={person.id} nama={person.nama} jabatan={person.jabatan} foto={person.foto} />
            ))}
          </div>
        </div>

        {/* Pelaksana Kewilayahan (Kepala Dusun) */}
        <div>
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8 border-b-2 border-cyan-500 pb-2">
            Pelaksana Kewilayahan (Kepala Dusun)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {kepalaDusun.map(person => (
              <PersonCard key={person.id} nama={person.nama} jabatan={person.jabatan} foto={person.foto} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}