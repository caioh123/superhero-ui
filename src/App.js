import "./App.css";
import { GlobalStyles } from "./globalStyles";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./static/styles";

import RoutesComponent from "./routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <RoutesComponent />;
        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
