import React from 'react';
import * as S from './styles';

import NavContentTitle from '../NavContentTitle';

import { ReactComponent as UserEdit } from '../../../../assets/img/UserEdit.svg';
import { ReactComponent as UserAdd } from '../../../../assets/img/UserAdd.svg';
import { ReactComponent as Logout } from '../../../../assets/img/Logout.svg';

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
			<li className='navLink'>
				<UserEdit/>
				<p>Editar Informações</p>
			</li>
			<li className='navLink'>
				<UserAdd/>
				<p>Adicionar Membro</p>
			</li>
			<li className='navLink'>
				<Logout/>
				<p>Sair</p>
			</li>
		</S.NavList>
	);
}