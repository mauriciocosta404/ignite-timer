import { ThemeProvider } from "styled-components";
import { Button } from "./components/button";
import { defaultTheme } from "./styles/theme/default";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="primary"/>
      <Button variant="secondary"/>
      <Button variant="danger"/>
      <Button variant="success"/>
      <Button/>
    </ThemeProvider>
  )
}