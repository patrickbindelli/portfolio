import React from "react";
import { Container, Link } from "./styles";

export const MenuItem = ({ side, text, href }) => {
  return (
    <Container>
      <Link href="#">{text}</Link>
    </Container>
  );
};
