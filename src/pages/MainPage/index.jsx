import React from "react";
import { Menu } from "../../components/Menu";
import { Container, Content, PrismContainer, Title } from "./styles";
import { Prism } from "../../components/Prism";
import { motion } from "framer-motion";

export const MainPage = () => {
  const titleVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        opacity: { duration: 0.5, delay: 2, ease: "easeInOut" },
      },
    },
  };

  return (
    <Container exit="exit">
      <Menu />
      <Content>
        <Title
          as={motion.div}
          initial="hidden"
          animate="visible"
          variants={titleVariant}
        >
          <p>Desenvolvedor Fullstack</p>
          <h1>Patrick Bindelli</h1>
        </Title>
        <PrismContainer>
          <Prism />
        </PrismContainer>
      </Content>
    </Container>
  );
};
