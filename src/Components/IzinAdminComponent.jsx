// Perlu install: npm install react-icons
import { FaWpforms, FaSignInAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Lebih baik menggunakan Link dari React Router

export default function HeroRT() {
  return (
    <section className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Kolom Kiri: Teks & Tombol Aksi */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-800 tracking-tight">
              Selamat Datang di <span className="text-cyan-600">RT Online</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-xl mx-auto md:mx-0">
              Layanan praktis untuk warga dari muda hingga orang tua. Ajukan surat, cek info kegiatan, dan terhubung dengan pengurus RT tanpa ribet.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              {/* Tombol Utama (Primary) */}
              <Link
                to="/ajukan"
                className="flex items-center justify-center gap-3 bg-cyan-600 text-white px-6 py-3 rounded-lg font-bold text-lg hover:bg-cyan-700 transition-all transform hover:scale-105 shadow-lg"
              >
                <FaWpforms />
                <span>Ajukan Surat</span>
              </Link>
              
              {/* Tombol Sekunder (Secondary) */}
              <Link
                to="/admin"
                className="flex items-center justify-center gap-3 bg-white text-slate-700 px-6 py-3 rounded-lg font-bold text-lg hover:bg-slate-100 transition-all shadow-lg border border-slate-200"
              >
                <FaSignInAlt />
                <span>Masuk Admin</span>
              </Link>
            </div>
          </div>

          {/* Kolom Kanan: Ilustrasi */}
          <div className="hidden md:block">
            <img 
              src="/public/Images/DesaKajongan.png" 
              alt="Ilustrasi layanan online RT"
              className="rounded-lg object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
}