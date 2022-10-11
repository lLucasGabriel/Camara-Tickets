import React from 'react';
import * as S from './styles';

import PropTypes from 'prop-types';

Table.propTypes = {
	children: PropTypes.func,
};

export default function Table({ children }) {
	return (
		<S.Table>
			{ children }
		</S.Table>
	);
}