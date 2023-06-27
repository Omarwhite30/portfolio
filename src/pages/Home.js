import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Navbar from '../Navbar';


const Home = () => {
  const handleEmailButtonClick = () => {
    const email = 'example@example.com'; // Replace with the actual email address
    const subject = 'Example Subject'; // Replace with the desired email subject
    const body = 'Example body'; // Replace with the desired email body

    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(mailtoUrl);
  };

  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{ textAlign: 'center', color: '#FFFFFF',  marginRight: '63rem', fontSize: '60px',position:'absolute', top:'1px', left:'16px', fontStyle:'comic sans'}}>Omar A. White</h1>
      <div style={{ backgroundColor: 'white', borderRadius: '32px 64px',margin: '16rem', textAlign: 'center', marginRight:'35rem', marginTop: '1rem'}}>
        <p style={{ fontFamily: 'Comic Sans MS' }}>
          Hello and welcome to my portfolio. I am a Software Developer and military vet. Here is where you'll be able to stay up to date with me. I have links to projects and contact info for you to get in touch with me. Have a look around, and please don't be afraid to reach out. Enjoy your day!
        </p>
      </div>
      {/* Add your profile picture and contact information */}
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
};

export default Home;
