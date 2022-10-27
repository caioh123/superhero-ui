import "./App.css";
import { GlobalStyles } from "./globalStyles";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./static/styles";

import { Home } from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Home />;
        <GlobalStyles />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
