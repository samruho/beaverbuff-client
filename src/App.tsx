import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Admin from './pages/Admin';
import AdminWidget from './components/AdminWidget';
import Coupe from './pages/Coupe';
import Sedan from './pages/Sedan';
import SUV from './pages/SUV';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <AdminWidget />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/coupe" element={<Coupe />} />
            <Route path="/sedan" element={<Sedan />} />
            <Route path="/SUV" element={<SUV />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}


export default App
