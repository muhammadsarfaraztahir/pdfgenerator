// import React, { useState } from 'react';
// import { jsPDF } from "jspdf"; 
// import './PdfGenerator.css'; 

// const PdfGenerator = () => {
//   const [text, setText] = useState('');

//   const handleTextChange = (e) => {
//     setText(e.target.value);
//   };

//   const generatePDF = () => {
//     const doc = new jsPDF();
//     doc.text(text, 20, 30);
//     doc.save('generated.pdf');
//   };

//   return (
//     <div>
//       <h1>PDF Generator</h1>
//       <textarea
//         value={text}
//         onChange={handleTextChange}
//         rows="10"
//         cols="30"
//         placeholder="Type text to generate PDF..."
//       />
//       <br />
//       <button onClick={generatePDF}>Generate PDF</button>
//     </div>
//   );
// };

// export default PdfGenerator;


import React, { useState } from 'react';
import { jsPDF } from 'jspdf'; // Import jsPDF
import './PdfGenerator.css'; // Import the CSS file for styling

const PdfGenerator = () => {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text(text, 20, 30);
    doc.save('generated.pdf');
  };

  return (
    <div className="pdf-container">
      <h1 className="pdf-title">PDF Generator</h1>
      <textarea
        className="pdf-textarea"
        value={text}
        onChange={handleTextChange}
        rows="10"
        placeholder="Type text to generate PDF..."
      />
      <button className="pdf-button" onClick={generatePDF}>Generate PDF</button>
    </div>
  );
};

export default PdfGenerator;
