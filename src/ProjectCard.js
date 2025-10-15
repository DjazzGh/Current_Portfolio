import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GitHubButton from './GitHubButton';

function ProjectCard({
  imageSrc,
  imageClass = 'project-img-placeholder',
  title,
  description,
  buttonLink,
  buttonText = 'Show Demo',
  githubLink,
  techIcons = [],
  showGithubButton = true
}) {
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

  const handleImageClick = () => {
    if (buttonLink) {
      window.open(buttonLink, '_blank');
    }
  };

  const isMobileApp = imageClass === 'project-img-mobile-placeholder';

  return (
    <StyledWrapper isLightMode={isLightMode}>
      <div className="card">
        <div className="img" onClick={handleImageClick}>
          <img className={imageClass} src={imageSrc} alt={title} />
          {buttonLink && (
            <div className="image-overlay">
              <span className="demo-text">{buttonText}</span>
            </div>
          )}
        </div>
        <div className="text">
          <p className="h3">{title}</p>
          <p className="p">{description}</p>
          <div className="tech-icons">
            {techIcons.map((icon, idx) => (
              <span role="img" aria-label={icon.label || ''} key={idx}>
                <img src={icon.src} alt={icon.alt || ''} height="30px" />
              </span>
            ))}
          </div>
          <div className="project-buttons">
            {showGithubButton && <GitHubButton githubLink={githubLink} />}
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 320px; 
    height: auto;
    min-height: 350px;
    background: ${props => props.isLightMode ? 'white' : '#29292c'};
    border-radius: 30px;
    /* box-shadow: 15px 15px 30px ${props => props.isLightMode ? '#bebebe' : '#1a1a1a'},
               -15px -15px 30px ${props => props.isLightMode ? '#ffffff' : '#3a3a3a'}; */
    transition: 0.3s ease-in-out; /* Increased transition duration for smoother hover */
    margin-bottom: 2rem; /* Added margin to separate cards */
    display: flex;
    flex-direction: column;
  }

   @media (max-width: 400px) {
     .card {
   max-width: 15rem;}
    }
 @media (min-width: 400px) and (max-width: 768px) {
     .card {
   max-width: 20rem;}
    }



  .img {
    width: 100%;
    height: 200px; /* Adjusted height for image to be bigger */
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
  }

  .img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }

  .img img.project-img-mobile-placeholder {
    object-fit: contain;
  }

  .img:hover img {
    /* transform: scale(1.1); */
  }

  .image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  .img:hover .image-overlay {
    opacity: 1;
  }

  .demo-text {
    color: white;
    font-size: 1.2rem;
    font-weight: bold;
  }

  .text {
    margin: 20px;
    display: flex;
    flex-direction: column;
    flex-grow: 1; /* Allow text section to grow */
  }

  .text .h3 {
    font-family: 'Noto Serif', serif;
    font-size: 15px;
    font-weight: 600;
    color: ${props => props.isLightMode ? 'black' : 'white'};
    margin-bottom: 5px;
  }

  .text .p {
    font-family: 'Noto Serif', serif;
    color: ${props => props.isLightMode ? '#555555' : '#cccccc'};
    font-size: 13px;
    flex-grow: 1; /* Allow description to grow */
  }

  .tech-icons {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .tech-icons span {
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .project-buttons {
    display: flex;
    justify-content: center;
    margin-top: auto; /* Push buttons to the bottom */
  }

  .card:hover {
    cursor: pointer;
    box-shadow: 0px 10px 20px rgba(0,0,0,0.1);
  }
`;

export default ProjectCard;