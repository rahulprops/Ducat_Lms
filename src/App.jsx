import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './pages/HeroSection.jsx';
import FacutlyDashboard from './pages/FacutlyDashboard';
import ToggleRegister from './pages/ToggleRegister';
import AdminRegiseter from './components/admin/AdminRegiseter';
import AdminDashboard from './components/admin/AdminDashboard.jsx';
import AdminLogin from './components/admin/AdminLogin.jsx';
import About from './pages/About.jsx';
import Content from './pages/Content.jsx';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/dashboard" element={<FacutlyDashboard />} />
        <Route path="/register" element={<ToggleRegister />} />
        <Route path="/adminregister" element={<AdminRegiseter />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/about" element={<About />} />
        <Route path="/content" element={<Content />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
