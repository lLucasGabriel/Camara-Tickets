import React from 'react';
import * as S from './styles';

import PropTypes from 'prop-types';

Input.propTypes = {
	label: PropTypes.string,
	id: PropTypes.string,
	inputType: PropTypes.string,
};

export default function Input({label, id, inputType}) {
	return (
		<S.Fieldset>
			<S.Label htmlFor={id}>{label}</S.Label>
			<S.Input
				type={inputType} 
				name={id} 
				id={id}
				required
			/>
		</S.Fieldset>
	);
}