import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function HeroSection() {
  // Variasi animasi
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <section 
      className="relative flex items-center justify-center text-white bg-cover bg-center"
      style={{
        height: 'calc(100vh - 4rem)',
        backgroundImage: "url('https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
      }}
    >
      {/* Lapisan overlay gelap dengan animasi fade in */}
      <motion.div 
        className="absolute inset-0 bg-black bg-opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
      />

      {/* Konten Teks dan Tombol dengan animasi bertahap */}
      <motion.div 
        className="relative z-10 text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight"
          variants={itemVariants}
        >
          Selamat Datang di Desa Kajongan
        </motion.h1>
        
        <motion.p 
          className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-200"
          variants={itemVariants}
        >
          Temukan informasi terbaru, layanan publik, dan jelajahi potensi desa kami langsung dari genggaman Anda.
        </motion.p>

        {/* Tombol Aksi dengan animasi spring */}
        <motion.div 
          className="mt-8 flex flex-col sm:flex-row sm:justify-center gap-4"
          variants={buttonVariants}
        >
          <Link
            to="/ajukan"
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors shadow-lg"
          >
            Ajukan Surat
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}