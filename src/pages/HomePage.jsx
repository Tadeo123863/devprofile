import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="card" style={{ textAlign: 'center' }}>
      <h1>DevProfile</h1>
      <p>Generador dinámico de CV profesional en PDF</p>
      <p>Crea, edita y exporta tu CV con un diseño moderno.</p>
      <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <Link to="/editor"><button>📝 Editar CV</button></Link>
        <Link to="/preview"><button>👁️ Previsualizar</button></Link>
        <Link to="/dashboard"><button>📊 Dashboard</button></Link>
      </div>
    </div>
  );
};

export default HomePage;