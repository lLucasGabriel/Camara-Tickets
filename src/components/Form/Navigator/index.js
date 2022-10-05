import React from 'react';
import * as S from './styles';

import { ReactComponent as Ticket } from '../../../assets/img/Ticket.svg';
import { ReactComponent as Database } from '../../../assets/img/Database.svg';
import { ReactComponent as UserAdd } from '../../../assets/img/UserAdd.svg';
import { ReactComponent as Home } from '../../../assets/img/Home.svg';

export default function Navigator() {
	return (
		<S.Nav>
			<h2>CADASTRAR</h2>
			<ul>
				<S.ListTitle>Tickets</S.ListTitle>
				<S.ListItem className='active'>
					<Ticket/>
					Novo Ticket
				</S.ListItem>
				<S.ListItem>
					<Ticket/>
					Nova Categoria
				</S.ListItem>
			</ul>
			<ul>
				<S.ListTitle>Membros</S.ListTitle>
				<S.ListItem>
					<UserAdd/>
					Novo Membro
				</S.ListItem>
				<S.ListItem>
					<Home/>
					Novo Setor
				</S.ListItem>
			</ul>
			<ul>
				<S.ListTitle>Dispositivos de Rede</S.ListTitle>
				<S.ListItem>
					<Database/>
					Novo Dispositivo
				</S.ListItem>
			</ul>
		</S.Nav>
	);
}