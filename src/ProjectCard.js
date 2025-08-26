import React from 'react';
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
  const handleImageClick = () => {
    if (buttonLink) {
      window.open(buttonLink, '_blank');
    }
  };

  const isMobileApp = imageClass === 'project-img-mobile-placeholder';
  
  return (
    <div className="project-card">
      <div className={`image-container ${isMobileApp ? 'mobile-container' : ''}`} onClick={handleImageClick}>
        <img className={imageClass} src={imageSrc} alt={title} />
        {buttonLink && (
          <div className="image-overlay">
            <span className="demo-text">{buttonText}</span>
          </div>
        )}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
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
  );
}

export default ProjectCard;