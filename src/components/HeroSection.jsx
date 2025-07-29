import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section 
      className="relative flex items-center justify-center text-white bg-cover bg-center"
      // Kita buat tingginya 100vh dikurangi tinggi navbar (h-16 = 4rem)
      // agar pas di bawah navbar tanpa di-scroll.
      style={{
        height: 'calc(100vh - 4rem)',
        // GANTI URL INI dengan foto terbaik Desa Kajongan (misal: pemandangan sawah, gerbang desa, dll)
        backgroundImage: "url('https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
      }}
    >
      {/* Lapisan overlay gelap agar teks mudah dibaca */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Konten Teks dan Tombol */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Selamat Datang di Desa Kajongan
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
          Temukan informasi terbaru, layanan publik, dan jelajahi potensi desa kami langsung dari genggaman Anda.
        </p>

        {/* Tombol Aksi (Call to Action) */}
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