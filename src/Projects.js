import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard.js';
import CustomRadioButtons from './NewRadioButtons'; // Import the new CustomRadioButtons component

const projectData = [
  {
    category: 'Web Development',
    imageSrc: './card1.jpeg',
    imageClass: 'project-img-placeholder',
    title: 'Travel planning website',
    description: 'Developed a dynamic travel planning website that allows users to create personalized travel itineraries by inputting details . Designed an intuitive user interface to enhance user experience and implemented robust backend functionality to store and manage user-generated travel plans efficiently.',
    buttonLink: 'https://drive.google.com/file/d/1VHwEfO7pJmCgP32RBunJhnId59jfu1io/view?usp=sharing',
    buttonText: 'Check Demo →',
    githubLink: 'https://github.com/DjazzGh/Travel-planning-website',
    techIcons: [
      { src: 'https://img.icons8.com/?size=100&id=20909&format=png&color=000000', alt: 'React Logo', label: 'React' },
      { src: 'https://img.icons8.com/?size=100&id=21278&format=png&color=000000', alt: 'TypeScript Logo', label: 'TypeScript' },
      { src: 'https://img.icons8.com/?size=100&id=108784&format=png&color=000000', alt: 'Three.js Logo', label: 'Three.js' },
      { src: 'https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000', alt: 'Redux Logo', label: 'Redux' },
      { src: 'https://img.icons8.com/?size=100&id=fAMVO_fuoOuC&format=png&color=000000', alt: 'Firebase Logo', label: 'Firebase' },
    ],
  },
  {
    category: 'Web Development',
    imageSrc: './card2.jpeg',
    imageClass: 'project-img-placeholder',
    title: 'Real Time Chat App',
    description: 'A real-time chat application that enables users to exchange instant messages and monitor online statuses through a seamless, responsive interface. It incorporates secure user authentication, ensures reliable conversation flow, and implements comprehensive error handling on both client and server sides.',
    buttonLink: 'https://drive.google.com/file/d/1idylEldU17gS_Z220VQiVElw0L5MPkDO/view?usp=sharing',
    buttonText: 'Check Demo →',
    githubLink: 'https://github.com/DjazzGh/Real-time-chat-app',
    techIcons: [
      { src: 'https://runcode-app-public.s3.amazonaws.com/images/online-reactjs-editor-compiler.original.png', alt: 'ReactJS Logo', label: 'ReactJS' },
      { src: 'https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000', alt: 'Tailwind Logo', label: 'Tailwind' },
      { src: 'https://img.icons8.com/?size=100&id=54087&format=png&color=000000', alt: 'NodeJS Logo', label: 'NodeJS' },
      { src: 'https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000', alt: 'MongoDB Logo', label: 'MongoDB' },
    ],
  },
    {
    category: 'Web Development',
    imageSrc: './card8.png',
    imageClass: 'project-img-placeholder',
    title: 'SmartSpendAI - Expense Tracker AI',
    description: 'An expense tracker that leverages artificial intelligence to help users manage their finances effectively. It provides AI-powered insights into spending patterns, automates expense categorization, and offers a smart dashboard for visualizing financial data, empowering users to achieve their financial goals with ease.',
    buttonLink: 'https://drive.google.com/file/d/1bS_Iyb3H0IMkx1hTK-cp5Cg6yPOTnm4p/view',
    buttonText: 'Check Demo →',
    githubLink: 'https://github.com/DjazzGh/AI_Expense_Tracker_Website',
    techIcons: [
      { src: 'https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000', alt: 'NextJS Logo', label: 'NextJS' },
      { src: "https://img.icons8.com/color/48/typescript.png", alt: '=typescript Logo', label: 'Typescript' },
      { src: 'https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000', alt: 'Tailwind Logo', label: 'Tailwind' },
      { src: "https://img.icons8.com/color/48/postgreesql.png", alt: 'Postgres Logo', label: 'Postgres' },

      
    ]}, 
  {
    category: 'Other languages',
    imageSrc: './card3.jpeg',
    imageClass: 'project-img-placeholder',
    title: 'Hotel Management App',
    description: 'Developed a hotel management system that processes 200+ bookings per month, applying Java OOP principles, MVC architecture, and designing an intuitive GUI.',
    buttonLink: 'https://drive.google.com/file/d/1eRXpY78DySlUhs1LJYksW4Jl7lClurW3/view?usp=sharing',
    buttonText: 'Check Demo →',
    githubLink: 'https://github.com/DjazzGh/Hotel_Management_App',
    techIcons: [
      { src: 'https://img.icons8.com/?size=100&id=13679&format=png&color=000000', alt: 'Java Logo', label: 'Java' },
    ],
  },
  {
    category: 'UIUX',
    imageSrc: './card4.jpeg',
    imageClass: 'project-img-placeholder',
    title: 'Designing Neuron: A medical platform',
    description: 'A medical platform focused on enhancing healthcare accessibility and efficiency. It provides intuitive UI/UX designs for seamless appointment scheduling, and medical record management. A smooth and reliable experience for both patients and healthcare professionals.',
    buttonLink: 'https://www.figma.com/design/0NWi4CR09F3swEo0SpP5th/Challenge-3?t=SYV0lt55an06re3D-0',
    buttonText: 'Figma link →',
    
    techIcons: [
      { src: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg', alt: 'Figma Logo', label: 'Figma' },
    ],
  },
  {
    category: 'UIUX',
    imageSrc: './card5.jpeg',
    imageClass: 'project-img-mobile-placeholder',
    title: 'Redesigning Progres app',
    description: "Enhancing the UI/UX of Algeria's student portal for improved accessibility and usability. The redesign focused on creating a modern, intuitive interface that simplifies grade tracking, schedule management, and academic services.",
    buttonLink: 'https://www.figma.com/design/dtFJIsFD9ktKJuBg08XlF8/Untitled?node-id=1-4&t=tkK39qZabiGiRxG2-1',
    buttonText: 'Figma link →',
    
    techIcons: [
      { src: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg', alt: 'Figma Logo', label: 'Figma' },
    ],
  },
  {
    category: 'Mobile Development',
    imageSrc: './card6.jpeg',
    imageClass: 'project-img-mobile-placeholder',
    title: 'Recipe App',
    description: 'Developed a mobile recipe app using Flutter and SQLite, enabling users to browse and save over 50 recipes, implementing state management for smooth navigation.',
    buttonLink: 'https://drive.google.com/file/d/1U3WdxEE9ybhgYlJ302uFvOCK-LAsOWjT/view?usp=sharing',
    buttonText: 'Check Demo →',
    githubLink: 'https://github.com/DjazzGh/RecipeApp_Flutter',
    techIcons: [
      { src: 'https://img.icons8.com/?size=100&id=7I3BjCqe9rjG&format=png&color=000000', alt: 'Flutter Logo', label: 'Flutter' },
    ],
  },
  {
    category: 'Other languages',
    imageSrc: './card7.jpeg',
    imageClass: 'project-img-placeholder',
    title: 'QCS Console Game',
    description: 'This project is a console-based QCM Application that provides users with the ability to log in, choose qcm categories, answer questions with a timer, and track their qcm history.',
    buttonLink: 'https://www.youtube.com/watch?v=d8t6BRGSa6A&ab_channel=Chaima',
    buttonText: 'Check Demo →',
    githubLink: 'https://github.com/DjazzGh/Python-QCM-Game',
    techIcons: [
      { src: 'https://img.icons8.com/?size=100&id=l75OEUJkPAk4&format=png&color=000000', alt: 'C++ Logo', label: 'C++' },
    ],
  },
];

function Projects() {
    const [activeFilter, setActiveFilter] = useState('Web Development');
    const [isLightMode, setIsLightMode] = useState(false);

    useEffect(() => {
        setIsLightMode(document.documentElement.classList.contains('light-mode'));

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    setIsLightMode(document.documentElement.classList.contains('light-mode'));
                }
            });
        });

        observer.observe(document.documentElement, { attributes: true });

        return () => observer.disconnect();
    }, []);

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
    };

  const categories = [
    { label: 'UI/UX', value: 'UIUX' },
    { label: 'Web Development', value: 'Web Development' },
    { label: 'Mobile Development', value: 'Mobile Development' },
    { label: 'Other languages', value: 'Other languages' },
  ];

    return (
        <section className="projects" id="projects">
            <h2 style={{ marginBottom: '20px' }}>My Projects</h2>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
              <CustomRadioButtons
                categories={categories}
                activeFilter={activeFilter}
                handleFilterClick={handleFilterClick}
                categoriesCount={categories.length}
                activeIndex={categories.findIndex(cat => cat.value === activeFilter)}
                isLightMode={isLightMode}
              />
            </div>
            <div className="project-card-container" style={{ gap: '1.5rem' }}>
        {categories.map((cat) => (
          <div
            key={cat.value}
            className={`${cat.value.replace(/\s/g, '')}-Projects`}
            style={{
              display: activeFilter === cat.value ? 'flex' : 'none',
              flexWrap: 'wrap',
              gap: '2rem',
              alignItems: 'stretch',
              justifyContent: 'center',
            }}
          >
            {projectData
              .filter((proj) => proj.category === cat.value)
              .map((proj, idx) => (
                <ProjectCard
                  key={proj.title + idx}
                  {...proj}
                  showGithubButton={proj.category !== 'UIUX'}
                />
              ))}
                </div>
        ))}
            </div>
        </section>
    );
}

export default Projects;
