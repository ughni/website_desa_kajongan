import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// GANTI DENGAN DATA ASLI DARI DESA KAJONGAN
// Di aplikasi nyata, data ini akan diambil dari database/API.
const dummyData = [
  {
    id: 1,
    tipe: 'Kegiatan',
    judul: 'Lomba Gebyar Kemerdekaan HUT RI ke-80',
    tanggal: '17 Agustus 2025',
    deskripsi: 'Ayo meriahkan Hari Kemerdekaan dengan mengikuti berbagai lomba menarik untuk semua usia di lapangan desa.',
    link: '/kegiatan/lomba-17an'
  },
  {
    id: 2,
    tipe: 'Pengumuman',
    judul: 'Batas Akhir Pembayaran PBB-P2 Tahun 2025',
    tanggal: 'Dipublikasikan: 25 Juli 2025',
    deskripsi: 'Diinformasikan kepada seluruh warga Desa Kajongan untuk segera melakukan pembayaran PBB sebelum jatuh tempo pada 31 Agustus 2025.',
    link: '/pengumuman/pembayaran-pbb-2025'
  },
  {
    id: 3,
    tipe: 'Kegiatan',
    judul: 'Kerja Bakti Rutin - Persiapan 17an',
    tanggal: 'Sabtu, 2 Agustus 2025',
    deskripsi: 'Dalam rangka menyambut HUT RI, akan diadakan kerja bakti membersihkan lingkungan. Kehadiran seluruh warga sangat diharapkan.',
    link: '/kegiatan/kerja-bakti-agustus'
  },
  {
    id: 4,
    tipe: 'Pengumuman',
    judul: 'Jadwal Posyandu Balita & Lansia',
    tanggal: 'Dipublikasikan: 27 Juli 2025',
    deskripsi: 'Pelayanan Posyandu untuk bulan Agustus akan dilaksanakan pada hari Selasa, 5 Agustus 2025 di Balai Desa. Mohon membawa buku KIA.',
    link: '/pengumuman/jadwal-posyandu-agustus'
  },
  {
    id: 5,
    tipe: 'Pengumuman',
    judul: 'Informasi Pemadaman Listrik Bergilir',
    tanggal: 'Dipublikasikan: 28 Juli 2025',
    deskripsi: 'Akan terjadi pemadaman listrik untuk pemeliharaan jaringan pada hari Rabu, 30 Juli 2025 pukul 09:00 - 14:00 WIB di area Dusun Kidul.',
    link: '/pengumuman/info-pemadaman-listrik'
  },
  {
    id: 6,
    tipe: 'Kegiatan',
    judul: 'Pengajian Akbar Menyambut Tahun Baru Islam',
    tanggal: 'Jumat, 29 Agustus 2025',
    deskripsi: 'Mari kita tingkatkan iman dan taqwa dalam acara Pengajian Akbar yang akan diisi oleh K.H. Ahmad Basyir dari Pekalongan.',
    link: '/kegiatan/pengajian-akbar'
  }
];

export default function KegiatanPengumuman() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Informasi Terbaru dari Desa
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Agenda kegiatan dan pengumuman penting untuk warga Desa Kajongan.
          </p>
        </div>

        {/* Grid untuk Kartu */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dummyData.map((item) => (
            <div key={item.id} className="flex flex-col bg-gray-50 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:-translate-y-2">
              <div className="p-6 flex-grow">
                {/* Label/Tag Dinamis */}
                <span className={`inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full mb-4 ${
                  item.tipe === 'Kegiatan' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {item.tipe}
                </span>

                <p className="text-sm text-gray-500">{item.tanggal}</p>
                <h3 className="mt-2 text-xl font-bold text-gray-800">
                  {item.judul}
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed line-clamp-3">
                  {item.deskripsi}
                </p>
              </div>
              
              {/* Tombol Baca Selengkapnya */}
              <div className="bg-gray-100 p-4 mt-auto">
                <Link to={item.link} className="flex items-center font-semibold text-cyan-600 hover:text-cyan-800 transition-colors">
                  Baca Selengkapnya
                  <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}