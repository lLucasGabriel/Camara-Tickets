import React from 'react';
import Container from './components/Container/index.jsx';
import Sidenav from './components/Sidenav/index.jsx';
import { ThemeProvider } from 'styled-components'
import { burocraticTheme, purpleTheme, orangeTheme } from './components/Styles/themes/themes'
import { GlobalStyle } from './components/Styles/global.js';

function App() {
  return (
    <ThemeProvider theme={purpleTheme}>
      <Sidenav/>
      <Container/>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
