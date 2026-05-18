import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import ReaderLayout from '../layouts/ReaderLayout';

// Pages
import Home from '../pages/Home';
import About from '../pages/About';
import Ebooks from '../pages/Ebooks';
import Reader from '../pages/Reader';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Standard Pages wrapped with Navbar & Footer */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ebooks" element={<Ebooks />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      {/* Distraction-free Reader Layout */}
      <Route element={<ReaderLayout />}>
        <Route path="/reader/:bookId" element={<Reader />} />
      </Route>
    </Routes>
  );
}