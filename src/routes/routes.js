import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Profile from '../pages/Profile';
import DatacenterDashboard from '../pages/DatacenterDashboard';
import Ticket from '../pages/Ticket';
import NotFound from '../pages/NotFound/index.js';
import NewTicket from '../pages/NewTicket';
import Tickets from '../pages/Tickets';
import NewUser from '../pages/NewUser';
import Users from '../pages/Users';

export default function MainRoutes() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Profile />} />
				<Route path='/datacenterDashboard' element={<DatacenterDashboard />} />
				<Route path='/ticket' element={<Ticket />} />
				<Route path='/tickets' element={<Tickets />} />
				<Route path='/newTicket' element={<NewTicket />} />
				<Route path='/users' element={<Users />} />
				<Route path='/newUser' element={<NewUser />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</>
	);
}
