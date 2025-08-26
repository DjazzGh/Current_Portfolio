import React from 'react';
import styled from 'styled-components';

const ExpandableSkillCard = ({ title, skills }) => {
  const [isLightMode, setIsLightMode] = React.useState(false);

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

  const cardStyle = {
    background: isLightMode ? '#f0f0f0' : 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #8a2be2 100%)',
    border: isLightMode ? '2px solid #e0e0e0' : '2px solid rgba(138, 43, 226, 0.6)',
  };

  const titleStyle = {
    background: isLightMode ? '#00008B' : 'transparent',
    color: '#ffffff',
    padding: '8px 12px',
    borderRadius: '4px',
    display: 'inline-block',
  };

  const iconStyle = {
    filter: isLightMode ? 'brightness(0) saturate(0) contrast(0.7)' : 'none',
  };

  return (
    <StyledWrapper>
      <div className="card">
        <p style={cardStyle}>
          <div className="title" style={titleStyle}>{title}</div>
          <div className="content">
            <ul>
              {skills.map((skill, index) => (
                <li key={index} style={{ color: isLightMode ? '#555555' : '#ffffff' }}>
                  <span className="skill-icon" style={iconStyle}>
                    {skill.icon}
                  </span>
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        </p>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 70px;
    height: 320px;
    border-radius: 12px;
    background: linear-gradient(145deg, #2a2a2a, #1a1a1a);
    display: flex;
    padding: 0.6em;
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  }

  .card:hover {
    width: 300px;
    box-shadow: 0 12px 40px rgba(138, 43, 226, 0.3);
  }

  .card p {
    height: 100%;
    width: 100%;
    overflow: hidden;
    cursor: pointer;
    border-radius: 8px;
    transition: all .6s cubic-bezier(0.4, 0, 0.2, 1);
    background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #8a2be2 100%);
    border: 2px solid rgba(138, 43, 226, 0.6);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.2rem;
    box-shadow: inset 0 2px 4px rgba(255, 255, 255, 0.1);
    position: relative;
  }
  
  /* Light mode card background */
  html.light-mode .card p {
    background: #f0f0f0 !important; /* Light grey background */
    border: 2px solid rgba(0, 0, 139, 0.6) !important;
  }
  
  /* Light mode title background */
  /* Remove this rule as title is now rendered explicitly */
  /* html.light-mode .card p .title {
    background: #00008B !important;
    color: #fff !important;
    padding: 8px 12px !important;
    border-radius: 4px !important;
  } */

  .card p::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, rgba(0,0,0,0.1) 100%);
    border-radius: 6px;
    pointer-events: none;
  }

  .card p:hover {
    background: linear-gradient(135deg, #764ba2 0%, #667eea 50%, #9370db 100%);
    border-color: #9370db;
    box-shadow: inset 0 2px 4px rgba(255, 255, 255, 0.2), 0 0 20px rgba(138, 43, 226, 0.4);
    justify-content: flex-start;
  }

  .title {
    min-width: 14em;
    padding: .8em;
    text-align: center;
    transition: all .6s cubic-bezier(0.4, 0, 0.2, 1);
    text-transform: uppercase;
    color: #ffffff;
    letter-spacing: .15em;
    font-weight: 700;
    font-size: 0.9rem;
    white-space: nowrap;
    text-shadow: 0 3px 6px rgba(0,0,0,0.4);
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
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    border-radius: 0 0 15px 15px;
    text-shadow: 0 2px 4px rgba(0,0,0,0.3);
    z-index: 10;
  }

  .card p:hover .title {
    transform: translate(-50%, 0) rotate(0);
    position: relative;
    top: auto;
    left: auto;
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
    letter-spacing: .2em;
  }

  .content {
    opacity: 0;
    transform: translateY(30px);
    transition: all .6s cubic-bezier(0.4, 0, 0.2, 1);
    width: 100%;
    z-index: 2;
    position: relative;
  }

  .card p:hover .content {
    opacity: 1;
    transform: translateY(0);
  }

  .content ul {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
  }

  .content li {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    color: #ffffff;
    font-size: 0.95rem;
    font-family: 'Noto Serif', serif;
    text-shadow: 0 2px 4px rgba(0,0,0,0.3);
    padding: 0.3rem 0;
    border-radius: 4px;
    transition: all 0.3s ease;
  }

  .content li:hover {
    background: rgba(255, 255, 255, 0.1);
    padding-left: 0.5rem;
    transform: translateX(5px);
  }

  .skill-icon {
    margin-right: 0.8rem;
    display: flex;
    align-items: center;
    min-width: 24px;
  }

  .skill-icon img {
    width: 24px;
    height: 24px;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
    transition: transform 0.3s ease;
  }

  .content li:hover .skill-icon img {
    transform: scale(1.1);
  }
`;

export default ExpandableSkillCard;
