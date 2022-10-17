import React from 'react';
import * as S from './styles';

import PropTypes from 'prop-types';

Status.propTypes = {
	status: PropTypes.string,
	text: PropTypes.string,
};

export default function Status({ status, text }) {

	function defineStatus(status) {
		const statusColor = {
			'Aberto': 'green',
			'Em Atendimento': 'orange',
			'Fechado': 'red',
  
			'Baixa': 'green',
			'Média': 'orange',
			'Alta': 'red',

			'Ativo': 'green',
			'Inativo': 'red'
		};
		return statusColor[status];
	}

	return (
		<S.Status>
			<p className={defineStatus(status)}>
          • {text}
			</p>
		</S.Status>
	);
}