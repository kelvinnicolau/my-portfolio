import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, useLocation } from 'react-router-dom';
import App from './App';
import './index.css';
import ReactGA from 'react-ga4';

// Inicializa o Google Analytics
ReactGA.initialize('G-QPLKYPHRSZ'); // Substitua pelo seu ID de acompanhamento

// Componente para rastrear mudanças de rota
const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: location.pathname });
  }, [location]);

  return null;
};

// Componente principal com o rastreamento
const MainApp = () => (
  <BrowserRouter>
    <AnalyticsTracker />
    <App />
  </BrowserRouter>
);

ReactDOM.render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>,
  document.getElementById('root')
);
