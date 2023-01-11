import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const drawTriangle = keyframes`
  0% {
    fill-opacity: 0%;
    stroke-opacity: 0%;
  }
  50%{
    fill-opacity: 0%;
    stroke-opacity: 50%;
    stroke-dashoffset: 0;
  }
  100% {
    fill-opacity: 50%;
    stroke-opacity: 50%;
    stroke-dashoffset: 0;
  }
`;

export const SVGContainer = styled(motion.svg)`
  height: ${(props) => props.height};
  width: ${(props) => props.width};

  polygon {
    fill: ${({ fill, theme }) => (fill ? fill : theme.colors.secondary)};
    fill-opacity: 0;
    stroke: ${({ theme }) => theme.colors.text};
    stroke-opacity: 0;
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: ${drawTriangle} 3s 250ms linear forwards;
    stroke-width: ${(props) => props.strokeWidth};
  }
`;
