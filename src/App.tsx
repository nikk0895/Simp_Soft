import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import AboutUs from './pages/AboutUs';
import UserProfile from './pages/UserProfile';
import Dashboard from './pages/Dashboard';
import { useState } from 'react';

function App() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  return (
    <>
      <Header onMenuClick={() => setDrawerOpen(true)} />
      <Sidebar open={isDrawerOpen} onClose={() => setDrawerOpen(false)} />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
