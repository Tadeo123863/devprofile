import React from 'react';
import SkillsChart from '../components/SkillsChart';
import { useData } from '../contexts/DataContext';

const DashboardPage = () => {
  const { skills, projects, education, experience } = useData();
  return (
    <div>
      <h1>Dashboard</h1>
      <div className="card">
        <h3>Resumen</h3>
        <p>Habilidades: {skills.length}</p>
        <p>Proyectos: {projects.length}</p>
        <p>Educación: {education.length}</p>
        <p>Experiencia: {experience.length}</p>
      </div>
      <div className="card">
        <h2>Gráfica de habilidades por categoría</h2>
        <SkillsChart />
      </div>
    </div>
  );
};

export default DashboardPage;