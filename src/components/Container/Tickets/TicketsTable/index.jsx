import React from 'react'
import styled from 'styled-components'
import Profile from '../../../Styles/svg/Profile';
import Ticket from '../../../Styles/svg/Ticket';
import Clock from '../../../Styles/svg/Clock';
import Home from '../../../Styles/svg/Home';
import Support from '../../../Styles/svg/Support';
import Heart from '../../../Styles/svg/Heart';
import Search from '../../../Styles/svg/Search';
import Arrow from '../../../Styles/svg/Arrow';
import Status from '../../Status';
import user1 from '../../../Styles/images/user1.png';
import user2 from '../../../Styles/images/user2.png';
import user3 from '../../../Styles/images/user3.png';

const TicketsTable = styled.section`
    background-color: white;

    .head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      border: 0;
    }

    .search {
      display: flex;
      align-items: center;
      padding: 10px;
      border: 0;
    }
    .search input{
      width: 230px;
      height: 30px;
      padding: 5px;
      border: 1.7px solid #BABABA;
      border-radius: 2px;
      font-family: 'Inter';
      font-weight: 400;
      font-size: 11px;
      margin-left: 10px;
    }
    .search svg {
      width: 30px;
      height: 30px;
      margin: 0px 10px;
    }
    .head button {
      background-color: #298D8C;
      border: 0;
      border-radius: 5px;
      width: 110px;
      height: 20px;
      color: white;
      font-size: 11px;
      margin-right: 26px;
      cursor: pointer;
    }

    table {
      width: 100%;
      border-collapse: collapse;
    }

    thead {
      background-color: #F4F7FB;
    }

    th {
      text-align: start;
      border: 2px solid #ECF0F5;
      border-collapse: collapse;
      padding: 10px;
    }
    th div {
      display: flex;
      align-items: center;
    }
    th div p {
      font-weight: 800;
      font-size: 10px;
      line-height: 11px;
      margin-left: 10px;
    }
    span:nth-child(2) {
      color: #8A8A8A;
    }
    th:first-child, td:first-child, td:last-child {
      text-align: center;
    }

    td:last-child svg{
      width: 25px;
      height: 25px;
      cursor: pointer;
    }
    td:last-child svg:first-child:hover{
      fill: #007F00;
    }
    td:last-child svg:last-child:hover{
      fill: #F90000;
    }

    th, td {
      font-size: 11.5px;
      line-height: 11px;
      font-weight: 400;
      border: 2px solid #ECF0F5;
      border-collapse: collapse;
      padding: 10px;
    }
    td:first-child {
      width: 70px;
    }
    td:last-child svg:last-child{
      margin-left: 10px
    }
    table svg {
      width: 17px;
      height: 17px;
      fill: black
    }
    
    tbody > tr:nth-child(even) {
      background-color: #F4F7FB;
    }
    tr:hover {
      background-color: #B4DEFA;
      border: 2px solid #B4DEFA;
    }
    tr:hover td {
      background-color: #B4DEFA;
      border: 2px solid #B4DEFA;
    }
    tbody > tr:nth-child(even):hover {
      background-color: #B4DEFA;
      border: 2px solid #B4DEFA;
    }

    .requester, .local {
      display: flex;
      flex-direction: column;
    }
    .requester span:last-child, .local span:last-child {
      margin-top: 2px;
    }

    .user{
      display: flex;
      align-items: center;
    }
    .userImage{
      border-radius: 50%;
      width: 50px;
      height: 50px;
      margin-right: 10px;
    }

    footer {
      background-color: white;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 60px;
      font-size: 11px;
    }

    .lineManagement {
      display: flex;
      align-items: center;
      margin-left: 60px;
    }
    .lineManagement button {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: white;
      border: 1.5px solid #ECF0F5;
      border-radius: 2px;
      padding: 3px;
      width: 50px;
      margin-left: 10px;
      cursor: pointer;
    }
    .backForward {
      display: flex;
      align-items: center;
      margin-right: 50px;
    }
    .backForward button{
      display: flex;
      align-items: center;
      background-color: white;
      border: 1.5px solid #ECF0F5;
      border-radius: 2px;
      height: 30px;
      margin-left: 10px;
      cursor: pointer;
    }
    .back svg{
      transform: rotate(90deg);
      width: 20px;
      height: 20px;
      margin-right: 5px;
    }
    .forward svg{
      transform: rotate(270deg);   
      width: 20px;
      height: 20px;   
      margin-left: 5px;
    }
`;

