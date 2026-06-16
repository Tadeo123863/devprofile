import React, { useState } from 'react';
import { useData } from '../contexts/DataContext';

const EducationForm = () => {
  const { addEducation } = useData();
  const [edu, setEdu] = useState({ institucion: '', programa: '', periodo: '', descripcion: '', enlace: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!edu.institucion || !edu.programa) return setError('Institución y programa son obligatorios');
    addEducation({ ...edu, id: Date.now() });
    setEdu({ institucion: '', programa: '', periodo: '', descripcion: '', enlace: '' });
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Institución" value={edu.institucion} onChange={e => setEdu({...edu, institucion: e.target.value})} />
      <input placeholder="Programa / Curso" value={edu.programa} onChange={e => setEdu({...edu, programa: e.target.value})} />
      <input placeholder="Periodo (ej: 2020-2024)" value={edu.periodo} onChange={e => setEdu({...edu, periodo: e.target.value})} />
      <textarea placeholder="Descripción" value={edu.descripcion} onChange={e => setEdu({...edu, descripcion: e.target.value})} />
      <input placeholder="Enlace evidencia (opcional)" value={edu.enlace} onChange={e => setEdu({...edu, enlace: e.target.value})} />
      {error && <div className="error">{error}</div>}
      <button type="submit">Agregar educación</button>
    </form>
  );
};

export default EducationForm;