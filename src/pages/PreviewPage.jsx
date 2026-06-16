import React from 'react';
import CVPreview from '../components/CVPreview';
import PDFButton from '../components/PDFButton';

const PreviewPage = () => {
  return (
    <div>
      <h1>Previsualización del CV</h1>
      <PDFButton />
      <CVPreview />
    </div>
  );
};

export default PreviewPage;