import React from 'react';

import { GlobalStyle } from './components/Styles/global.js';
import { ThemeProvider } from 'styled-components'
import { burocraticTheme, purpleTheme, orangeTheme } from './components/Styles/themes/themes'

import Sidenav from './components/Sidenav/index.jsx';
import DatacenterDashboard from './pages/DatacenterDashboard/index.js';
import Tickets from './pages/Tickets/index.js';


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
