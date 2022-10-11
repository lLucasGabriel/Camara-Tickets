import React from 'react';
import * as S from './styles';

import Sidenav from '../../components/Sidenav';
import Header from '../../components/Header';
import Table from '../../components/Table';
import TableFooter from '../../components/Table/TableFooter';
import Status from '../../components/Table/Status';
import tickets from './tickets.json';

import { ReactComponent as Search } from '../../assets/img/Search.svg';
import { ReactComponent as Support } from '../../assets/img/Support.svg';
import { ReactComponent as Heart } from '../../assets/img/Heart.svg';
import { ReactComponent as Profile } from '../../assets/img/Profile.svg';
import { ReactComponent as Ticket } from '../../assets/img/Ticket.svg';
import { ReactComponent as Clock } from '../../assets/img/Clock.svg';
import { ReactComponent as Home } from '../../assets/img/Home.svg';

export default function Tickets() {
	return (
		<>
			<Header />
			<S.Container>
				<Sidenav />
				<S.Tickets>
					<h2>Tickets</h2>
					<S.TableSection>
						<div className='head'>
							<fieldset className='search'>
								<label htmlFor="search">
									<Search />
								</label>
								<input type="text" name='search' placeholder='Filtre por título, local ou solicitante' />
							</fieldset>
							<button>+ Novo Ticket</button>
						</div>
						<Table>
							<thead>
								<tr>
									<th>
										#
									</th>
									<th>
										<div>
											<Ticket />
											<p>TÍTULO</p>
										</div>
									</th>
									<th>
										<div>
											<Profile />
											<p>SOLICITANTE</p>
										</div>
									</th>
									<th>
										<div>
											<Clock />
											<p>PRIORIDADE</p>
										</div>
									</th>
									<th>
										<div>
											<Home />
											<p>LOCAL</p>
										</div>
									</th>
									<th>
										<div>
											<Clock />
											<p>ABERTURA</p>
										</div>
									</th>
									<th>
										<div>
											<Clock />
											<p>STATUS</p>
										</div>
									</th>
									<th>
									</th>
								</tr>
							</thead>
							<tbody>
								{tickets.map(ticket => (
									<tr key={ticket.id}>
										<td>{ticket.id}</td>
										<td>{ticket.request}</td>
										<td>
											<div className='user'>
												<img className='userImage' src={ticket.img} alt='User' />
												<p className='requester'>
													<span>{ticket.requester.name}</span>
													<span>{ticket.requester.email}</span>
												</p>
											</div>
										</td>
										<td>
											<Status status={ticket.priority} text={ticket.priority} />
										</td>
										<td>
											<p className='local'>
												<span>{ticket.local.floor}</span>
												<span>{ticket.local.sector}</span>
											</p>
										</td>
										<td>
											<p>{ticket.date}</p>
										</td>
										<td>
											<Status status={ticket.status} text={ticket.status} />
										</td>
										<td>
											<Support />
											<Heart />
										</td>
									</tr>
								))}
							</tbody>
						</Table>
						<TableFooter />
					</S.TableSection>
				</S.Tickets>
			</S.Container>
		</>
	);
}