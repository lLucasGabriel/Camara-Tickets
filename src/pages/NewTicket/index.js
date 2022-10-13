import React from 'react';
import * as S from './styles';

import Header from '../../components/Header';
import Sidenav from '../../components/Sidenav';

import Input from '../../components/Form/Input';
import Textarea from '../../components/Form/Textarea';
import Submit from '../../components/Form/Submit';

export default function NewTicket() {
	return (
		<>
			<Header />
			<S.Container>
				<Sidenav />
				<main>
					<S.Section>
						<S.Title>
							<h2>Novo Ticket</h2>
						</S.Title>
						<S.Tip>
							<p>Dica!</p>
							<p>
								Utilize o campo slicitação para descrever melhor seu problema. Detalhe o que você estava fazendo quando o erro aconteceu e que tipo de mensagem apareceu, por exemplo.
							</p>
						</S.Tip>
						<S.Form>
							<Input
								label={'Solicitante'}
								id={'requester'}
								inputType={'text'}
							/>
							<Input
								label={'Setor'}
								id={'sector'}
								inputType={'text'}
							/>
							<Input
								label={'Categoria'}
								id={'category'}
								inputType={'text'}
							/>
							<Textarea
								label={'Solicitação'}
								id={'request'}
							/>
							<Input
								label={'Local'}
								id={'local'}
								inputType={'text'}
							/>
							<Input
								label={'Prioridade'}
								id={'Prioridade'}
								inputType={'text'}
							/>
							<Submit
								value={'Cadastrar'}
								id={'Submit'}
							/>
						</S.Form>
						<footer></footer>
					</S.Section>
				</main>
			</S.Container>
		</>
	);
}