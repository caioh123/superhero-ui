import "./App.css";
import { GlobalStyles } from "./globalStyles";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./static/styles";
import RoutesComponent from "./routes";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <RoutesComponent />;
        <GlobalStyles />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
