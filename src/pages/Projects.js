import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom'


const Projects = () => {
 
    const handleEmailButtonClick = () => {
      const email = 'example@example.com'; // Replace with the actual email address
      const subject = 'Example Subject'; // Replace with the desired email subject
      const body = 'Example body'; // Replace with the desired email body
  
      const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
      window.open(mailtoUrl);
    };
  
  return (
    <div>
      <h1>My Projects</h1>
      {/* Display your projects with descriptions and links */}
      <Link to="./Home"> Home </Link>
      <footer style={{ marginLeft: '80rem' }}>
        <a href="https://github.com/omarwhite30" target="_blank" rel="noreferrer" style={{ color: 'white', marginRight: '1rem' }}>
          <FaGithub size={32} />
        </a>
        <a href="https://www.linkedin.com/in/omarawhite/" target="_blank" rel="noreferrer" style={{ color: 'white', marginRight: '1rem' }}>
          <FaLinkedin size={32} />
        </a>
        <button onClick={handleEmailButtonClick} style={{ color: 'white', border: 'none', background: 'none', cursor: 'pointer' }}>
          <FaEnvelope size={32} />
        </button>
      </footer>
    </div>
  );
}


export default Projects;
