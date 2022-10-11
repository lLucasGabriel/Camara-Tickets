import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';

import NavContentTitle from '../NavContentTitle';
import OptionButton from '../../../Form/OptionButton';

import { ReactComponent as Add } from '../../../../assets/img/Add.svg';
import { ReactComponent as Ticket } from '../../../../assets/img/Ticket.svg';

export default function TicketManagement() {
	return (
		<S.NavList>
			<li>
				<NavContentTitle title="Gerenciar Tickets"/>
			</li>
			<Link to={'/newTicket'}>
				<li className='navLink'>
					<Add/>
					<p>Novo Ticket</p>
				</li>
			</Link>
			<Link to={'/tickets'}>
				<li className='navLink'>
					<Ticket/>
					<p>Tickets</p>
				</li>
			</Link>
			<li>
				<NavContentTitle title="Configurações"/>
			</li>
			<OptionButton/>
		</S.NavList>
	);
}