import React from "react";
import { ThemeProvider } from "styled-components";
//import { Button } from "./components/button";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyle } from "./styles/global";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        {/*<Button variant="primary" />
        <Button variant="secondary" />
        <Button variant="danger" />
        <Button variant="success" />
        <Button />*/}
        <Router/>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
}
