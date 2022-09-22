import React from "react";
import * as S from './styles'

import { ReactComponent as Arrow } from '../../../assets/img/Arrow.svg';

export default function TableFooter() {
    return(
        <S.TableFooter>
          <div className='lineManagement'>
            <p>Mostrar linhas por página</p>
            <button>10<Arrow/></button>
          </div>
          <div className='backForward'>
            <p>1 - 6 de 26</p>
            <button className='back'><Arrow/></button>
            <button className='forward'><Arrow/></button>
          </div>            
        </S.TableFooter>
    )
}