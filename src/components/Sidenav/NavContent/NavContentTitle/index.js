import React from 'react';
import * as S from './styles';

import PropTypes from 'prop-types';

NavContentTitle.propTypes = {
	title: PropTypes.string,
};

export default function NavContentTitle({title}) {
	return (
		<S.NavContentTitle>
			{title}
		</S.NavContentTitle>
	);
}