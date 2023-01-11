import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const slideIn = keyframes`
  from{
    transform: scaleX(0);
  }
  to{
    transform: scaleX(1);
  }
`;

const slideOut = keyframes`
  from{
    transform: scaleX(1);
  }
  to{
    transform: scaleX(0);
  }
`;

export const Link = styled.a`
  text-decoration: none;
  font-weight: 200;
  color: ${(props) => props.theme.colors.text};
  position: relative;
  user-select: none;

  ::after {
    content: "";
    pointer-events: none;

    position: absolute;
    ${(props) => `${props.side}: 0;`}
    bottom: -5px;
    left: 0;
    height: 2px;
    width: 100%;
    background-color: ${(props) => props.theme.colors.secondary};
    transform-origin: left;
    transition: transform 150ms linear;
    transform: scaleX(0);
  }

  :hover {
    color: ${(props) => props.theme.colors.secondary};
    cursor: pointer;
  }

  :hover::after {
    pointer-events: none;
    transition: transform 150ms 100ms linear;
    transform: scaleX(1);
    transform-origin: right;
    opacity: 1;
  }
`;
