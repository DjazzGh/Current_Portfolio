import React from 'react';
import styled from 'styled-components';

const Radio = ({ categories, activeFilter, handleFilterClick, categoriesCount, activeIndex, isLightMode }) => {
  return (
    <StyledWrapper categoriesCount={categoriesCount} activeIndex={activeIndex} isLightMode={isLightMode}>
      <div className="body">
        <div className="tabs">
          {categories.map((cat, index) => (
            <React.Fragment key={cat.value}>
              <input
                type="radio"
                name="project_category"
                id={cat.value.replace(/\s/g, '')}
                value={cat.value}
                className="input"
                checked={activeFilter === cat.value}
                onChange={() => handleFilterClick(cat.value)}
              />
              <label htmlFor={cat.value.replace(/\s/g, '')} className="label">
                {cat.label}
              </label>
            </React.Fragment>
          ))}
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .body {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Noto Serif', serif;
  }

  .tabs {
    display: flex;
    flex-wrap: wrap;
    background: transparent;
    border-radius: 12px;
    padding: 4px;
    gap: 8px;
    position: relative;
    --count: ${props => props.categoriesCount};
    --active: ${props => props.activeIndex};
  }

  .tabs > .input,
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  .tabs .label {
    padding: 6px 24px;
    cursor: pointer;
    text-align: center;
    border-radius: 8px;
    font-weight: 500;
    font-size: 14px;
    transition: all 0.3s ease;
    color: ${props => props.isLightMode ? 'var(--text)' : 'rgba(255, 255, 255, 0.7)'};
    background: transparent;
    border: 2px solid transparent;
  }

  /* Mobile and Tablet: 2 items per row */
  @media (max-width: 1024px) {
    .tabs {
      justify-content: center;
    }
    
    .tabs .label {
      flex: 0 0 calc(10% - 4px);
      padding: 5px;
      padding-bottom: 3px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  /* Desktop: All items in one row */
  @media (min-width: 1025px) {
    .tabs {
      flex-wrap: nowrap;
    }
  }

  .tabs :checked + .label {
    background-image: linear-gradient(43deg, var(--primary-purple) 0%, var(--accent-blue) 100%);
    color: white;
    border: none;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  .input:not(:checked) + .label:hover {
    background: ${props => props.isLightMode ? 'rgba(10, 0, 130, 0.1)' : 'rgba(0, 0, 255, 0.2)'};
    color: ${props => props.isLightMode ? 'var(--primary-purple)' : 'var(--white)'};
  }

  .tabs::before {
    content: "";
    position: absolute;
    inset: 0;
    background: ${props => props.isLightMode ? 'rgba(10, 0, 130, 0.1)' : 'rgba(75, 0, 130, 0.15)'};
    border-radius: 12px;
    z-index: -1;
    backdrop-filter: blur(4px);
    border: 1px solid ${props => props.isLightMode ? 'rgba(10, 0, 130, 0.2)' : 'rgba(75, 0, 130, 0.3)'};
  }
`;

export default Radio;