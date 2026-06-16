import React from 'react';
import PersonalForm from '../components/PersonalForm';
import SkillForm from '../components/SkillForm';
import SkillCard from '../components/SkillCard';
import ProjectForm from '../components/ProjectForm';
import ProjectCard from '../components/ProjectCard';
import EducationForm from '../components/EducationForm';
import ExtraInfoForm from '../components/ExtraInfoForm';
import { useData } from '../contexts/DataContext';

const EditorPage = () => {
  const { skills, projects, education, experience } = useData();

  return (
    <div>
      <h1>Editor de CV</h1>
      <PersonalForm />
      
      <div className="card">
        <h2>Habilidades</h2>
        <SkillForm />
        <div className="grid-2">
          {skills.map((skill, idx) => (
            <SkillCard key={idx} skill={skill} index={idx} />
          ))}
        </div>
      </div>

      <div className="card">
        <h2>Proyectos</h2>
        <ProjectForm />
        <div className="grid-2">
          {projects.map((proj, idx) => (
            <ProjectCard key={idx} project={proj} index={idx} />
          ))}
        </div>
      </div>

      <div className="card">
        <h2>Educación / Certificaciones</h2>
        <EducationForm />
        <div className="grid-2">
          {education.map((edu, idx) => (
            <div key={idx} className="card">
              <h3>{edu.programa}</h3>
              <p>{edu.institucion}</p>
              <p>{edu.periodo}</p>
              <button onClick={() => {
                // implementar edición
              }}>Editar</button>
              <button onClick={() => {
                // implementar eliminar (se puede hacer con contexto)
              }}>Eliminar</button>
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <h2>Experiencia / Idiomas</h2>
        <ExtraInfoForm />
        <div className="grid-2">
          {experience.map((exp, idx) => (
            <div key={idx} className="card">
              <h3>{exp.puesto || exp.idioma}</h3>
              <p>{exp.empresa || exp.nivel}</p>
              <button>Editar</button>
              <button>Eliminar</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EditorPage;