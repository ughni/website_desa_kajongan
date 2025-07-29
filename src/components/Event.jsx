import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// GANTI DENGAN DATA ASLI DARI DESA KAJONGAN
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

// Variasi animasi untuk kartu
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
  hover: {
    y: -10,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

// Variasi animasi untuk container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export default function KegiatanPengumuman() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section dengan animasi */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Informasi Terbaru dari Desa
          </motion.h2>
          <motion.p 
            className="mt-4 max-w-2xl mx-auto text-lg text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Agenda kegiatan dan pengumuman penting untuk warga Desa Kajongan.
          </motion.p>
        </motion.div>

        {/* Grid untuk Kartu dengan animasi stagger */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {dummyData.map((item, index) => (
            <motion.div 
              key={item.id}
              variants={cardVariants}
              whileHover="hover"
              className="flex flex-col bg-gray-50 rounded-lg shadow-lg overflow-hidden"
              custom={index}
            >
              <div className="p-6 flex-grow">
                {/* Label/Tag Dinamis dengan animasi */}
                <motion.span 
                  className={`inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full mb-4 ${
                    item.tipe === 'Kegiatan' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'
                  }`}
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: "spring" }}
                >
                  {item.tipe}
                </motion.span>

                <motion.p 
                  className="text-sm text-gray-500"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  {item.tanggal}
                </motion.p>
                <motion.h3 
                  className="mt-2 text-xl font-bold text-gray-800"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  {item.judul}
                </motion.h3>
                <motion.p 
                  className="mt-3 text-gray-600 leading-relaxed line-clamp-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  {item.deskripsi}
                </motion.p>
              </div>
              
              {/* Tombol Baca Selengkapnya dengan animasi */}
              <motion.div 
                className="bg-gray-100 p-4 mt-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <Link 
                  to={item.link} 
                  className="flex items-center font-semibold text-cyan-600 hover:text-cyan-800 transition-colors"
                >
                  <motion.span
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex items-center"
                  >
                    Baca Selengkapnya
                    <FaArrowRight className="ml-2" />
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}