// Sidebar.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faCubes, faUsers, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // Importando o Link
import './styles.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/clientes"><FontAwesomeIcon icon={faBox} /></Link>
      <Link to="/fornecedores"><FontAwesomeIcon icon={faCubes} /></Link>
      <Link to="/entradas"><FontAwesomeIcon icon={faUsers} /></Link>
      <Link to="/produtos"><FontAwesomeIcon icon={faChartLine} /></Link>
    </div>
  );
}

export default Sidebar;
