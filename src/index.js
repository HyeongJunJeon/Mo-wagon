import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import theme from "./styles/Theme";
import GlobalStyle from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
);
