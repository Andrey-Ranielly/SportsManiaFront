// FornecedorPage.jsx
import React from 'react';
import GlobalStyles from '../../styles/Global/GlobalStyles';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { FiFilter } from 'react-icons/fi';
import './styles.css';

const fornecedores = [
  { id: 1201, nome: 'Fornecedor A', contato: '(11)912345678', endereco: 'Avenida Principal - Centro', categoria: 'Equipamentos' },
  { id: 1202, nome: 'Fornecedor B', contato: '(11)987654321', endereco: 'Rua Secundária - Centro', categoria: 'Uniformes' },
  { id: 1203, nome: 'Fornecedor C', contato: '(11)912356789', endereco: 'Praça dos Esportes - Zona Leste', categoria: 'Calçados' },
  { id: 1204, nome: 'Fornecedor D', contato: '(11)934567890', endereco: 'Avenida dos Atletas - Zona Oeste', categoria: 'Acessórios' },
  { id: 1205, nome: 'Fornecedor E', contato: '(11)923456789', endereco: 'Rua dos Campeões - Zona Norte', categoria: 'Suplementos' },
];

function FornecedorPage() {
  return (
    <GlobalStyles title="Controle de Estoque - Dados Fornecedor">
      <h2 className="content-title">Dados Fornecedor</h2>
      <div className="breadcrumb">
        <a href="#" className="breadcrumb-link">Página inicial</a> /
        <a href="#" className="breadcrumb-link">Cadastro Fornecedor</a>
      </div>

      {/* Toolbar com Filtro e Adicionar */}
      <div className="toolbar">
        <button className="filter-btn">
          <FiFilter size={18} /> Filtrar
        </button>
        <button className="add-btn">
          <AiOutlinePlusCircle size={18} /> Adicionar Fornecedor
        </button>
      </div>

      {/* Tabela de Fornecedores */}
      <div className="content">
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nome</th>
              <th>Contato</th>
              <th>Endereço</th>
              <th>Categoria</th>
            </tr>
          </thead>
          <tbody>
            {fornecedores.map((fornecedor) => (
              <tr key={fornecedor.id}>
                <td>{fornecedor.id}</td>
                <td>{fornecedor.nome}</td>
                <td>{fornecedor.contato}</td>
                <td>{fornecedor.endereco}</td>
                <td>{fornecedor.categoria}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </GlobalStyles>
  );
}

export default FornecedorPage;
