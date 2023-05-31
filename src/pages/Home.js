
// import React from 'react';
// import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// const Home = () => {
//   const handleEmailButtonClick = () => {
//     const email = 'example@example.com'; // Replace with the actual email address
//     const subject = 'Example Subject'; // Replace with the desired email subject
//     const body = 'Example body'; // Replace with the desired email body

//     const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

//     window.open(mailtoUrl);
//   };

//   return (
//     <div style={{ backgroundColor: '#ADD8E6', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
//       <h1 style={{ textAlign: 'center', color: '#FFFFFF', marginTop: '2rem', marginRight: '105rem', fontSize: '36px' }}>Omar A. White</h1>
//       <div style={{ textAlign: 'center', color: '#FFFFFF', padding: '10rem' }}>
//         <p>
//           Hello and welcome to my portfolio. I am a Software Developer and military veteran. Here is where you'll be able to stay up to date with me. I have links to projects and contact info for you to get in touch with me. Have a look around, and please don't be afraid to reach out. Enjoy your day!
//         </p>
//       </div>
//       {/* Add your profile picture and contact information */}
//       <footer style={{ marginTop: '25rem' }}>
//         <a href="https://github.com/omarwhite30" target="_blank" rel="noreferrer" style={{ color: '#000000', marginRight: '1rem' }}>
//           <FaGithub size={32} />
//         </a>
//         <a href="https://www.linkedin.com/in/omarawhite/" target="_blank" rel="noreferrer" style={{ color: '#000000', marginRight: '1rem' }}>
//           <FaLinkedin size={32} />
//         </a>
//         <button onClick={handleEmailButtonClick} style={{ color: '#000000', border: 'none', background: 'none', cursor: 'pointer' }}>
//           <FaEnvelope size={32} />
//         </button>
//       </footer>
//     </div>
//   );
// };

// export default Home;




import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Home = () => {
  const handleEmailButtonClick = () => {
    const email = 'example@example.com'; // Replace with the actual email address
    const subject = 'Example Subject'; // Replace with the desired email subject
    const body = 'Example body'; // Replace with the desired email body

    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(mailtoUrl);
  };

  return (
    <div style={{ backgroundColor: '#ADD8E6', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{ textAlign: 'center', color: '#FFFFFF',  marginTop: '2rem', marginRight: '105rem', fontSize: '33px'}}>Omar A. White</h1>
      <div style={{ backgroundColor: '#FFFFFF', borderRadius: '40px', padding: '1rem', margin: '40rem', textAlign: 'center', marginRight:'10rem', marginTop: '9rem'}}>
        <p>
          Hello and welcome to my portfolio. I am a Software Developer and military veteran. Here is where you'll be able to stay up to date with me. I have links to projects and contact info for you to get in touch with me. Have a look around, and please don't be afraid to reach out. Enjoy your day!
        </p>
      </div>
      {/* Add your profile picture and contact information */}
      <footer style={{ marginTop: '2rem' }}>
        <a href="https://github.com/omarwhite30" target="_blank" rel="noreferrer" style={{ color: '#000000', marginRight: '1rem' }}>
          <FaGithub size={32} />
        </a>
        <a href="https://www.linkedin.com/in/omarawhite/" target="_blank" rel="noreferrer" style={{ color: '#000000', marginRight: '1rem' }}>
          <FaLinkedin size={32} />
        </a>
        <button onClick={handleEmailButtonClick} style={{ color: '#000000', border: 'none', background: 'none', cursor: 'pointer' }}>
          <FaEnvelope size={32} />
        </button>
      </footer>
    </div>
  );
};

export default Home;
