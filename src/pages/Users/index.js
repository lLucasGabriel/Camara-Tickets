import React from 'react';
import * as S from './styles';

import { Link } from 'react-router-dom';

import Sidenav from '../../components/Sidenav';
import Header from '../../components/Header';
import Table from '../../components/Table';
import TableFooter from '../../components/Table/TableFooter';
import Status from '../../components/Table/Status';
import users from './users.json';
import SearchBar from '../../components/Form/SearchBar';
import Button from '../../components/Form/Button';

import { ReactComponent as User } from '../../assets/img/User.svg';
import { ReactComponent as Clock } from '../../assets/img/Clock.svg';
import { ReactComponent as Home } from '../../assets/img/Home.svg';
import { ReactComponent as Settings } from '../../assets/img/Settings.svg';
import { ReactComponent as Delete } from '../../assets/img/Delete.svg';

export default function Users() {
	return (
		<>
			<Header />
			<S.Container>
				<Sidenav />
				<S.Users>
					<h2>MEMBROS</h2>
					<S.TableSection>
						<div className='head'>
							<Link to={'/newUser'}>
								<Button value='Novo Membro' />
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
											<User />
											<p>NOME</p>
										</div>
									</th>
									<th>
										<div>
											<Home />
											<p>SETOR</p>
										</div>
									</th>
									<th>
										<div>
											<User />
											<p>CPF</p>
										</div>
									</th>
									<th>
										<div>
											<Clock />
											<p>DATA DE INICIO</p>
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
								{users.map(user => (
									<tr key={user.id}>
										<td>{user.id}</td>
										<td>
											<div className='user'>
												<img className='userImage' src={user.img} alt='User' />
												<p className='requester'>
													<span>{user.user.username}</span>
													<span>{user.user.email}</span>
												</p>
											</div>
										</td>
										<td>
											<p className='local'>
												<span>{user.local.floor}</span>
												<span>{user.local.sector}</span>
											</p>
										</td>
										<td>{user.user.cpf}</td>
										<td>{user.date}</td>
										<td>
											<Status status={user.status} text={user.status} />
										</td>
										<td className='tools'>
											<Settings />
											<Delete />
										</td>
									</tr>
								))}
							</tbody>
						</Table>
						<TableFooter />
					</S.TableSection>
				</S.Users>
			</S.Container>
		</>
	);
}