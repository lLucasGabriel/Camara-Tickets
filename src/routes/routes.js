import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Tickets from '../pages/Tickets';
import DatacenterDashboard from '../pages/DatacenterDashboard';
import NotFound from '../pages/NotFound/index.js';

import RegisterTicket from '../pages/RegisterTicket';

export default function MainRoutes() {
	return (
		<Routes>
			<Route path='/' element={<DatacenterDashboard />} />
			<Route path='tickets' element={<Tickets />} />
			<Route path='registerTicket' element={<RegisterTicket />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
}
