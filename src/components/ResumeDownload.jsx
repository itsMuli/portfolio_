import React from 'react';

const ResumeDownload = ({ className = "btn-primary", children = "Download Resume" }) => {
  const handleDownload = (e) => {
    e.preventDefault();
    
    // Check if resume file exists, otherwise show a message
    const link = document.createElement('a');
    link.href = '/Rose_Mwendwa_Resume.docx';
    link.download = 'Rose_Mwendwa_Resume.docx';
    
    // Check if file exists before downloading
    fetch('/Rose_Mwendwa_Resume.docx')
      .then(response => {
        if (response.ok) {
          link.click();
        } else {
          alert('Resume file not found. Please add your resume.pdf to the public folder.');
        }
      })
      .catch(() => {
        alert('Resume file not found. Please add your resume.docx to the public folder.');
      });
  };

  return (
    <button onClick={handleDownload} className={className}>
      {children}
    </button>
  );
};

export default ResumeDownload;