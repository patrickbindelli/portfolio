import React from "react";
import { SVGContainer } from "./styles";

export const Triangle = ({
  height,
  width,
  fill,
  stroke,
  fillOpacity,
  strokeWidth,
}) => {
  const variant = {
    hidden: {
      offsetDistance: 0,
    },
    visible: {
      offsetDistance: 1,
      transition: { delay: 1, duration: 2 },
    },
  };
  return (
    <SVGContainer
      height={height}
      width={width}
      fill={fill}
      stroke={stroke}
      fillOpacity={fillOpacity}
      strokeWidth={strokeWidth}
      initial="hidden"
      animate="visible"
      variants={variant}
    >
      <polygon points={`${width / 2},0 0,${height} ${width},${height}`} />
    </SVGContainer>
  );
};

export const InvertedTriangle = ({
  height,
  width,
  fill,
  stroke,
  fillOpacity,
  strokeWidth,
}) => {
  const variant = {
    hidden: {
      offsetDistance: 0,
    },
    visible: {
      offsetDistance: 1,
      transition: { delay: 1, duration: 2 },
    },
  };
  return (
    <SVGContainer
      height={height}
      width={width}
      fill={fill}
      stroke={stroke}
      fillOpacity={fillOpacity}
      strokeWidth={strokeWidth}
      initial="hidden"
      animate="visible"
      variants={variant}
    >
      <polygon points={`${width / 2},${height} 0,0 ${width},0`} />
    </SVGContainer>
  );
};
