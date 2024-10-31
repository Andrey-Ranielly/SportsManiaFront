// EntradaPage.jsx
import React from 'react';
import GlobalStyles from '../../styles/Global/GlobalStyles';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { FiFilter } from 'react-icons/fi';
import './styles.css';

const entradas = [
  {
    id: 1,
    produto: 'Tênis Esportivo',
    quantidade: 50,
    fornecedor: 'Fornecedor A',
    dataEmissao: '01/10/2024',
    dataEntrada: '05/10/2024',
    notaFiscal: '123456',
    valorNota: 'R$ 5,000.00',
    acrescimos: 'R$ 100.00',
    descontos: 'R$ 50.00'
  },
  {
    id: 2,
    produto: 'Camiseta Esportiva',
    quantidade: 30,
    fornecedor: 'Fornecedor B',
    dataEmissao: '02/10/2024',
    dataEntrada: '06/10/2024',
    notaFiscal: '123457',
    valorNota: 'R$ 1,500.00',
    acrescimos: 'R$ 30.00',
    descontos: 'R$ 10.00'
  },
  // Adicione mais entradas conforme necessário
];

function EntradaPage() {
  return (
    <GlobalStyles title="Controle de Estoque - Entrada">
      <h2 className="content-title">Entradas</h2>
      <div className="breadcrumb">
        <a href="#" className="breadcrumb-link">Página inicial</a> /
        <a href="#" className="breadcrumb-link">Entradas de Estoque</a>
      </div>

      {/* Toolbar com Filtro e Adicionar */}
      <div className="toolbar">
        <button className="filter-btn">
          <FiFilter size={18} /> Filtrar
        </button>
        <button className="add-btn">
          <AiOutlinePlusCircle size={18} /> Adicionar Entrada
        </button>
      </div>

      {/* Tabela de Entradas */}
      <div className="content">
        <table className="table">
          <thead>
            <tr>
            <th>Id</th>
              <th>Produto</th>
              <th>Quantidade</th>
              <th>Fornecedor</th>
              <th>Data Emissão</th>
              <th>Data Entrada</th>
              <th>Nota Fiscal</th>
              <th>Valor Nota</th>
              <th>Acréscimos (+)</th>
              <th>Descontos (-)</th>
            </tr>
          </thead>
          <tbody>
            {entradas.map((entrada, index) => (
              <tr key={index}>

                <td>{entrada.produto}</td>
                <td>{entrada.quantidade}</td>
                <td>{entrada.fornecedor}</td>
                <td>{entrada.dataEmissao}</td>
                <td>{entrada.dataEntrada}</td>
                <td>{entrada.notaFiscal}</td>
                <td>{entrada.valorNota}</td>
                <td>{entrada.acrescimos}</td>
                <td>{entrada.descontos}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </GlobalStyles>
  );
}

export default EntradaPage;
