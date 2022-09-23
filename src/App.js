import React from 'react';

import { GlobalStyle } from './components/Styles/global.js';
import { ThemeProvider } from 'styled-components'
import { purpleTheme } from './components/Styles/themes/themes'

import Tickets from './pages/Tickets/index.js';
import Sidenav from './components/Sidenav/index.js';


function App() {
  return (
    <ThemeProvider theme={purpleTheme}>
      <Sidenav/>
      <Tickets/>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
