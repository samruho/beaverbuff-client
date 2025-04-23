import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Admin from './pages/Admin';
import AdminWidget from './components/AdminWidget';

function App() {

  return (
    <Router>
      <Header></Header>
      <AdminWidget />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer></Footer>
    </Router>
  )
}

export default App
