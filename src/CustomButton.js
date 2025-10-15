import React from 'react';
import styled from '@emotion/styled';

const StyledWrapper = styled.div`
  .button {
    --black-700: hsla(0 0% 12% / 1);
    --border_radius: 8px;
    --transtion: 0.3s ease-in-out;
    --offset: 2px;

    cursor: pointer;
    position: relative;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    transform-origin: center;

    padding: 0.75rem 1.5rem;
    background-color: transparent;

    border: none;
    border-radius: var(--border_radius);
    transform: scale(calc(1 + (var(--active, 0) * 0.1)));

    transition: transform var(--transtion);
  }

  .button::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 100%;
    height: 100%;
    background-color: var(--black-700);

    border-radius: var(--border_radius);
    box-shadow: inset 0 0.5px hsl(0, 0%, 100%), inset 0 -1px 2px 0 hsl(0, 0%, 0%),
      0px 4px 10px -4px hsla(0 0% 0% / calc(1 - var(--active, 0))),
      0 0 0 calc(var(--active, 0) * 0.15rem) var(--primary-purple);

    transition: all var(--transtion);
    z-index: 0;
  }

  /* Light mode background override */
  html.light-mode & .button::before {
    background-color: #ffffff;
  }

  .button::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, var(--primary-purple) 0%, var(--accent-blue) 100%);
    opacity: var(--active, 0);
    border-radius: var(--border_radius);
    transition: opacity var(--transtion);
    z-index: 2;
  }

  .button:is(:hover, :focus-visible) {
    --active: 1;
  }
  .button:active {
    transform: scale(1);
  }

  .button .dots_border {
    --size_border: calc(100% + 2px);

    overflow: hidden;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: var(--size_border);
    height: var(--size_border);
    background-color: transparent;

    border-radius: var(--border_radius);
    z-index: -10;
  }

  .button .dots_border::before {
    content: "";
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform-origin: left;
    transform: rotate(0deg);

    width: 100%;
    height: 2rem;
    background-color: white;

    mask: linear-gradient(transparent 0%, white 120%);
    animation: rotate 2s linear infinite;
  }

  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }

  .button .button-icon {
    position: relative;
    z-index: 10;
    width: 1.5rem;
    height: 1.5rem;
    color: hsl(0, 0%, 100%);
  }
  html.light-mode & .button .button-icon {
    color: var(--text);
  }
  .button:is(:hover, :focus) .button-icon {
    color: hsl(0, 0%, 100%);
  }
  html.light-mode & .button:is(:hover, :focus) .button-icon {
    color: hsl(0, 0%, 100%);
  }

  /* Removed sparkle animation styles now that we use a static icon */

  .button .text_button {
    position: relative;
    z-index: 10;

    background-image: linear-gradient(
      90deg,
      hsl(0, 0%, 100%) 0%,
      hsl(0, 0%, 100%) 120%
    );
    background-clip: text;

    font-size: 18px;
    font-family: 'Noto Serif';
    color: transparent;
  }

  /* Light mode text color */
  :global(.light-mode) .button .text_button {
    background-image: linear-gradient(
      90deg,
      var(--text) 0%,
      var(--text) 120%
    );
  }

  /* Hover text color - dark mode default white already set above */
  .button:is(:hover, :focus) .text_button {
    background-image: linear-gradient(
      90deg,
      hsl(0, 0%, 100%) 0%,
      hsl(0, 0%, 100%) 120%
    );
  }

  /* Light mode text default and hover */
  html.light-mode & .button .text_button {
    background-image: linear-gradient(
      90deg,
      var(--text) 0%,
      var(--text) 120%
    );
  }
  html.light-mode & .button:is(:hover, :focus) .text_button {
    background-image: linear-gradient(
      90deg,
      hsl(0, 0%, 100%) 0%,
      hsl(0, 0%, 100%) 120%
    );
  }
`;

const CustomButton = ({ children, onClick, type = "button" }) => {
  return (
    <StyledWrapper>
      <button className="button" onClick={onClick} type={type}>
        <div className="dots_border" />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="button-icon" fill="currentColor">
          <path d="M2.25 6.75A2.25 2.25 0 0 1 4.5 4.5h15a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 19.5 19.5h-15A2.25 2.25 0 0 1 2.25 17.25V6.75Zm2.1-.75a.75.75 0 0 0-.6 1.2l7.05 5.64a.75.75 0 0 0 .93 0l7.05-5.64a.75.75 0 0 0-.6-1.2h-13.8Zm15.9 3.21-6.41 5.13a2.25 2.25 0 0 1-2.68 0L5.75 9.21v7.29c0 .414.336.75.75.75h11c.414 0 .75-.336.75-.75V9.21Z"/>
        </svg>
        <span className="text_button">{children}</span>
      </button>
    </StyledWrapper>
  );
};

export default CustomButton; 