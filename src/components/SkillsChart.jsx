import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import { useData } from '../contexts/DataContext';

const SkillsChart = () => {
  const { skills } = useData();
  const categoriaCount = skills.reduce((acc, s) => {
    acc[s.categoria] = (acc[s.categoria] || 0) + 1;
    return acc;
  }, {});
  const data = Object.entries(categoriaCount).map(([cat, count]) => ({ categoria: cat, cantidad: count }));
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="categoria" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="cantidad" fill="#0d6efd" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SkillsChart;