import React from 'react';
import * as S from './styles';

import { ReactComponent as Search } from '../../../assets/img/Search.svg';

export default function SearchBar() {
	return(
		<S.Fieldset>
			<S.Input
				type={'text'} 
				name={'search'} 
				id={'search'}
				placeholder={'BUSCAR'}
				required
			/>
			<S.Label htmlFor='search'>
				<Search />
			</S.Label>
		</S.Fieldset>
	);
}