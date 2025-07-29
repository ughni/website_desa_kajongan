import KegiatanPengumuman from "../components/Event";
import HeroSection from "../components/HeroSection";
import HeroRT from "../components/IzinAdmin";
import ProfilDesa from "../components/ProfilDesa";
import StrukturPerangkatDesa from "../components/StrukturJabatan";

export default function Home() {
  return (
    <section className=" text-center">
      <HeroSection />
      <ProfilDesa />
      <KegiatanPengumuman />
      <StrukturPerangkatDesa />

      <HeroRT />

      {/* <h2 className="text-2xl font-bold mb-4">Selamat Datang di RT Online</h2>
      <p className="mb-6">Layanan praktis untuk warga dari muda hingga orang tua. Ajukan surat, cek info kegiatan, dan terhubung dengan pengurus RT tanpa ribet.</p>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <a href="/ajukan" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Ajukan Surat</a>
        <a href="/admin" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Masuk Admin</a>
      </div> */}
    </section>
  );
}
