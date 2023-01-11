import React, { useState } from "react";
import { Container } from "./styles";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function ThemeButton({ onClick }) {
  const [darkMode, setDarkMode] = useState(false);

  const handleOnClick = () => {
    setDarkMode(!darkMode);
    onClick();
  };

  const iconSize = 35;

  return (
    <Container onClick={handleOnClick}>
      {darkMode ? (
        <MdDarkMode size={iconSize} />
      ) : (
        <MdLightMode size={iconSize} />
      )}
    </Container>
  );
}
