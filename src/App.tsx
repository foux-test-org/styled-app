import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme.ts";
import { GlobalStyle } from "./theme/GlobalStyle.ts";
import { Navbar } from "./components/Navbar/Navbar.tsx";
import { Home } from "./pages/Home.tsx";
import { About } from "./pages/About.tsx";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </ThemeProvider>
  );
}
