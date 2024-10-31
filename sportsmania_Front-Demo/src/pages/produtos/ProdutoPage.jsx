// ProdutoPage.jsx
import React from 'react';
import GlobalStyles from '../../styles/Global/GlobalStyles';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { FiFilter } from 'react-icons/fi';
import './styles.css';

const produtos = [
  {
    id: 1,
    nome: 'Tênis Esportivo',
    categoria: 'Calçados',
    quantidade: 50,
    estoque: 30,
    compra: 150.00,
    venda: 250.00,
    lucro: '66.67%',
    foto: 'https://via.placeholder.com/50' // Substitua pelo caminho da sua imagem
  },
  {
    id: 2,
    nome: 'Camiseta Esportiva',
    categoria: 'Vestuário',
    quantidade: 100,
    estoque: 80,
    compra: 30.00,
    venda: 60.00,
    lucro: '100%',
    foto: 'https://via.placeholder.com/50' // Substitua pelo caminho da sua imagem
  },
  // Adicione mais produtos conforme necessário
];

function ProdutoPage() {
    return (
      <GlobalStyles title="Controle de Estoque - Produto">
        <h2 className="content-title">Produtos</h2>
        <div className="breadcrumb">
          <a href="#" className="breadcrumb-link">Página inicial</a> /
          <a href="#" className="breadcrumb-link">Cadastra Produto</a>
        </div>

        {/* Toolbar com Filtro e Adicionar */}
        <div className="toolbar">
          <button className="filter-btn">
            <FiFilter size={18} /> Filtrar
          </button>
          <button className="add-btn">
            <AiOutlinePlusCircle size={18} /> Adicionar Produto
          </button>
        </div>

        {/* Tabela de Produtos */}
        <div className="content">
          <table className="table">
            <thead>
              <tr>
                <th>Foto</th>
                <th>ID</th>
                <th>Nome</th>
                <th>Categoria</th>
                <th>Quantidade</th>
                <th>Estoque</th>
                <th>Compra</th>
                <th>Venda</th>
                <th>Lucro (%)</th>
              </tr>
            </thead>
            <tbody>
              {produtos.map((produto) => (
                <tr key={produto.id}>
                  <td><img src={produto.foto} alt={produto.nome} className="product-image" /></td>
                  <td>{produto.id}</td>
                  <td>{produto.nome}</td>
                  <td>{produto.categoria}</td>
                  <td>{produto.quantidade}</td>
                  <td>{produto.estoque}</td>
                  <td>R$ {produto.compra.toFixed(2)}</td>
                  <td>R$ {produto.venda.toFixed(2)}</td>
                  <td>{produto.lucro}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlobalStyles>
    );
}

export default ProdutoPage;
