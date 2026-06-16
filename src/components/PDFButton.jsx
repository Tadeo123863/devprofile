import React from 'react';
import { pdf } from '@react-pdf/renderer';
import { CVPDF } from '../utils/pdfGenerator';
import { useData } from '../contexts/DataContext';

const PDFButton = () => {
  const data = useData();
  const generatePDF = async () => {
    const blob = await pdf(<CVPDF data={data} />).toBlob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'DevProfile_CV.pdf';
    link.click();
    URL.revokeObjectURL(url);
  };
  return <button onClick={generatePDF}>Exportar a PDF</button>;
};

export default PDFButton;