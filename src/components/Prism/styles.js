import styled from "styled-components";

const height = 300;
const width = 200;
const deg = 19.5;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: ${height}px;
  width: ${width}px;

  font-size: 100px;

  perspective: 10em;
  perspective-origin: 50% calc(50% - 2em);

  .scene {
    position: relative;
    transform-style: preserve-3d;
  }

  .pyramid {
    position: absolute;
    top: -${height}px;
    left: -${width / 2}px;
    display: flex;
    flex-direction: column;

    transform-style: preserve-3d;

    .top,
    .bottom {
      position: relative;
      height: ${height}px;
      width: ${width}px;
      transform-style: preserve-3d;
      .face {
        position: absolute;
        width: 100%;
        height: 100%;
      }
    }
  }

  .floor {
    position: absolute;
    top: 3em;
    transform: translate(-50%, -50%) rotateX(90deg);
    width: 15em;
    height: 15em;
    background-image: repeating-conic-gradient(
      from 45deg,
      #111 0deg 90deg,
      #222 90deg 180deg
    );
    background-size: 1em 1em;
  }

  .top .face {
    transform-origin: bottom center;
  }

  .bottom .face {
    transform-origin: top center;
  }

  .topfront {
    transform: translateZ(${width / 2}px) rotateX(${deg}deg);
  }
  .topright {
    transform: rotateY(90deg) translateZ(${width / 2}px) rotateX(${deg}deg);
  }
  .topback {
    transform: rotateY(180deg) translateZ(${width / 2}px) rotateX(${deg}deg);
  }
  .topleft {
    transform: rotateY(270deg) translateZ(${width / 2}px) rotateX(${deg}deg);
  }

  .bottomfront {
    transform: translateZ(${width / 2}px) rotateX(-${deg}deg);
  }
  .bottomright {
    transform: rotateY(90deg) translateZ(${width / 2}px) rotateX(-${deg}deg);
  }
  .bottomback {
    transform: rotateY(180deg) translateZ(${width / 2}px) rotateX(-${deg}deg);
  }
  .bottomleft {
    transform: rotateY(270deg) translateZ(${width / 2}px) rotateX(-${deg}deg);
  }
`;
