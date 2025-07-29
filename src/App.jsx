import AppRoutes from './routes/appRoutes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

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