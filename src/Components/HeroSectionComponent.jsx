import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setAnimate(true);
  }, []);

  return (
    <section 
      className="relative flex items-center justify-center text-white bg-cover bg-center"
      style={{
        height: 'calc(100vh - 4rem)',
        backgroundImage: "url('https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Konten Teks dan Tombol */}
      <div className={`relative z-10 text-center px-4 transition-all duration-1000 ease-out
        ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Selamat Datang di Desa Kajongan
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
          Temukan informasi terbaru, layanan publik, dan jelajahi potensi desa kami langsung dari genggaman Anda.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row sm:justify-center gap-4">
          <Link
            to="/ajukan"
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 shadow-lg"
          >
            Ajukan Surat
          </Link>
        </div>
      </div>
    </section>
  );
}
