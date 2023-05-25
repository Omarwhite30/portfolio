import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Home = () => {
  return (
    <div>
      <h1>Hello World</h1>
      {/* Add your profile picture, contact information */}
      <div>
        <a href="https://github.com/omarwhite30">
          <FaGithub size={32} />
        </a>
        <a href="https://www.linkedin.com/in/omarawhite/">
          <FaLinkedin size={32} />
        </a>
      </div>
    </div>
  );
}

export default Home;
