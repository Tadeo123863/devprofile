import React from 'react';
import { useData } from '../contexts/DataContext';

const SkillCard = ({ skill, index }) => {
  const { deleteSkill } = useData();
  return (
    <div className="card">
      <h3>{skill.nombre}</h3>
      <p>Categoría: {skill.categoria}</p>
      <p>Nivel: {skill.nivel}</p>
      <p>{skill.descripcion}</p>
      <button onClick={() => deleteSkill(index)}>Eliminar</button>
    </div>
  );
};

export default SkillCard;