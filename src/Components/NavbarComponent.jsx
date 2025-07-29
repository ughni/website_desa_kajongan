import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import ikon hamburger & close

// Kita akan menerima props untuk status login dan fungsi logout
export default function Navbar({ isAuthenticated, onLogout }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Style untuk link NavLink yang aktif dan tidak aktif
  const linkStyles = "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300";
  const activeLinkStyles = "bg-cyan-500 text-white";
  const inactiveLinkStyles = "text-gray-300 hover:bg-gray-700 hover:text-white";

  // Fungsi untuk handle NavLink active state
  const getNavLinkClass = ({ isActive }) => 
    `${linkStyles} ${isActive ? activeLinkStyles : inactiveLinkStyles}`;

  // Kumpulan link untuk ditampilkan
  const navLinks = (
    <>
      <NavLink to="/" className={getNavLinkClass} onClick={() => setIsMenuOpen(false)}>
        Beranda
      </NavLink>
      <NavLink to="/ajukan" className={getNavLinkClass} onClick={() => setIsMenuOpen(false)}>
        Ajukan Surat
      </NavLink>
      {isAuthenticated && (
        <NavLink to="/admin" className={getNavLinkClass} onClick={() => setIsMenuOpen(false)}>
          Admin
        </NavLink>
      )}
    </>
  );

  return (
    <nav className="bg-gray-800 text-white shadow-lg sticky top-0 z-50">
      {/* Container utama navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo/Branding */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors">
              Desa Kajongan
            </NavLink>
          </div>

          {/* Menu untuk Desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks}
              {isAuthenticated ? (
                <button
                  onClick={() => {
                    onLogout();
                    setIsMenuOpen(false);
                  }}
                  className={`${linkStyles} ${inactiveLinkStyles} bg-red-600 hover:bg-red-700`}
                >
                  Logout
                </button>
              ) : (
                <div className="flex items-baseline space-x-2">
                   <NavLink to="/register" className={getNavLinkClass}>
                    Register
                  </NavLink>
                  <NavLink to="/login" className={`${linkStyles} bg-cyan-500 text-white hover:bg-cyan-600`}>
                    Login
                  </NavLink>
                </div>
              )}
            </div>
          </div>

          {/* Tombol Hamburger untuk Mobile */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Panel Menu Mobile (muncul saat hamburger diklik) */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
            {navLinks}
             {isAuthenticated ? (
                <button
                  onClick={() => {
                    onLogout();
                    setIsMenuOpen(false);
                  }}
                  className={`${linkStyles} ${inactiveLinkStyles} text-left bg-red-600 hover:bg-red-700`}
                >
                  Logout
                </button>
              ) : (
                <>
                  <NavLink to="/register" className={getNavLinkClass}>
                    Register
                  </NavLink>
                  <NavLink to="/login" className={getNavLinkClass}>
                    Login
                  </NavLink>
                </>
              )}
          </div>
        </div>
      )}
    </nav>
  );
}