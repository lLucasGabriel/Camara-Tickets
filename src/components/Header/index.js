import React from 'react';
import * as S from './styles';

import Brasao from '../../assets/img/brasão.png';

import { ReactComponent as Profile } from '../../assets/img/Profile.svg';
import { ReactComponent as Arrow } from '../../assets/img/Arrow.svg';
import { ReactComponent as Notification } from '../../assets/img/Notification.svg';


export default function Header() {
	return (
		<S.Head>
			<div className='title'>
				<img src={Brasao} alt=''/>
				<h1>NETADMIN CENTRAL DE ATENDIMENTO</h1>
			</div>
			<div className='userTools'>
				<Profile/>
				<div className='userProfile'>
					<div className='profileImage'></div>
					<p className='profileName'>Aldous Huxley</p>
					<Arrow/>
				</div>
				<Notification/>
			</div>
		</S.Head>
	);
}