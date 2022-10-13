import React from 'react';
import * as S from './styles';

import Header from '../../components/Header';
import Sidenav from '../../components/Sidenav';

export default function Profile() {
	return (
		<>
			<Header color='transparent' />
			<S.Container>
				<Sidenav />
				<main>
					<S.Section>
						<S.Settings>
						</S.Settings>
						<S.Card>
						
						</S.Card>
					</S.Section>
				</main>
			</S.Container>
		</>
	);
}