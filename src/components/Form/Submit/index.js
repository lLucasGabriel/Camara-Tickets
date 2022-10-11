import React from 'react';
import * as S from './styles';

import PropTypes from 'prop-types';

Submit.propTypes = {
	id: PropTypes.string,
	value: PropTypes.string,
};

export default function Submit({ id, value }) {
	return (
		<S.Input
			type={'submit'}
			name={id}
			id={id}
			value={value}
			required
		/>
	);
}