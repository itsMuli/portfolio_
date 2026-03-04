import React from 'react';

const ResumeDownload = ({ className = "btn-primary", children = "Download Resume" }) => {
  const handleDownload = (e) => {
    e.preventDefault();
    
    // Check if resume file exists, otherwise show a message
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Make sure to add your resume.pdf to the public folder
    link.download = 'Rose_Mwendwa_Resume.pdf';
    
    // Check if file exists before downloading
    fetch('/resume.pdf')
      .then(response => {
        if (response.ok) {
          link.click();
        } else {
          alert('Resume file not found. Please add your resume.pdf to the public folder.');
        }
      })
      .catch(() => {
        alert('Resume file not found. Please add your resume.pdf to the public folder.');
      });
  };

  return (
    <button onClick={handleDownload} className={className}>
      {children}
    </button>
  );
};

export default ResumeDownload;