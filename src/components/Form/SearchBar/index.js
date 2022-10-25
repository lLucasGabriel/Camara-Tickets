import React from 'react';
import * as S from './styles';

import { ReactComponent as Search } from '../../../assets/img/Search.svg';

import PropTypes from 'prop-types';

SearchBar.propTypes = {
	color: PropTypes.string,
};

export default function SearchBar({ color }) {
	return (
		<S.Fieldset className={color}>
			<S.Input
				type={'text'}
				name={'search'}
				id={'search'}
				placeholder={'BUSCAR'}
				required
			/>
			<S.Label htmlFor='search'>
				<S.Icon className={color}>
					<Search />
				</S.Icon>
			</S.Label>
		</S.Fieldset>
	);
}