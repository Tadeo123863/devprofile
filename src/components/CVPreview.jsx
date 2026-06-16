import React from 'react';
import { useData } from '../contexts/DataContext';

const CVPreview = () => {
  const { personal, skills, projects, education, experience } = useData();
  return (
    <div className="card">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {personal.imagen && <img src={personal.imagen} alt="perfil" style={{ width: 100, height: 100, borderRadius: '50%', objectFit: 'cover' }} />}
        <div>
          <h1>{personal.nombre || 'Tu nombre'}</h1>
          <h3>{personal.profesion}</h3>
          <p>{personal.ubicacion} | {personal.email} | {personal.telefono}</p>
        </div>
      </div>
      <p>{personal.descripcion}</p>
      <div>
        <h3>Enlaces</h3>
        {personal.enlaces.map((e, i) => <a href={enlace.url} target="_blank" rel="noreferrer">{enlace.nombre}</a>}
      </div>
      <h3>Habilidades</h3>
      <ul>{skills.map(s => <li key={s.id}>{s.nombre} - {s.nivel}</li>)}</ul>
      <h3>Proyectos</h3>
      {projects.map(p => <div key={p.id}><strong>{p.nombre}</strong><p>{p.descripcion}</p><em>{p.tecnologias}</em></div>)}
      <h3>Educación</h3>
      {education.map(e => <div key={e.id}><strong>{e.programa}</strong> - {e.institucion} ({e.periodo})<p>{e.descripcion}</p></div>)}
      <h3>Experiencia</h3>
      {experience.map(e => <div key={e.id}><strong>{e.puesto}</strong> en {e.empresa} ({e.periodo})<p>{e.descripcion}</p></div>)}
    </div>
  );
};

export default CVPreview;
