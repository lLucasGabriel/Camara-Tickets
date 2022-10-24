import React from 'react';
import * as S from './styles';

import Header from '../../components/Header';
import Sidenav from '../../components/Sidenav';
import Input from '../../components/Form/Input';

export default function Profile() {
	return (
		<>
			<Header/>
			<S.Container>
				<Sidenav />
				<main>
					<S.Section>
						<S.Settings>
							<S.Header>
								<h2 style={{ color: 'white' }}>Minha Conta</h2>
							</S.Header>
							<h3>Suas Informações</h3>
							<form>
								<Input
									label={'Nome Completo'}
									id={'name'}
									inputType={'text'}
								/>
								<Input
									label={'Nascimento'}
									id={'birthday'}
									inputType={'text'}
								/>
								<Input
									label={'CPF'}
									id={'cpf'}
									inputType={'text'}
								/>
								<Input
									label={'Registro CMS'}
									id={'register'}
									inputType={'text'}
								/>
								<Input
									label={'Email'}
									id={'email'}
									inputType={'email'}
								/>
								<Input
									label={'Origem'}
									id={'origin'}
									inputType={'text'}
								/>
							</form>
						</S.Settings>
						<S.Card>
							<S.Header>
								<h2>Perfil</h2>
							</S.Header>
							<img src='assets/img/user1.png' alt='user' className='profileImage'/>
							<ul>
								<li>
									<span>2</span>
									<span>Tickets sob responsabilidade</span>
								</li>
								<li>
									<span>12</span>
									<span>Tickets abertos</span>
								</li>
								<li>
									<span>42</span>
									<span>Atendimentos realizados</span>
								</li>
							</ul>
						</S.Card>
					</S.Section>
				</main>
			</S.Container>
		</>
	);
}