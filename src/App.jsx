import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './pages/HeroSection.jsx';
import FacutlyDashboard from './pages/FacutlyDashboard';
import ToggleRegister from './pages/ToggleRegister';
import AdminRegiseter from './components/admin/AdminRegiseter';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/dashboard" element={<FacutlyDashboard />} />
        <Route path="/register" element={<ToggleRegister />} />
        <Route path="/adminregister" element={<AdminRegiseter />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
