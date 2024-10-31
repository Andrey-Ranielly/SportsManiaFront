// ClientePage.jsx
import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { FiFilter } from 'react-icons/fi';
import GlobalStyles from '../../styles/Global/GlobalStyles';
import './styles.css';


const clientes = [
  { id: 7312, nome: 'Flávio José', contato: '(11) 98377-5623', endereco: 'Rua Dois Unidos - Jaguaribe', categoria: 'Basquete' },
  { id: 7313, nome: 'João Gomes', contato: '(11) 98344-5623', endereco: 'Rua Dois Unidos - Jaguaribe', categoria: 'Basquete' },
  { id: 7311, nome: 'Silvanno Salles', contato: '(11) 98344-5993', endereco: 'Rua Dois Unidos - Jaguaribe', categoria: 'Basquete' },
  { id: 7352, nome: 'Kelvis Duran', contato: '(11) 98347-3423', endereco: 'Rua Dois Unidos - Jaguaribe', categoria: 'Basquete' },
  { id: 7392, nome: 'Henry Freitas', contato: '(11) 98312-2623', endereco: 'Rua Dois Unidos - Jaguaribe', categoria: 'Basquete' },
  { id: 7372, nome: 'Mari Fernandes', contato: '(11) 98344-5003', endereco: 'Rua Dois Unidos - Jaguaribe', categoria: 'Basquete' },
];

function ClientePage() {
  return (
    <GlobalStyles title="Controle de Estoque - Dados Cliente">
      <h2 className="content-title">Dados Cliente</h2>
      <div className="breadcrumb">
        <a href="#" className="breadcrumb-link">Página inicial</a> /
        <a href="#" className="breadcrumb-link">Cadastro Cliente</a>
      </div>

      {/* Toolbar com Filtro e Adicionar */}
      <div className="toolbar">
        <button className="filter-btn">
          <FiFilter size={18} /> Filtrar
        </button>
        <button className="add-btn">
          <AiOutlinePlusCircle size={18} /> Adicionar Cliente
        </button>
      </div>

      {/* Tabela de Clientes */}
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
            {clientes.map((cliente) => (
              <tr key={cliente.id}>
                <td>{cliente.id}</td>
                <td>{cliente.nome}</td>
                <td>{cliente.contato}</td>
                <td>{cliente.endereco}</td>
                <td>{cliente.categoria}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </GlobalStyles>
  );
}

export default ClientePage;
