import React, { useState } from 'react';
import { useData } from '../contexts/DataContext';

const SkillForm = () => {
  const { addSkill, skills } = useData();
  const [skill, setSkill] = useState({ nombre: '', categoria: 'Programación', nivel: 'Intermedio', descripcion: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!skill.nombre.trim()) {
      setError('El nombre es obligatorio');
      return;
    }
    if (skills.some(s => s.nombre.toLowerCase() === skill.nombre.toLowerCase())) {
      setError('Habilidad duplicada');
      return;
    }
    addSkill({ ...skill, id: Date.now() });
    setSkill({ nombre: '', categoria: 'Programación', nivel: 'Intermedio', descripcion: '' });
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Agregar habilidad</h3>
      <input placeholder="Nombre" value={skill.nombre} onChange={e => setSkill({...skill, nombre: e.target.value})} />
      <select value={skill.categoria} onChange={e => setSkill({...skill, categoria: e.target.value})}>
        <option>Programación</option><option>Bases de datos</option><option>Diseño web</option>
        <option>Idiomas</option><option>Herramientas</option><option>Habilidades blandas</option>
      </select>
      <select value={skill.nivel} onChange={e => setSkill({...skill, nivel: e.target.value})}>
        <option>Básico</option><option>Intermedio</option><option>Avanzado</option>
      </select>
      <textarea placeholder="Descripción breve" value={skill.descripcion} onChange={e => setSkill({...skill, descripcion: e.target.value})} />
      {error && <div className="error">{error}</div>}
      <button type="submit">Agregar habilidad</button>
    </form>
  );
};

export default SkillForm;