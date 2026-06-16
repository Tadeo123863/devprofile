import React, { useState } from 'react';
import { useData } from '../contexts/DataContext';

const ProjectForm = () => {
  const { addProject, projects } = useData();
  const [project, setProject] = useState({ nombre: '', descripcion: '', tecnologias: '', repo: '', deploy: '', imagen: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!project.nombre.trim()) return setError('Nombre obligatorio');
    if (projects.some(p => p.nombre === project.nombre)) return setError('Proyecto duplicado');
    if ((project.repo && !/^https?:\/\//.test(project.repo)) || (project.deploy && !/^https?:\/\//.test(project.deploy)))
      return setError('URL inválida');
    addProject({ ...project, id: Date.now() });
    setProject({ nombre: '', descripcion: '', tecnologias: '', repo: '', deploy: '', imagen: '' });
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Nombre" value={project.nombre} onChange={e => setProject({...project, nombre: e.target.value})} />
      <textarea placeholder="Descripción" value={project.descripcion} onChange={e => setProject({...project, descripcion: e.target.value})} />
      <input placeholder="Tecnologías" value={project.tecnologias} onChange={e => setProject({...project, tecnologias: e.target.value})} />
      <input placeholder="URL repositorio" value={project.repo} onChange={e => setProject({...project, repo: e.target.value})} />
      <input placeholder="URL deploy" value={project.deploy} onChange={e => setProject({...project, deploy: e.target.value})} />
      <input placeholder="Imagen (URL)" value={project.imagen} onChange={e => setProject({...project, imagen: e.target.value})} />
      {error && <div className="error">{error}</div>}
      <button type="submit">Agregar proyecto</button>
    </form>
  );
};

export default ProjectForm;