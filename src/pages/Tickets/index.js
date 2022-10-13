import React from 'react';
import * as S from './styles';

import { Link } from 'react-router-dom';

import Sidenav from '../../components/Sidenav';
import Header from '../../components/Header';
import Table from '../../components/Table';
import TableFooter from '../../components/Table/TableFooter';
import Status from '../../components/Table/Status';
import tickets from './tickets.json';
import SearchBar from '../../components/Form/SearchBar';
import Button from '../../components/Form/Button';

import { ReactComponent as Support } from '../../assets/img/Support.svg';
import { ReactComponent as Heart } from '../../assets/img/Heart.svg';
import { ReactComponent as User } from '../../assets/img/User.svg';
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
					<h2>TICKETS</h2>
					<S.TableSection>
						<div className='head'>
							<Link to={'/newTicket'}>
								<Button value='Novo Ticket' />
							</Link>
							<SearchBar color='gray' />
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
											<User />
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