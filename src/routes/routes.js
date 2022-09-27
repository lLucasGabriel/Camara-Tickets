import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Tickets from '../pages/Tickets';
import DatacenterDashboard from '../pages/DatacenterDashboard';
import NotFound from '../pages/NotFound/index.js';
import Sidenav from '../components/Sidenav';

export default function MainRoutes() {
	return (
		<>
			<Sidenav/>
			<Routes>
				<Route path='/' element={<DatacenterDashboard />} />
				<Route path='/tickets' element={<Tickets />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</>
	);
}
