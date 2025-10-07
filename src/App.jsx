// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Servicos from './pages/Servicos';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';

export default function App() {
  return (
    <div className="bg-slate-100 min-h-screen flex flex-col font-sans">
      <Header />

      <main className="container mx-auto p-4 md:p-8 flex-grow">
        <Routes>
          <Route path="/BLOG_REACT" element={<Home />} />
          <Route path="/BLOG_REACT/sobre" element={<Sobre />} />
          <Route path="/BLOG_REACT/servicos" element={<Servicos />} />
          <Route path="/BLOG_REACT/contato" element={<Contato />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}