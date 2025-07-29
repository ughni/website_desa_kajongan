import { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

export default function AjukanSurat() {
  // Menambahkan field baru ke dalam state
  const [form, setForm] = useState({
    nama: '',
    nik: '',
    telepon: '',
    alamat: '',
    jenisSurat: '',
    keperluan: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pesan konfirmasi yang lebih informatif
    alert("Pengajuan surat Anda telah berhasil dikirim. Silakan tunggu informasi selanjutnya dari pengurus RT.");
    
    // Reset form ke kondisi awal
    setForm({
      nama: '',
      nik: '',
      telepon: '',
      alamat: '',
      jenisSurat: '',
      keperluan: ''
    });
  };

  // Class untuk styling input dan textarea agar konsisten
  const inputStyle = "w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all";

  return (
    <section className="bg-slate-50 py-12 sm:py-16">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white p-8 rounded-xl shadow-2xl">
          
          {/* Header Formulir */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-slate-800">Formulir Pengajuan Surat</h2>
            <p className="mt-2 text-slate-500">
              Silakan isi formulir di bawah ini dengan data yang benar dan valid.
            </p>
          </div>

          {/* Formulir */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="nama" className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap (sesuai KTP)</label>
              <input type="text" id="nama" name="nama" value={form.nama} onChange={handleChange} className={inputStyle} required />
            </div>

            <div>
              <label htmlFor="nik" className="block text-sm font-medium text-gray-700 mb-1">Nomor Induk Kependudukan (NIK)</label>
              <input type="text" id="nik" name="nik" value={form.nik} onChange={handleChange} className={inputStyle} required pattern="\d{16}" title="NIK harus terdiri dari 16 angka"/>
            </div>

            <div>
              <label htmlFor="telepon" className="block text-sm font-medium text-gray-700 mb-1">Nomor Telepon / HP (WhatsApp)</label>
              <input type="tel" id="telepon" name="telepon" value={form.telepon} onChange={handleChange} className={inputStyle} required />
            </div>

            <div>
              <label htmlFor="alamat" className="block text-sm font-medium text-gray-700 mb-1">Alamat Lengkap</label>
              <textarea id="alamat" name="alamat" value={form.alamat} onChange={handleChange} rows="3" className={inputStyle} required />
            </div>

            <div>
              <label htmlFor="jenisSurat" className="block text-sm font-medium text-gray-700 mb-1">Pilih Jenis Surat</label>
              <select id="jenisSurat" name="jenisSurat" value={form.jenisSurat} onChange={handleChange} className={inputStyle} required>
                <option value="" disabled>-- Pilih salah satu --</option>
                <option value="Surat Pengantar KTP/KK">Surat Pengantar KTP/KK</option>
                <option value="Surat Keterangan Domisili">Surat Keterangan Domisili</option>
                <option value="Surat Izin Keramaian">Surat Izin Keramaian</option>
                <option value="Surat Keterangan Usaha">Surat Keterangan Usaha</option>
                <option value="Lainnya">Lainnya...</option>
              </select>
            </div>

            <div>
              <label htmlFor="keperluan" className="block text-sm font-medium text-gray-700 mb-1">Jelaskan Keperluan Anda</label>
              <textarea id="keperluan" name="keperluan" value={form.keperluan} onChange={handleChange} rows="4" className={inputStyle} placeholder="Contoh: Untuk keperluan pendaftaran sekolah anak." required />
            </div>
            
            {/* Tombol Kirim */}
            <button 
              type="submit" 
              className="w-full flex items-center justify-center gap-3 bg-cyan-600 text-white px-6 py-3 rounded-lg font-bold text-lg hover:bg-cyan-700 transition-all transform hover:scale-105 shadow-lg"
            >
              <FaPaperPlane />
              <span>Kirim Pengajuan</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}