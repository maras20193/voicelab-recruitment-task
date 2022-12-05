import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>voicelab recruitment task</div>
    </ThemeProvider>
  );
}

export default App;
