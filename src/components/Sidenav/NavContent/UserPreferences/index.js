import React from 'react';
import * as S from './styles';

import NavContentTitle from '../NavContentTitle';

import { ReactComponent as UserEdit } from '../../../../assets/img/UserEdit.svg';
import { ReactComponent as UserAdd } from '../../../../assets/img/UserAdd.svg';
import { ReactComponent as Logout } from '../../../../assets/img/Logout.svg';
import { Link } from 'react-router-dom';

export default function UserPreferences() {
	return (
		<S.NavList>
			<li>
				<NavContentTitle title="Preferências"/>
			</li>
			<S.ProfileTemplate>
				<div className='profileBackground'></div>
				<img src={'assets/img/user1.png'} className='profileImage' alt='User'/>
				<h2 className='profileName'>Aldous Huxley</h2>
			</S.ProfileTemplate>
			<Link to={'/'}>
				<li className='navLink'>
					<UserEdit/>
					<p>Editar Informações</p>
				</li>
			</Link>
			<Link to={'/users'}>
				<li className='navLink'>
					<UserEdit/>
					<p>Todos os Membros</p>
				</li>
			</Link>
			<Link to={'/newUser'}>
				<li className='navLink'>
					<UserAdd/>
					<p>Adicionar Membro</p>
				</li>
			</Link>
			<li className='navLink'>
				<Logout/>
				<p>Sair</p>
			</li>
		</S.NavList>
	);
}