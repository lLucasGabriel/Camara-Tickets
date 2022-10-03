import React from 'react';
import * as S from './styles';

import PropTypes from 'prop-types';

Fieldset.propTypes = {
	label: PropTypes.string,
	id: PropTypes.string,
	inputType: PropTypes.string,
};

export default function Fieldset({label, id, inputType}) {
	return (
		<S.Fieldset>
			<S.Input
				type={inputType} 
				name={id} 
				id={id}
				required
			/>
			<S.Label htmlFor={id}>{label}</S.Label>
		</S.Fieldset>
	);
}