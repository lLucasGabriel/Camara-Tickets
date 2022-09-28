import React from 'react';
import * as S from './styles';

import PropTypes from 'prop-types';

Database.propTypes = {
	server: PropTypes.string,
};

export default function Database({server}) {
	return (
		<S.Database>
			<div className='block'>
				<p>SERVIDOR</p>
				<p>{server}</p>  
			</div>       
			<div className='block'></div>       
			<div className='block'></div>      
			<div className='block'></div>       
			<div className='block'>
				<div className='box'>
					<div className='inside'>
						<div className='dot'></div>
						<div className='dot'></div>
						<div className='dot'></div>
					</div>
				</div>
			</div>
		</S.Database>
	);
}
