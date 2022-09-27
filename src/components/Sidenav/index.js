import React, { useState } from 'react';
import * as S from './styles';

import UserPreferences from './NavContent/UserPreferences';
import TicketManagement from './NavContent/TicketManagement';
import DataManagement from './NavContent/DataManagement';
import CustomizeApp from './NavContent/CustomizeApp';

import { ReactComponent as Open } from '../../assets/img/Open.svg';
import { ReactComponent as Close } from '../../assets/img/Close.svg';
import { ReactComponent as User } from '../../assets/img/User.svg';
import { ReactComponent as Ticket } from '../../assets/img/Ticket.svg';
import { ReactComponent as Database } from '../../assets/img/Database.svg';
import { ReactComponent as Edit } from '../../assets/img/Edit.svg';

export default function Sidenav() {
	const [aberto, setAberto] = useState(true);
	const [menuAberto, setMenuAberto] = useState(1);

	function abrirMenu(menu) {
		setMenuAberto(menu);
	}

	return (
		<S.Sidenav>
			<S.Sidebar>
				<li>
					{aberto ? (
						<Close onClick={() => setAberto(false)}/>
					) : (
						<Open onClick={() => setAberto(!aberto)}/>
					)}
				</li>
				<li>
					<User onClick={() => (abrirMenu(1), setAberto(aberto === false ? !aberto : aberto))}/>
				</li>
				<li>
					<Ticket onClick={() => (abrirMenu(2), setAberto(aberto === false ? !aberto : aberto))}/>
				</li>
				<li>
					<Database onClick={() => (abrirMenu(3), setAberto(aberto === false ? !aberto : aberto))}/>
				</li>
				<li>
					<Edit onClick={() => (abrirMenu(4), setAberto(aberto === false ? !aberto : aberto))}/>
				</li>
			</S.Sidebar>
			<S.NavContent className={
				aberto ? (
					'open'
				) : (
					'close'
				)
			}>
				{ menuAberto === 1 && <UserPreferences/>}
				{ menuAberto === 2 && <TicketManagement/>}
				{ menuAberto === 3 && <DataManagement/>}
				{ menuAberto === 4 && <CustomizeApp/>}
			</S.NavContent>
		</S.Sidenav>
	);
}