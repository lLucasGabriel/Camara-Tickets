import React from 'react';
import * as S from './styles';

import NavContentTitle from '../NavContentTitle';

import { ReactComponent as BurocraticTheme } from '../../../../assets/img/BurocraticTheme.svg';
import { ReactComponent as PurpleTheme } from '../../../../assets/img/PurpleTheme.svg';
import { ReactComponent as OrangeTheme } from '../../../../assets/img/OrangeTheme.svg';

export default function CustomizeApp() {
	return (
		<S.NavList>
			<li>
				<NavContentTitle title="Personalizar"/>
			</li>
			<li className='navLink' onClick={() => localStorage.setItem('theme', 'burocraticTheme')}>
				<BurocraticTheme/>
				<p>Burocratic</p>
			</li>
			<li className='navLink'onClick={() => localStorage.setItem('theme', 'purpleTheme')}>
				<PurpleTheme/>
				<p>Midnight Purple</p>
			</li>
			<li className='navLink'onClick={() => localStorage.setItem('theme', 'orangeTheme')}>
				<OrangeTheme/>
				<p>Orange</p>
			</li>
		</S.NavList>
	);
}