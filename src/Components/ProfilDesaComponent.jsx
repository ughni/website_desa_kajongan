 import { FaUsers, FaMapMarkedAlt, FaBullseye, FaCheckCircle } from 'react-icons/fa';

// Komponen kecil untuk kartu statistik demografi
const StatCard = ({ icon, label, value }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-transform hover:-translate-y-2">
    <div className="text-cyan-500 mb-4">{icon}</div>
    <p className="text-3xl font-bold text-gray-800">{value}</p>
    <p className="text-gray-500">{label}</p>
  </div>
);

export default function ProfilDesa() {
  return (
    <div className="bg-gray-50">
      {/* 1. Header Halaman */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">Profil Desa Kajongan</h1>
          <p className="mt-2 text-lg text-gray-600">Mengenal Lebih Dekat Desa Kita Tercinta</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* 2. Sambutan Kepala Desa */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg p-8 gap-8">
            <div className="flex-shrink-0">
              <img
                // GANTI DENGAN FOTO KEPALA DESA KAJONGAN
                src="/public/Images/pakLurah.png" 
                alt="Kepala Desa Kajongan"
                className="h-40 w-40 rounded-full object-cover ring-4 ring-cyan-500"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Sambutan Kepala Desa</h2>
              <p className="text-xl text-gray-600 font-semibold mt-1">Bapak M. Mughni, S. KOM</p>
              <blockquote className="mt-4 border-l-4 border-cyan-500 pl-4 text-gray-700 italic">
                "Assalamu'alaikum Wr. Wb. Selamat datang di portal digital Desa Kajongan. Website ini kami hadirkan sebagai jembatan informasi antara pemerintah desa dan masyarakat, serta untuk memperkenalkan potensi desa kita kepada dunia. Mari bersama-sama membangun Desa Kajongan yang maju, mandiri, dan sejahtera."
              </blockquote>
            </div>
          </div>
        </section>

        {/* 3. Sejarah & Visi Misi */}
        <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Sejarah Singkat</h3>
            <p className="text-gray-600 leading-relaxed">
              {/* GANTI DENGAN SEJARAH DESA KAJONGAN */}
              Desa Kajongan, yang terletak di jantung Kecamatan Kajen, memiliki sejarah panjang yang berakar dari tradisi agraris masyarakatnya. Didirikan pada tahun 1920, desa ini telah berkembang dari sebuah pemukiman kecil menjadi pusat komunitas yang dinamis dengan semangat gotong royong yang tinggi... 
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Visi & Misi</h3>
            <div className="space-y-4">
              <div>
                <h4 className="flex items-center text-lg font-semibold text-gray-700">
                  <FaBullseye className="mr-3 text-cyan-500" />
                  Visi
                </h4>
                <p className="text-gray-600 pl-8">"Terwujudnya Desa Kajongan yang Maju, Mandiri, Berbudaya, dan Sejahtera Berlandaskan Iman dan Taqwa."</p>
              </div>
              <div>
                <h4 className="flex items-center text-lg font-semibold text-gray-700">
                  <FaCheckCircle className="mr-3 text-cyan-500" />
                  Misi
                </h4>
                <ul className="list-disc list-inside text-gray-600 pl-8 space-y-1">
                  <li>Meningkatkan kualitas pelayanan publik yang cepat dan transparan.</li>
                  <li>Mengembangkan potensi ekonomi lokal melalui UMKM dan pertanian.</li>
                  <li>Meningkatkan kualitas sumber daya manusia melalui pendidikan.</li>
                  <li>Melestarikan budaya dan kearifan lokal.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Data Kunci Demografi */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Data Desa Dalam Angka</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard icon={<FaUsers size={40} />} label="Jumlah Penduduk" value="3,450 Jiwa" />
            <StatCard icon={<FaUsers size={40} />} label="Kepala Keluarga" value="980 KK" />
            <StatCard icon={<FaMapMarkedAlt size={40} />} label="Luas Wilayah" value="250 Ha" />
            <StatCard icon={<FaUsers size={40} />} label="Jumlah Dusun" value="4 Dusun" />
          </div>
        </section>

        {/* 5. Peta Wilayah */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Peta Wilayah Desa Kajongan</h2>
          <div className="rounded-lg shadow-lg overflow-hidden">
            {/* Ganti `src` dengan embed Google Maps Desa Kajongan yang benar */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15841.569472691762!2d109.6384286782836!3d-7.009367464057077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fe23687353995%3A0x5027a76e3564530!2sKajen%2C%20Kec.%20Kajen%2C%20Kabupaten%20Pekalongan%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1660123456789!5m2!1sid!2sid"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta Desa Kajongan"
            ></iframe>
          </div>
        </section>
      </main>
    </div>
  );
}