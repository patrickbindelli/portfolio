import { useState } from "react";
import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/themes";
import { MainPage } from "./pages/MainPage";
import ThemeButton from "./components/ThemeButton";

function App() {
  const [theme, setTheme] = useState(darkTheme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <ThemeButton
          onClick={() =>
            theme === darkTheme ? setTheme(lightTheme) : setTheme(darkTheme)
          }
        />
        <MainPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
