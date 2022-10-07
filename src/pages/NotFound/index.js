import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';

import Moon from '../../assets/img/Moon.png';

export default function NotFound() {
	const navigate = useNavigate();
	return(
		<S.Container>
			<S.NotFound>
				<section>
					<div className="stars"></div>
					<div className='error404'>
						<span>4</span>
						<img src={Moon} alt='0'/>
						<span>4</span>
					</div>
					<div className='errorMessage'>
						<span>Oops! Parece que você se perdeu no espaço!</span>
						<button onClick={() => {navigate(-1);}}>Voltar</button>
					</div>
				</section>
			</S.NotFound>
		</S.Container>
	);
}