import React from 'react';
import * as S from './styles';

import { ReactComponent as ArrowGray } from '../../../assets/img/ArrowGray.svg';

export default function TableFooter() {
	return(
		<S.TableFooter>
			<div className='lineManagement'>
				<p>Mostrar linhas por página</p>
				<button>10<ArrowGray/></button>
			</div>
			<div className='backForward'>
				<p>1 - 6 de 26</p>
				<button className='back'><ArrowGray/></button>
				<button className='forward'><ArrowGray/></button>
			</div>            
		</S.TableFooter>
	);
}