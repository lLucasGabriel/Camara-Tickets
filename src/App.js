import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { GlobalStyle } from './components/Styles/global.js';
import { ThemeProvider } from 'styled-components';
import { purpleTheme } from './components/Styles/themes/themes';

import MainRoutes from './routes/routes.js';

export default function App() {
	return (
		<ThemeProvider theme={purpleTheme}>
			<Router>
				<MainRoutes/>
			</Router>
			<GlobalStyle/>
		</ThemeProvider>
	);
}