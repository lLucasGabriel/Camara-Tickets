import React from 'react';
import * as S from './styles';

import Sidenav from '../../components/Sidenav';
import Header from '../../components/Header';
import Table from '../../components/Table';
import Thead from '../../components/Table/Thead';
import Tbody from '../../components/Table/Tbody';
import TableFooter from '../../components/Table/TableFooter';

import { ReactComponent as Search } from '../../assets/img/Search.svg';

export default function Tickets() {
	return (
		<>
			<Header />
			<S.Container>  
				<Sidenav />
				<S.Tickets>
					<h2>Tickets</h2>
					<S.TicketsTable>
						<div className='head'>
							<fieldset className='search'>
								<label htmlFor="search">
									<Search/>
								</label>
								<input type="text" name='search' placeholder='Filtre por título, local ou solicitante'/>
							</fieldset>
							<button>+ Novo Ticket</button>
						</div>
						<Table>
							<Thead/>
							<Tbody/>
						</Table>
						<TableFooter/>
					</S.TicketsTable>
				</S.Tickets>
			</S.Container>
		</>
	);
}