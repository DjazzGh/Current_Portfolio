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
      title: "Programming",
      rotation: 25,
      icon: (
        <svg viewBox="0 0 448 512" height="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
        </svg>
      ),
      skills: [
        { name: "Python", icon: <img src="https://img.icons8.com/?size=100&id=l75OEUJkPAk4&format=png&color=000000" alt="Python" height="20px"/> },
        { name: "Java", icon: <img src="https://img.icons8.com/?size=100&id=13679&format=png&color=000000" alt="Java" height="20px"/> },
        { name: "C", icon: <img src="./c.svg" alt="C" height="20px"/> }
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
    {
      title: "Languages",
      rotation: 15,
      icon: (
        <svg viewBox="0 0 640 512" height="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 128C0 92.7 28.7 64 64 64H256h48 16H576c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H320 304 256 64c-35.3 0-64-28.7-64-64V128zm320 0V384H576V128H320zM178.3 175.9c-3.2-7.2-10.4-11.9-18.3-11.9s-15.1 4.7-18.3 11.9l-64 144c-4.5 10.1 .1 21.9 10.2 26.4s21.9-.1 26.4-10.2l8.9-20.1h73.6l8.9 20.1c4.5 10.1 16.3 14.6 26.4 10.2s14.6-16.3 10.2-26.4l-64-144zM160 233.2L179 276H141l19-42.8zM448 164c11 0 20 9 20 20v4h44 16c11 0 20 9 20 20s-9 20-20 20h-2l-1.6 4.5c-8.9 24.4-22.4 46.6-39.6 65.4c.9 .6 1.8 1.1 2.7 1.6l18.9 11.3c9.5 5.7 12.5 18 6.9 27.4s-18 12.5-27.4 6.9l-18.9-11.3c-4.5-2.7-8.8-5.5-13.1-8.5c-10.6 7.5-21.9 14-34 19.4l-3.6 1.6c-10.1 4.5-21.9-.1-26.4-10.2s.1-21.9 10.2-26.4l3.6-1.6c6.4-2.9 12.6-6.1 18.5-9.8l-12.2-12.2c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0l14.6 14.6 .5 .5c12.4-13.1 22.5-28.3 29.8-45H448 376c-11 0-20-9-20-20s9-20 20-20h52v-4c0-11 9-20 20-20z" />
        </svg>
      ),
      skills: [
        { name: "English", icon: <span>🇬🇧</span> },
        { name: "French", icon: <span>🇫🇷</span> },
        { name: "Arabic", icon: <span>🇩🇿</span> }
      ]
    }
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
