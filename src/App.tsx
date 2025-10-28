import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'; 
import Cardapio from './pages/Cardapio'; 
import Carrinho from './pages/Carrinho';
import Contato from './pages/Contato';
import Endereco from './pages/Endereco'; 
import Historico from './pages/Historico'; // 📌 importar a página de histórico

export default function App() {
  return (
    <BrowserRouter>
      <div className='flex flex-col min-h-screen'>
        <Header />
        <main className='flex-grow container mx-auto p-4'>
          <Routes>
            <Route path='/' element={<Cardapio />} />
            <Route path='/carrinho' element={<Carrinho />} />
            <Route path='/historico' element={<Historico />} /> {/* 📌 nova rota */}
            <Route path='/contato' element={<Contato />} />
            <Route path='/endereco' element={<Endereco />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
