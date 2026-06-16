import React, { createContext, useState, useContext, useEffect } from 'react';
import localforage from 'localforage';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [personal, setPersonal] = useState({
    nombre: '',
    profesion: '',
    ubicacion: '',
    email: '',
    telefono: '',
    descripcion: '',
    enlaces: [], // { nombre, url }
    imagen: '', // base64 o url
  });
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]); // o idiomas

  // Cargar datos al iniciar
  useEffect(() => {
    const loadData = async () => {
      const stored = await localforage.getItem('devprofile_data');
      if (stored) {
        setPersonal(stored.personal || personal);
        setSkills(stored.skills || []);
        setProjects(stored.projects || []);
        setEducation(stored.education || []);
        setExperience(stored.experience || []);
      }
    };
    loadData();
  }, []);

  // Guardar cada vez que cambia algo
  useEffect(() => {
    const saveData = async () => {
      await localforage.setItem('devprofile_data', {
        personal, skills, projects, education, experience
      });
    };
    saveData();
  }, [personal, skills, projects, education, experience]);

  const updatePersonal = (newPersonal) => setPersonal(newPersonal);
  const addSkill = (skill) => setSkills([...skills, skill]);
  const updateSkill = (index, skill) => {
    const updated = [...skills];
    updated[index] = skill;
    setSkills(updated);
  };
  const deleteSkill = (index) => setSkills(skills.filter((_, i) => i !== index));
  
  const addProject = (project) => setProjects([...projects, project]);
  const updateProject = (index, project) => {
    const updated = [...projects];
    updated[index] = project;
    setProjects(updated);
  };
  const deleteProject = (index) => setProjects(projects.filter((_, i) => i !== index));

  const addEducation = (edu) => setEducation([...education, edu]);
  const updateEducation = (index, edu) => {
    const updated = [...education];
    updated[index] = edu;
    setEducation(updated);
  };
  const deleteEducation = (index) => setEducation(education.filter((_, i) => i !== index));

  const addExperience = (exp) => setExperience([...experience, exp]);
  const updateExperience = (index, exp) => {
    const updated = [...experience];
    updated[index] = exp;
    setExperience(updated);
  };
  const deleteExperience = (index) => setExperience(experience.filter((_, i) => i !== index));

  return (
    <DataContext.Provider value={{
      personal, updatePersonal,
      skills, addSkill, updateSkill, deleteSkill,
      projects, addProject, updateProject, deleteProject,
      education, addEducation, updateEducation, deleteEducation,
      experience, addExperience, updateExperience, deleteExperience
    }}>
      {children}
    </DataContext.Provider>
  );
};