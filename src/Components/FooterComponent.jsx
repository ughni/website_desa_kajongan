import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Kolom 1: Tentang Desa */}
          <div className="space-y-4">
            <h3 className="text-white text-2xl font-bold">Desa Kajongan</h3>
            <p className="text-gray-400">
              Portal informasi dan layanan digital resmi Pemerintah Desa Kajongan, Kecamatan Kajen, Kabupaten Pekalongan.
            </p>
          </div>

          {/* Kolom 2: Navigasi Cepat */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Navigasi</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-white hover:underline">Beranda</Link></li>
              <li><Link to="/profil-desa" className="hover:text-white hover:underline">Profil Desa</Link></li>
              <li><Link to="/struktur-pemerintahan" className="hover:text-white hover:underline">Struktur Pemerintahan</Link></li>
              <li><Link to="/pengumuman" className="hover:text-white hover:underline">Pengumuman</Link></li>
            </ul>
          </div>

          {/* Kolom 3: Hubungi Kami */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Hubungi Kami</h3>
            <address className="not-italic space-y-3">
              <p className="flex items-start">
                <FaMapMarkerAlt className="flex-shrink-0 mr-3 mt-1 text-cyan-400" />
                <span>Jl. Raya Kajen No. 123, Kajen, Kabupaten Pekalongan, Jawa Tengah 51161</span>
              </p>
              <p className="flex items-center">
                <FaPhone className="flex-shrink-0 mr-3 text-cyan-400" />
                <span>(0285) 123-4567</span>
              </p>
              <p className="flex items-center">
                <FaEnvelope className="flex-shrink-0 mr-3 text-cyan-400" />
                <span>info@kajongan.desa.id</span>
              </p>
            </address>
          </div>

          {/* Kolom 4: Media Sosial */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Ikuti Kami</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors" aria-label="Facebook">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.instagram.com/karangtaruna_desa_kajongan/" className="text-gray-400 hover:text-cyan-400 transition-colors" aria-label="Instagram">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors" aria-label="YouTube">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bagian Copyright di Bawah */}
      <div className="bg-gray-900 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
          <p>&copy; {currentYear} Pemerintah Desa Kajongan. Semua Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}