export default () => {
  return (
    <TicketsTable>
      <div className='head'>
        <fieldset className='search'>
          <label htmlFor="search">
            <Search/>
          </label>
          <input type="text" name='search' placeholder='Filtre por título, local ou solicitante'/>
        </fieldset>
        <button>+ Novo Ticket</button>
      </div>
        <table>
            <thead>
              <tr>
                <th>
                  #
                </th>
                <th>
                  <div>
                    <Ticket/>
                    <p>TÍTULO</p>
                  </div>
                </th>
                <th>
                  <div>
                    <Profile/>
                    <p>SOLICITANTE</p>
                  </div>
                </th>
                <th>
                  <div>
                    <Clock/>
                    <p>PRIORIDADE</p>
                  </div>
                </th>
                <th>
                  <div>
                    <Home/>
                    <p>LOCAL</p>
                  </div>
                </th>
                <th>
                  <div>
                    <Clock/>
                    <p>ABERTURA</p>
                  </div>
                </th>
                <th>
                  <div>
                    <Clock/>
                    <p>STATUS</p>
                  </div>
                </th>
                <th>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Sistema Travando</td>
                <td>
                  <div className='user'>
                    <img className='userImage' src={user1} alt='User'/>
                    <p className='requester'>
                      <span>Aldous Huxley</span>
                      <span>aldous.huxley@camarasantos.sp.gov.br</span>
                    </p>
                  </div>
                </td>
                <td>
                  <Status color={"green"} text={"Baixa"}/>
                </td>
                <td>
                  <p className='local'>
                    <span>Térreo</span>
                    <span>Divisão de Recursos Humanos</span>
                  </p>
                </td>
                <td>
                  <p>10/04/2022 10:42</p>
                </td>
                <td>
                  <Status color={"green"} text={"Aberto"}/>                    
                </td>
                <td>
                  <Support/>
                  <Heart/>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Problema na Impressora</td>
                <td>
                <div className='user'>
                    <img className='userImage' src={user2} alt='User'/>
                    <p className='requester'>
                      <span>Shairon Hosokawa</span>
                      <span>shairon.hosokawa@camarasantos.sp.gov.br</span>
                    </p>
                  </div>                  
                </td>
                <td>
                  <Status color={"orange"} text={"Média"}/>                  
                </td>
                <td>
                <p className='local'>
                    <span>1º Andar</span>
                    <span>Gabinete do Vereador</span>
                </p>
                </td>
                <td>10/04/2022/10:42</td>
                <td>
                <Status color={"orange"} text={"Em andamento"}/>                                    
                </td>
                <td>
                  <Support/>
                  <Heart/>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Problema na assinatura digital</td>
                <td>
                  <div className='user'>
                    <img className='userImage' src={user3} alt='User'/>
                    <p className='requester'>
                      <span>Albert Camus</span>
                      <span>albert.camus@camarasantos.sp.gov.br</span>
                    </p>
                  </div> 
                </td>
                <td>
                  <Status color={"red"} text={"Alta"}/>                  
                </td>
                <td>
                <p className='local'>
                    <span>Castelinho</span>
                    <span>Divisão de Almoxerifado e Patrimônio</span>
                </p>
                </td>
                <td>10/04/2022 10:42</td>
                <td>
                  <Status color={"red"} text={"Fechado"}/>                    
                </td>
                <td>
                  <Support/>
                  <Heart/>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Sistema Travando</td>
                <td>
                  <div className='user'>
                    <img className='userImage' src={user1} alt='User'/>
                    <p className='requester'>
                      <span>Aldous Huxley</span>
                      <span>aldous.huxley@camarasantos.sp.gov.br</span>
                    </p>
                  </div>
                </td>
                <td>
                  <Status color={"green"} text={"Baixa"}/>
                </td>
                <td>
                  <p className='local'>
                    <span>Térreo</span>
                    <span>Divisão de Recursos Humanos</span>
                  </p>
                </td>
                <td>
                  <p>10/04/2022 10:42</p>
                </td>
                <td>
                  <Status color={"green"} text={"Aberto"}/>                    
                </td>
                <td>
                  <Support/>
                  <Heart/>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Problema na Impressora</td>
                <td>
                <div className='user'>
                    <img className='userImage' src={user2} alt='User'/>
                    <p className='requester'>
                      <span>Shairon Hosokawa</span>
                      <span>shairon.hosokawa@camarasantos.sp.gov.br</span>
                    </p>
                  </div>                  
                </td>
                <td>
                  <Status color={"orange"} text={"Média"}/>                  
                </td>
                <td>
                <p className='local'>
                    <span>1º Andar</span>
                    <span>Gabinete do Vereador</span>
                </p>
                </td>
                <td>10/04/2022/10:42</td>
                <td>
                <Status color={"orange"} text={"Em andamento"}/>                                    
                </td>
                <td>
                  <Support/>
                  <Heart/>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Problema na assinatura digital</td>
                <td>
                  <div className='user'>
                    <img className='userImage' src={user3} alt='User'/>
                    <p className='requester'>
                      <span>Albert Camus</span>
                      <span>albert.camus@camarasantos.sp.gov.br</span>
                    </p>
                  </div> 
                </td>
                <td>
                  <Status color={"red"} text={"Alta"}/>                  
                </td>
                <td>
                <p className='local'>
                    <span>Castelinho</span>
                    <span>Divisão de Almoxerifado e Patrimônio</span>
                </p>
                </td>
                <td>10/04/2022 10:42</td>
                <td>
                  <Status color={"red"} text={"Fechado"}/>                    
                </td>
                <td>
                  <Support/>
                  <Heart/>
                </td>
              </tr>              
            </tbody>
        </table>
        <footer>
          <div className='lineManagement'>
            <p>Mostrar linhas por página</p>
            <button>10<Arrow/></button>
          </div>
          <div className='backForward'>
            <p>1 - 6 de 26</p>
            <button className='back'><Arrow/></button>
            <button className='forward'><Arrow/></button>
          </div>
        </footer>
    </TicketsTable>
  )
}
