// App.js ou index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes'; // Ajuste o caminho se necessário
import Sidebar from './styles/Global/Sidebar'; // Ajuste o caminho se necessário

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Sidebar />
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
