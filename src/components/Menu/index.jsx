import React from "react";
import { MenuItem } from "../MenuItem";
import { Container } from "./styles";

export const Menu = () => {
  return (
    <Container>
      <MenuItem text={"Sobre"} side={"left"} href={"/about"} />
      <MenuItem text={"Skills"} side={"left"} href={"#"} />
      <MenuItem text={"Projetos"} side={"left"} href={"#"} />
      <MenuItem text={"Contato"} side={"left"} href={"#"} />
    </Container>
  );
};
