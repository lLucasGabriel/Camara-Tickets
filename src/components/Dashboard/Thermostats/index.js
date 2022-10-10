import React from 'react';
import * as S from './styles';

import PropTypes from 'prop-types';

Thermostats.propTypes = {
	server: PropTypes.string,
};

export default function Thermostats({server}) {
	return (
		<S.Container>
			<p className='server'>{server}</p>
			<p className='title'>TEMPERATURA</p>
			<S.Thermostats>
				<S.TemperatureThermostat>
					<div className='color'>
						<div className='values'>
							<span className='legend'>Max 28</span>
							<span className='value'>24</span>
							<span className='legend'>Calor</span>
						</div>
						<div className='divisor'></div>
					</div>
				</S.TemperatureThermostat>
				<S.UmidityThermostat>
					<div className='color'>
						<div className='values'>
							<span className='value'>25%</span>
							<span className='legend'>Umidade</span>
						</div>
						<div className='divisor'></div>
					</div>
				</S.UmidityThermostat>
			</S.Thermostats>
		</S.Container>
	);
}