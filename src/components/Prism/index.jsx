import React from "react";
import { Container } from "./styles";
import { motion } from "framer-motion";
import { Triangle, InvertedTriangle } from "../Triangle";
export const Prism = () => {
  const psrimVariant = {
    hidden: {
      scale: 1.2,
      x: -100,
      position: "absolute",
    },
    visible: {
      scale: 1,
      rotateY: 360,
      translateX: 0,
      x: 0,
      transition: {
        rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
        scale: { delay: 0, duration: 1.5, ease: "easeInOut" },
        translateX: { duration: 5, ease: "easeInOut" },
      },
    },
  };

  const width = 200;
  const height = 300;

  return (
    <Container>
      <div className="scene">
        <motion.div
          initial="hidden"
          animate="visible"
          whileHover="hover"
          variants={psrimVariant}
          className="pyramid"
          onClick={() => {}}
        >
          <div className="top">
            <div className="face topfront">
              <Triangle
                height={height}
                width={width}
                stroke={"white"}
                strokeWidth={2}
                fillOpacity={"50%"}
              />
            </div>
            <div className="face topright">
              <Triangle
                height={height}
                width={width}
                stroke={"white"}
                strokeWidth={2}
                fillOpacity={"50%"}
              />
            </div>
            <div className="face topback">
              <Triangle
                height={height}
                width={width}
                stroke={"white"}
                strokeWidth={2}
                fillOpacity={"50%"}
              />
            </div>
            <div className="face topleft">
              <Triangle
                height={height}
                width={width}
                stroke={"white"}
                strokeWidth={2}
                fillOpacity={"50%"}
              />
            </div>
          </div>
          <div className="bottom">
            <div className="face bottomfront">
              <InvertedTriangle
                height={height}
                width={width}
                stroke={"white"}
                strokeWidth={2}
                fillOpacity={"50%"}
              />
            </div>
            <div className="face bottomright">
              <InvertedTriangle
                height={height}
                width={width}
                stroke={"white"}
                strokeWidth={2}
                fillOpacity={"50%"}
              />
            </div>
            <div className="face bottomback">
              <InvertedTriangle
                height={height}
                width={width}
                stroke={"white"}
                strokeWidth={2}
                fillOpacity={"50%"}
              />
            </div>
            <div className="face bottomleft">
              <InvertedTriangle
                height={height}
                width={width}
                stroke={"white"}
                strokeWidth={2}
                fillOpacity={"50%"}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  );
};
