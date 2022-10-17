import React from 'react';
import * as S from './styles';

import Sidenav from '../../components/Sidenav';
import Header from '../../components/Header';
import ticket from './ticket.json';
import Status from '../../components/Table/Status';
import Textarea from '../../components/Form/Textarea';

export default function Support() {
	return (
		<>
			<Header />
			<S.Container>
				<Sidenav />
				<S.Support>
					<h2>ATENDIMENTO</h2>
					{ticket.map(ticket => (
						<>
							<S.Ticket key={ticket.id}>
								<header>{ticket.request}</header>
								<ul>
									<li>
										<p>CATEGORIA</p>
										<p>{ticket.category}</p>
									</li>
									<li>
										<p>SOLICITANTE</p>
										<p>{ticket.requester.name}</p>
									</li>
									<li>
										<p>LOCAL</p>
										<p>{ticket.local.sector}</p>
									</li>
									<li>
										<p>CRIADO POR</p>
										<p>{ticket.creator}</p>
									</li>
									<li>
										<p>PRIORIDADE</p>
										<p>{ticket.priority}</p>
									</li>
									<li>
										<p>STATUS</p>
										<p>{ticket.status}</p>
									</li>
								</ul>
								<img src='assets/img/error.png' alt='image' />
							</S.Ticket>
							<S.Attendance>
								<header>
									<span>Atividade Recente</span>
									<span>Aberto em {ticket.date}</span>
								</header>
								<S.Chat>
									<div className='chatbox'>
										<div>
											<img src='assets/img/user2.png' alt='user' />
											<div className='header'>
												<span>
													{ticket.date}
													<br />
													<strong>Ticket fechado por Shairon Hosokawa</strong>
												</span>
												<Status status={'Fechado'} text={'Fechado'} />
											</div>
											<p className='message'>{ticket.message}</p>
										</div>
									</div>
								</S.Chat>
								<S.Form>
									<Textarea label={'Iniciar Atendimento'} id={'attendance'}/>
								</S.Form>
							</S.Attendance>
						</>
					))}
				</S.Support>
			</S.Container>
		</>
	);
}