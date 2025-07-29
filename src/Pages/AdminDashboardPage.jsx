import React from 'react';
import { 
  FaInbox, 
  FaUsers, 
  FaHome, 
  FaWallet, 
  FaEye, 
  FaCheck, 
  FaSync,
  FaFileExcel,
  FaPlus,
  FaBullhorn
} from 'react-icons/fa';

// --- DATA SIMULASI ---
// Di aplikasi nyata, data ini akan diambil dari database/API
const stats = [
  { id: 1, label: 'Surat Masuk Baru', value: '3', icon: <FaInbox size={24} className="text-blue-500" />, color: 'blue' },
  { id: 2, label: 'Total Warga', value: '321', icon: <FaUsers size={24} className="text-green-500" />, color: 'green' },
  { id: 3, label: 'Jumlah KK', value: '105', icon: <FaHome size={24} className="text-purple-500" />, color: 'purple' },
  { id: 4, label: 'Total Kas RT', value: 'Rp 2.550.000', icon: <FaWallet size={24} className="text-yellow-500" />, color: 'yellow' },
];

const suratMasuk = [
  { id: 1, nama: 'Ahmad Dahlan', jenis: 'Pengantar KTP', tanggal: '28 Juli 2025', status: 'Baru' },
  { id: 2, nama: 'Siti Nurbaya', jenis: 'Keterangan Usaha', tanggal: '28 Juli 2025', status: 'Baru' },
  { id: 3, nama: 'Budi Santoso', jenis: 'Pengantar KK', tanggal: '27 Juli 2025', status: 'Diproses' },
  { id: 4, nama: 'Ujang', jenis: 'Keterangan Domisili', tanggal: '27 Juli 2025', status: 'Selesai' },
  { id: 5, nama: 'Dinda', jenis: 'Izin Keramaian', tanggal: '26 Juli 2025', status: 'Selesai' },
];

// Komponen kecil untuk kartu statistik
const StatCard = ({ item }) => (
  <div className="bg-white p-6 rounded-xl shadow-md flex items-center justify-between">
    <div>
      <p className="text-sm text-gray-500">{item.label}</p>
      <p className="text-2xl font-bold text-gray-800">{item.value}</p>
    </div>
    <div className={`p-3 rounded-full bg-${item.color}-100`}>
      {item.icon}
    </div>
  </div>
);

// Komponen kecil untuk status badge
const StatusBadge = ({ status }) => {
  const baseStyle = 'px-3 py-1 text-xs font-semibold rounded-full';
  let colorStyle = '';
  switch (status) {
    case 'Baru': colorStyle = 'bg-yellow-100 text-yellow-800'; break;
    case 'Diproses': colorStyle = 'bg-blue-100 text-blue-800'; break;
    case 'Selesai': colorStyle = 'bg-green-100 text-green-800'; break;
    default: colorStyle = 'bg-gray-100 text-gray-800';
  }
  return <span className={`${baseStyle} ${colorStyle}`}>{status}</span>;
};


export default function AdminDashboard() {
  return (
    <section className="bg-slate-100 p-4 sm:p-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Dashboard */}
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-slate-800">Panel Admin RT</h1>
          <p className="text-slate-500">Selamat datang, Pengurus RT. Berikut adalah ringkasan aktivitas terbaru.</p>
        </header>

        {/* Kartu Statistik */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {stats.map(item => <StatCard key={item.id} item={item} />)}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Kolom Utama: Permintaan Surat Masuk */}
          <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-bold text-slate-800 mb-4">📥 Permintaan Surat Masuk</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-600">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th scope="col" className="px-4 py-3">Nama Pemohon</th>
                    <th scope="col" className="px-4 py-3">Jenis Surat</th>
                    <th scope="col" className="px-4 py-3">Tanggal</th>
                    <th scope="col" className="px-4 py-3">Status</th>
                    <th scope="col" className="px-4 py-3">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {suratMasuk.map(surat => (
                    <tr key={surat.id} className="bg-white border-b hover:bg-slate-50">
                      <td className="px-4 py-4 font-medium text-gray-900">{surat.nama}</td>
                      <td className="px-4 py-4">{surat.jenis}</td>
                      <td className="px-4 py-4">{surat.tanggal}</td>
                      <td className="px-4 py-4"><StatusBadge status={surat.status} /></td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2">
                          <button className="p-2 text-blue-600 hover:bg-blue-100 rounded-full" title="Lihat Detail"><FaEye /></button>
                          <button className="p-2 text-green-600 hover:bg-green-100 rounded-full" title="Proses/Setujui"><FaCheck /></button>
                          <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full" title="Tandai Diproses"><FaSync /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Kolom Samping: Aksi Cepat */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-bold text-slate-800 mb-4">👥 Manajemen Warga</h2>
              <div className="space-y-3">
                <input type="text" placeholder="Cari nama warga..." className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500" />
                <button className="w-full flex items-center justify-center gap-2 bg-cyan-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-all">
                  <FaPlus /> Tambah Warga Baru
                </button>
                <button className="w-full flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all">
                  <FaFileExcel /> Ekspor Data Warga
                </button>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-bold text-slate-800 mb-4">⚡ Aksi Cepat</h2>
              <button className="w-full flex items-center justify-center gap-2 bg-purple-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all">
                <FaBullhorn /> Buat Pengumuman Baru
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}