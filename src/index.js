import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import theme from "./styles/Theme";
import GlobalStyle from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </>
);
