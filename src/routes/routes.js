import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Tickets from '../pages/Tickets';
import DatacenterDashboard from '../pages/DatacenterDashboard';
import NotFound from '../pages/NotFound/index.js';
import NewTicket from '../pages/NewTicket';
import NewUser from '../pages/NewUser';
import Profile from '../pages/Profile';

export default function MainRoutes() {
	return (
		<>
			<Routes>
				<Route path='/' element={<DatacenterDashboard />} />
				<Route path='/tickets' element={<Tickets />} />
				<Route path='/newTicket' element={<NewTicket />} />
				<Route path='/newUser' element={<NewUser />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</>
	);
}
