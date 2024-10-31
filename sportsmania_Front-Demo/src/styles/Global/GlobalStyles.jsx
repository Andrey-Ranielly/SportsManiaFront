import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import './styles.css';

function GlobalStyles({ title, children }) {
  return (
    <div>
      <Navbar title={title} />
      <Sidebar />
      <div className="content">
        {children}
      </div>
    </div>
  );
}

export default GlobalStyles;
