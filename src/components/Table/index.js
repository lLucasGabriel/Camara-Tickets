import React from 'react';
import * as S from './styles';

import Tbody from './Tbody';
import Thead from './Thead';

export default function Table() {
	return (
		<S.Table>
			<Thead/>
			<Tbody/>
		</S.Table>
	);
}