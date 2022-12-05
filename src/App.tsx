import { ThemeProvider } from "styled-components";
import { CharactersPage } from "./pages";
import { GlobalStyle, theme } from "./styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CharactersPage />
    </ThemeProvider>
  );
}

export default App;
