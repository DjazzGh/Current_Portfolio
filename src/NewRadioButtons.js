import React from 'react';
import styled from 'styled-components';

const Radio = ({
  activeMainFilter,
  setActiveMainFilter,
  activeSubFilter,
  setActiveSubFilter,
  isLightMode
}) => {
  const mainCategories = [
    { label: 'Development', value: 'Development' },
    { label: 'Cybersecurity', value: 'Cybersecurity' },
    { label: 'AI', value: 'AI' }
  ];

  const subCategories = [
    { label: 'Web', value: 'Web' },
    { label: 'Mobile', value: 'Mobile' }
  ];

  return (
    <StyledWrapper isLightMode={isLightMode}>
      <div className="filter-container">
        {/* Main Categories Row */}
        <div className="tabs main-tabs">
          {mainCategories.map((cat) => (
            <React.Fragment key={cat.value}>
              <input
                type="radio"
                name="main_category"
                id={`main-${cat.value}`}
                value={cat.value}
                className="input"
                checked={activeMainFilter === cat.value}
                onChange={() => setActiveMainFilter(cat.value)}
              />
              <label htmlFor={`main-${cat.value}`} className="label">
                {cat.label}
              </label>
            </React.Fragment>
          ))}
        </div>

        {/* Sub Categories Row (only visible/expanded for Development) */}
        <div className={`sub-tabs-wrapper ${activeMainFilter === 'Development' ? 'show' : ''}`}>
          <div className="tabs sub-tabs">
            {subCategories.map((cat) => (
              <React.Fragment key={cat.value}>
                <input
                  type="radio"
                  name="sub_category"
                  id={`sub-${cat.value}`}
                  value={cat.value}
                  className="input"
                  checked={activeSubFilter === cat.value}
                  onChange={() => setActiveSubFilter(cat.value)}
                />
                <label htmlFor={`sub-${cat.value}`} className="label sub-label">
                  {cat.label}
                </label>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .filter-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    width: 100%;
  }

  .tabs {
    display: flex;
    flex-wrap: wrap;
    background: transparent;
    border-radius: 12px;
    padding: 4px;
    gap: 16px;
    position: relative;
  }

  .main-tabs {
    gap: 32px;
  }

  .tabs > .input {
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
    padding: 8px 24px;
    cursor: pointer;
    text-align: center;
    border-radius: 8px;
    font-weight: 500;
    font-size: 15px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    color: ${props => props.isLightMode ? 'var(--text)' : 'rgba(255, 255, 255, 0.7)'};
    background: transparent;
    border: none;
  }

  .tabs .sub-label {
    padding: 6px 18px;
    font-size: 13px;
  }

  /* Mobile and Tablet styling */
  @media (max-width: 768px) {
    .tabs {
      justify-content: center;
      width: 100%;
    }
  }

  .tabs :checked + .label {
    background-image: linear-gradient(43deg, var(--primary-purple) 0%, var(--accent-blue) 100%);
    color: white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  .input:not(:checked) + .label:hover {
    background: ${props => props.isLightMode ? 'rgba(10, 0, 130, 0.1)' : 'rgba(255, 255, 255, 0.05)'};
    color: ${props => props.isLightMode ? 'var(--primary-purple)' : 'var(--white)'};
  }

  .tabs::before {
    content: "";
    position: absolute;
    inset: 0;
    background: ${props => props.isLightMode ? 'rgba(10, 0, 130, 0.05)' : 'rgba(255, 255, 255, 0.03)'};
    border-radius: 12px;
    z-index: -1;
    backdrop-filter: blur(8px);
  }

  /* Sub tabs wrapper with smooth transitions */
  .sub-tabs-wrapper {
    max-height: 0;
    opacity: 0;
    transform: translateY(-10px);
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    pointer-events: none;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .sub-tabs-wrapper.show {
    max-height: 80px; /* enough height to display the buttons */
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }
`;

export default Radio;