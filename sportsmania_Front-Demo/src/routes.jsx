import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ClientePage from './pages/cliente/ClientePage';
import FornecedorPage from './pages/fornecedor/FornecedorPage';
import EntradaPage from './pages/entradas/EntradaPage';
import ProdutoPage from './pages/produtos/ProdutoPage';

const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/clientes" element={<ClientePage />} />
        <Route path="/fornecedores" element={<FornecedorPage />} />
        <Route path="/entradas" element={<EntradaPage />} />
        <Route path="/produtos" element={<ProdutoPage />} />
        <Route path="/" element={<ClientePage />} /> {/* Rota padrão */}
      </Routes>
    );
};

export default AppRoutes;
