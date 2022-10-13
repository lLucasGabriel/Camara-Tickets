import React from 'react';
import * as S from './styles';

import PropTypes from 'prop-types';

Header.propTypes = {
	color: PropTypes.string,
};

import Brasao from '../../assets/img/brasão.png';
import SearchBar from '../Form/SearchBar';

import { ReactComponent as Profile } from '../../assets/img/Profile.svg';
import { ReactComponent as Arrow } from '../../assets/img/Arrow.svg';
import { ReactComponent as Notification } from '../../assets/img/Notification.svg';

export default function Header({ color }) {

	return (
		<S.Container className={color}>
			<S.Head className='title'>
				<S.Arms>
					<div>
						<img src={Brasao} alt=''/>
					</div>
				</S.Arms>
				<h1>CÂMARA TICKETS</h1>
			</S.Head>
			<SearchBar />
			<S.Tools>
				<Notification/>
				<Profile/>
				<S.UserTools>
					<img src='assets/img/user1.png' alt='user' className='profileImage'/>
					<S.Username>
						<p className='profileName'>Aldous Huxley</p>
						<p className='username'>Aldous Huxley</p>
					</S.Username>
					<Arrow/>
				</S.UserTools>
			</S.Tools>
		</S.Container>
	);
}