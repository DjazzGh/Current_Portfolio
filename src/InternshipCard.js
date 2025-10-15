import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const InternshipCard = () => {
  const [isLightMode, setIsLightMode] = useState(false);
  
  // Check for light mode and update state when it changes
  useEffect(() => {
    // Initial check
    setIsLightMode(document.documentElement.classList.contains('light-mode'));
    
    // Set up observer to watch for class changes on html element
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          setIsLightMode(document.documentElement.classList.contains('light-mode'));
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    
    // Clean up observer on component unmount
    return () => observer.disconnect();
  }, []);
  
  // Custom inline styles for light mode
  const notificationStyle = isLightMode ? { background: '#ffffff' } : {};
  const innerBackgroundStyle = isLightMode ? { background: '#ffffff' } : {};
  const titleStyle = isLightMode ? { color: '#0A0082', fontWeight: 600 } : {};
  const bodyStyle = isLightMode ? { color: '#555555' } : {};
  const descriptionStyle = isLightMode ? { color: '#444444' } : {};

  return (
    <StyledWrapper>
      <div 
        className="notification" 
        style={notificationStyle}
      >
        <div className="notiglow" />
        <div className="notiborderglow" />
        <div 
          className="inner-background" 
          style={{
            position: 'absolute',
            content: '""',
            inset: '0.0625rem',
            borderRadius: '0.9375rem',
            background: isLightMode ? '#ffffff' : '#18181b',
            zIndex: 2
          }}
        />
        <div 
          className="notititle"
          style={titleStyle}
        >UI/UX Design Internship</div>
        <div 
          className="notibody"
          style={bodyStyle}
        >The Virtual CTO | May 2025 - July 2025</div>
        <div 
          className="notidescription"
          style={descriptionStyle}
        >Created user-friendly websites based on project requirements. I conducted user research, built personas, and designed responsive wireframes. Refined layouts for intuitive navigation and visual appeal, incorporating features like dashboards and event management to enhance the user experience.</div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .notification {
    display: flex;
    flex-direction: column;
    isolation: isolate;
    position: relative;
    width: 28rem;
    height: auto;
    min-height: 12rem;
    background: #29292c;
    border-radius: 1rem;
    overflow: hidden;
    font-family: 'Noto Serif', serif;
    font-size: 16px;
    --gradient: linear-gradient(to bottom, #2eadff, #3d83ff, #7e61ff);
    --color: #32a6ff;
    padding-bottom: 1.5rem;
  }

  /* Light mode styles */
  html.light-mode .notification {
    background: #f0f0f0 !important;
  }

  .notification:before {
    position: absolute;
    content: "";
    inset: 0.0625rem;
    border-radius: 0.9375rem;
    background: #18181b;
    z-index: 2;
  }

  /* Light mode inner background */
  html.light-mode .notification:before {
    background: #f5f5f5 !important;
  }

  .notification:after {
    position: absolute;
    content: "";
    width: 0.25rem;
    inset: 0.65rem auto 0.65rem 0.5rem;
    border-radius: 0.125rem;
    background: var(--gradient);
    transition: transform 300ms ease;
    z-index: 4;
  }

  .notification:hover:after {
    transform: translateX(0.15rem);
  }

  .notititle {
    color: var(--color);
    padding: 0.65rem 0.25rem 0.4rem 1.25rem;
    font-weight: 500;
    font-size: 1.1rem;
    transition: transform 300ms ease;
    z-index: 5;
  }

  /* Light mode title - purple */
  html.light-mode .notititle {
    color: #00008B!important;
    font-weight: 600;
  }

  .notification:hover .notititle {
    transform: translateX(0.15rem);
  }

  .notibody {
    color: #99999d;
    padding: 0 1.25rem 0.5rem 1.25rem;
    transition: transform 300ms ease;
    z-index: 5;
    font-size: 0.9rem;
  }

  /* Light mode body text - black */
  html.light-mode .notibody {
    color: #000000 !important;
  }

  .notification:hover .notibody {
    transform: translateX(0.25rem);
  }

  .notidescription {
    color: #cccccc;
    padding: 0 1.25rem;
    transition: transform 300ms ease;
    z-index: 5;
    font-size: 0.85rem;
    line-height: 1.4;
  }

  /* Light mode description text - black */
  html.light-mode .notidescription {
    color: #000000 !important;
  }

  .notification:hover .notidescription {
    transform: translateX(0.25rem);
  }

  .notiglow,
  .notiborderglow {
    position: absolute;
    width: 20rem;
    height: 20rem;
    transform: translate(-50%, -50%);
    background: radial-gradient(circle closest-side at center, white, transparent);
    opacity: 0;
    transition: opacity 300ms ease;
  }

  .notiglow {
    z-index: 3;
  }

  .notiborderglow {
    z-index: 1;
  }

  .notification:hover .notiglow {
    opacity: 0.1;
  }

  .notification:hover .notiborderglow {
    opacity: 0.1;
  }

    @media (max-width: 768px) {
    
     .notification {
   
    max-width: 18rem;
   
}}

@media (min-width: 400px) and (max-width: 768px) {
     .card {
   max-width: 21rem;}
    }


    }


`;

export default InternshipCard;
