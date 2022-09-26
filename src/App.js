import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { GlobalStyle } from './components/Styles/global.js';
import { ThemeProvider } from 'styled-components'
import { purpleTheme } from './components/Styles/themes/themes'

import Sidenav from './components/Sidenav';
import Tickets from './pages/Tickets';
import DatacenterDashboard from './pages/DatacenterDashboard';
import NotFound from './pages/NotFound/index.js';


function App() {
  return (
    <Router>
      <ThemeProvider theme={purpleTheme}>
        <Sidenav/>
        <Routes>
          <Route path='/' element={<DatacenterDashboard/>}/>
          <Route path='tickets' element={<Tickets/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <GlobalStyle/>
      </ThemeProvider>
    </Router>
  );
}

export default App;
