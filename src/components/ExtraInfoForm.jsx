import React, { useState } from 'react';
import { useData } from '../contexts/DataContext';

const ExtraInfoForm = () => {
  const { addExperience } = useData();
  const [exp, setExp] = useState({ puesto: '', empresa: '', periodo: '', descripcion: '', tecnologias: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!exp.puesto || !exp.empresa) return alert('Puesto y empresa obligatorios');
    addExperience({ ...exp, id: Date.now() });
    setExp({ puesto: '', empresa: '', periodo: '', descripcion: '', tecnologias: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Puesto" value={exp.puesto} onChange={e => setExp({...exp, puesto: e.target.value})} />
      <input placeholder="Empresa / Institución" value={exp.empresa} onChange={e => setExp({...exp, empresa: e.target.value})} />
      <input placeholder="Periodo" value={exp.periodo} onChange={e => setExp({...exp, periodo: e.target.value})} />
      <textarea placeholder="Descripción de actividades" value={exp.descripcion} onChange={e => setExp({...exp, descripcion: e.target.value})} />
      <input placeholder="Tecnologías aplicadas" value={exp.tecnologias} onChange={e => setExp({...exp, tecnologias: e.target.value})} />
      <button type="submit">Agregar experiencia</button>
    </form>
  );
};

export default ExtraInfoForm;