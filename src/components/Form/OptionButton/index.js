import React from 'react';
import * as S from './styles';

export default function OptionButton({description}) {
	return (
		<>
			<S.Button className='Option'>
				<div className='toggle off'></div>
			</S.Button>
			<p>{description}</p>
		</>
	);
}