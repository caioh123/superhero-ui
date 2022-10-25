import "./App.css";
import { GlobalStyles } from "./globalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./static/styles";

import { Home } from "./pages/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />;
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
