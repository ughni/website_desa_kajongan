import AppRoutes from './Routes/AppRoutes';
import Navbar from './Components/NavbarComponent';
import Footer from './Components/FooterComponent';

function App() {
  return (
    <div>
      <Navbar />
      <AppRoutes />
      <Footer/>
    </div>
  );
}

export default App;