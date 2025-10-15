import React, { useState } from 'react';
import styled from 'styled-components';

const GlassSkillCard = ({ title, icon, rotation, skills }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  React.useEffect(() => {
    const checkMode = () => {
      setIsLightMode(document.documentElement.classList.contains('light-mode'));
    };
    
    checkMode();
    
    const observer = new MutationObserver(checkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  const cardStyle = {
    background: isLightMode ? '#f0f0f0' : 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
  };

  const titleStyle = {
    background: isLightMode ? '#00008B' : 'rgba(138, 43, 226, 0.3)',
    color: '#fff',
  };

  const iconStyle = {
    filter: isLightMode ? 'brightness(0) saturate(0) contrast(0.7)' : 'none',
  };

  return (
    <StyledWrapper>
      <div 
        style={{
          '--r': rotation,
          ...cardStyle
        }} 
        className={`glass ${isFlipped ? 'flipped' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="card-title" style={titleStyle}>{title}</div>
        <div className="card-inner">
          <div className="card-front" style={iconStyle}>
            {icon}
          </div>
          <div className="card-back">
            <div className="skills-grid">
              {Array.from({ length: Math.ceil(skills.length / 2) }, (_, rowIndex) => (
                <div key={rowIndex} className="skill-row">
                  {skills.slice(rowIndex * 2, rowIndex * 2 + 2).map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="skill-icon">
                        {skill.icon}
                      </div>
                      <span className="skill-name" style={{ color: isLightMode ? '#555555' : '#fff' }}>{skill.name}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
      </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .glass {
    position: relative;
    width: 180px;
    height: 280px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 25px 25px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    margin: 0 -45px;
    backdrop-filter: blur(15px);
    transform: rotate(calc(var(--r) * 1deg));
    cursor: pointer;
    perspective: 1000px;
    transition: 0.5s ease;
  }

  /* Light mode styles - using body selector */
  body.light-mode .glass {
    background: #f0f0f0 !important; /* Light grey background */
  }
  
  .light-mode .glass {
    background: #f0f0f0 !important; /* Light grey background */
  }
  
  html.light-mode .glass {
    background: #f0f0f0 !important; /* Light grey background */
  }

  .card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s ease;
    transform-style: preserve-3d;
  }

  .glass.flipped .card-inner {
    transform: rotateY(180deg);
  }

  .card-front, .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
  }

  .card-back {
    transform: rotateY(180deg);
    padding: 12px;
    overflow: hidden;
  }

  .glass::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    transition: 0.5s;
    transform: translateY(0%);
    opacity: 1;
    z-index: 1;
  }

  .card-title {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40px; /* Adjust height as needed */
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: 600;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    border-radius: 0 0 15px 15px;
    text-shadow: 0 2px 4px rgba(0,0,0,0.3);
    z-index: 10;
  }

  /* Light mode title background */
  /* Remove this rule as title is now rendered explicitly */
  /* html.light-mode .glass::before {
    background: #00008B !important;
    color: #fff !important;
  } */

  .glass.flipped::before {
    display: none;
  }

  .card-front svg {
    font-size: 2.5em;
    fill: #fff;
    filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));
    transition: transform 0.3s ease;
  }

  /* Light mode front icons */
  html.light-mode .card-front svg {
    fill: #555555 !important; /* Dark grey icons */
  }

  .card-front img {
    width: 40px;
    height: 40px;
    filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));
    transition: transform 0.3s ease;
  }

  html.light-mode .card-front img {
    filter: brightness(0) saturate(0) contrast(0.7) drop-shadow(0 4px 8px rgba(0,0,0,0.3)) !important; /* Dark grey filter */
  }

  .skills-grid {
    display: flex;
    flex-direction: column;
    gap: 3px;
    row-gap: 3px;
    column-gap: 3px;
    width: 100%;
    height: 100%;
    max-height: 100%;
    overflow: hidden;
    padding: 5px 0;
  }

  .skill-row {
    display: flex;
    gap: 8px;
    margin-bottom: 3px;
  }

  .skill-row:last-child {
    margin-bottom: 0px;
  }

  .skill-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 6px 4px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 6px;
    transition: all 0.3s ease;
    min-height: 60px;
    max-height: 70px;
    flex: 1;
  }

  .skill-item:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.02);
  }

  .skill-icon {
    margin-bottom: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
  }

  .skill-icon img {
    width: 18px;
    height: 18px;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
  }

  /* Light mode skill icons */
  html.light-mode .skill-icon img {
    filter: brightness(0) saturate(0) contrast(0.7) drop-shadow(0 2px 4px rgba(0,0,0,0.3)) !important; /* Dark grey filter */
  }

  .skill-icon span {
    font-size: 14px;
  }

  html.light-mode .skill-icon span {
    filter: brightness(0) !important;
  }

  .skill-name {
    color: #fff;
    font-size: 0.6rem;
    font-weight: 500;
    text-align: center;
    text-shadow: 0 1px 2px rgba(0,0,0,0.3);
    line-height: 1.1;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* Light mode skill names */
  html.light-mode .skill-name {
    color: #000 !important;
    text-shadow: none !important;
  }
`;

export default GlassSkillCard;
