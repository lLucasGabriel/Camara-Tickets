import React from 'react';
import * as S from './styles';

import PropTypes from 'prop-types';

Textarea.propTypes = {
	label: PropTypes.string,
	id: PropTypes.string,
};

export default function Textarea({label, id}) {
	return(
		<S.Fieldset>
			<S.Input 
				name={id}
				id={id}
				cols={'30'}
				rows={'10'}
				required
			></S.Input>
			<S.Label htmlFor={id}>{label}</S.Label>
		</S.Fieldset>
	);
}