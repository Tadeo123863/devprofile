import React from 'react';
import { useData } from '../contexts/DataContext';

const ProjectCard = ({ project, index }) => {
  const { deleteProject } = useData();
  return (
    <div className="card">
      <h3>{project.nombre}</h3>
      <p>{project.descripcion}</p>
      <p>Tecnologías: {project.tecnologias}</p>
      {project.repo && <a href={project.repo} target="_blank">Repositorio</a>}
      {project.deploy && <a href={project.deploy} target="_blank">Deploy</a>}
      <button onClick={() => deleteProject(index)}>Eliminar</button>
    </div>
  );
};

export default ProjectCard;