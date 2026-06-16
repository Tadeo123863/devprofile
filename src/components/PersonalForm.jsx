import React, { useState } from 'react';
import { useData } from '../contexts/DataContext';

const PersonalForm = () => {
  const { personal, updatePersonal } = useData();
  const [formData, setFormData] = useState(personal);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEnlaceChange = (idx, field, value) => {
    const nuevos = [...formData.enlaces];
    nuevos[idx][field] = value;
    setFormData({ ...formData, enlaces: nuevos });
  };

  const addEnlace = () => {
    setFormData({
      ...formData,
      enlaces: [...formData.enlaces, { nombre: '', url: '' }]
    });
  };

  const removeEnlace = (idx) => {
    const nuevos = formData.enlaces.filter((_, i) => i !== idx);
    setFormData({ ...formData, enlaces: nuevos });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, imagen: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.nombre.trim()) newErrors.nombre = 'Nombre obligatorio';
    if (!formData.email.trim()) newErrors.email = 'Email obligatorio';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email inválido';
    if (formData.enlaces.some(e => e.url && !/^https?:\/\/\S+$/.test(e.url)))
      newErrors.enlaces = 'URL inválida';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      updatePersonal(formData);
      alert('Datos personales guardados');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card">
      <h2>Datos Personales</h2>
      <input name="nombre" placeholder="Nombre completo" value={formData.nombre} onChange={handleChange} />
      {errors.nombre && <div className="error">{errors.nombre}</div>}
      <input name="profesion" placeholder="Profesión" value={formData.profesion} onChange={handleChange} />
      <input name="ubicacion" placeholder="Ubicación" value={formData.ubicacion} onChange={handleChange} />
      <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      {errors.email && <div className="error">{errors.email}</div>}
      <input name="telefono" placeholder="Teléfono" value={formData.telefono} onChange={handleChange} />
      <textarea name="descripcion" placeholder="Perfil profesional" value={formData.descripcion} onChange={handleChange} rows="3"></textarea>
      
      <h3>Enlaces profesionales</h3>
      {formData.enlaces.map((enl, idx) => (
        <div key={idx}>
          <input placeholder="Nombre (GitHub, LinkedIn...)" value={enl.nombre} onChange={e => handleEnlaceChange(idx, 'nombre', e.target.value)} />
          <input placeholder="URL" value={enl.url} onChange={e => handleEnlaceChange(idx, 'url', e.target.value)} />
          <button type="button" onClick={() => removeEnlace(idx)}>Eliminar enlace</button>
        </div>
      ))}
      <button type="button" onClick={addEnlace}>+ Agregar enlace</button>
      {errors.enlaces && <div className="error">{errors.enlaces}</div>}

      <h3>Imagen de perfil</h3>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <input placeholder="O URL de imagen" value={formData.imagen} onChange={e => setFormData({...formData, imagen: e.target.value})} />
      
      <button type="submit">Guardar datos personales</button>
    </form>
  );
};

export default PersonalForm;