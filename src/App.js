import React, { useState } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './components/Styles/global.js';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './components/Styles/themes/themes';

import { ReactComponent as ThemeOn } from './assets/img/themeOn.svg';
import { ReactComponent as ThemeOff } from './assets/img/themeOff.svg';

import MainRoutes from './routes/routes.js';

export default function App() {
	const [ themeColor, setThemeColor ] = useState(true);
	const toggleTheme = () => {
		setThemeColor(!themeColor);
	};
	return (
		<ThemeProvider theme={themeColor ? lightTheme : darkTheme}>
			<button className='themeSwitcher' onClick={toggleTheme}>
				{themeColor === true && <ThemeOff />}
				{themeColor === false && <ThemeOn />}
			</button>
			<Router>
				<MainRoutes />
			</Router>
			<GlobalStyle />
		</ThemeProvider>
	);
}