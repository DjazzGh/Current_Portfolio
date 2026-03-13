import React from 'react';
import styled from 'styled-components';
import GlassSkillCard from './GlassSkillCard';

const GlassSkillsContainer = () => {
  const skillCategories = [
    {
      title: "Frontend",
      rotation: -15,
      icon: (
        <svg viewBox="0 0 640 512" height="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
        </svg>
      ),
      skills: [
        { name: "HTML", icon: <img src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000" alt="HTML" height="20px"/> },
        { name: "CSS", icon: <img src="https://img.icons8.com/?size=100&id=21278&format=png&color=000000" alt="CSS" height="20px"/> },
        { name: "JavaScript", icon: <img src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000" alt="JavaScript" height="20px"/> },
        { name: "React", icon: <img src="https://img.icons8.com/?size=100&id=NfbyHexzVEDk&format=png&color=000000" alt="React" height="20px"/> },
        { name: "Tailwind", icon: <img src="https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000" alt="Tailwind" height="20px"/> }
      ]
    },
    {
      title: "Backend",
      rotation: 5,
      icon: (
        <svg viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M64 32C28.7 32 0 60.7 0 96v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm48 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM64 288c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V352c0-35.3-28.7-64-64-64H64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm48 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
        </svg>
      ),
      skills: [
        { name: "NodeJS", icon: <img src="https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000" alt="NodeJS" height="20px"/> },
        { name: "ExpressJS", icon: <img src="https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000" alt="ExpressJS" height="20px"/> },
        { name: "MySQL", icon: <img src="https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000" alt="MySQL" height="20px"/> },
        { name: "MongoDB", icon: <img src="https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000" alt="MongoDB" height="20px"/> },
        { name: "PHP", icon: <img src="https://img.icons8.com/?size=100&id=fAMVO_fuoOuC&format=png&color=000000" alt="PHP" height="20px"/> },
        { name: "Next.js", icon: <img src="https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000" alt="Next.js" height="20px"/> }
      ]
    },
    {
      title: "CyberSecurity",
      rotation: 25,
      icon: (
  <svg viewBox="0 0 24 24" height="1em" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M12 2L4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3z"/>
    <path d="M12 11a2 2 0 012 2v1h-4v-1a2 2 0 012-2zm3 3v3H9v-3h6z"/>
  </svg>
),
     
      skills: [
        { name: "Kali linux", icon: <img src="https://img.icons8.com/?size=100&id=qBWtR72kluCU&format=png&color=000000" alt="Python" height="20px"/> },
        { name: "Burp Suite", icon: <img width="50" height="50" src="burp.png" alt="burp-suite"/> },
        { name: "Python", icon: <img src="https://img.icons8.com/?size=100&id=l75OEUJkPAk4&format=png&color=000000" alt="Python" height="20px"/> },
        { name: "C", icon: <img src="./c.svg" alt="C" height="20px"/> }
      ]
    },
    {
      title: "AI",
      rotation: -10,
       icon: (
        <svg viewBox="0 0 448 512" height="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
        </svg>
      ),
      skills: [
        { name: "TensorFlow", icon: <img src="https://img.icons8.com/?size=100&id=n3QRpDA7KZ7P&format=png&color=000000" alt="Git" height="20px"/> },
        { name: "Pytorch", icon: <img src="https://img.icons8.com/?size=100&id=jH4BpkMnRrU5&format=png&color=000000" alt="GitHub" height="20px"/> },
        { name: "Hugging Face", icon: <img src="https://img.icons8.com/?size=100&id=sop9ROXku5bb&format=png&color=000000" alt="Figma" height="20px"/> },
       
      ]
    },
   {
      title: "Tools",
      rotation: -10,
      icon: (
        <svg viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4h54.1l109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109V104c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 7.2 429.2 19.9 441.9l50.7 50.7c12.7 12.7 33.1 12.7 45.8 0l35.5-35.5c12.7-12.7 12.7-33.1 0-45.8L101.3 360.6c-12.7-12.7-33.1-12.7-45.8 0L19.9 396.1z" />
        </svg>
      ),
      skills: [
        { name: "Git", icon: <img src="https://img.icons8.com/?size=100&id=20906&format=png&color=000000" alt="Git" height="20px"/> },
        { name: "GitHub", icon: <img src="https://img.icons8.com/?size=100&id=12599&format=png&color=000000" alt="GitHub" height="20px"/> },
        { name: "Figma", icon: <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="Figma" height="20px"/> },
        { name: "Docker", icon: <span>🐳</span> }
      ]
    },
  ];

  return (
    <StyledWrapper>
      <div className="container">
        {skillCategories.map((category, index) => (
          <GlassSkillCard
            key={index}
            title={category.title}
            icon={category.icon}
            rotation={category.rotation}
            skills={category.skills}
          />
        ))}
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
  }

  .container:hover .glass {
    transform: rotate(0deg);
    margin: 0 10px;
  }

  @media (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 20px;
    }
    
    .container:hover .glass {
      margin: 10px 0;
    }
  }
`;

export default GlassSkillsContainer;
