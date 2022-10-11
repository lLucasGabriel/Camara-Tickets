import React from 'react';
import * as S from './styles';

import Header from '../../components/Header';
import Sidenav from '../../components/Sidenav';

import Fieldset from '../../components/Form/Fieldset';
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
							<h2>NOVO TICKET</h2>
						</S.Title>
						<S.Tip>
							<p>Dica!</p>
							<p>
								Utilize o campo slicitação para descrever melhor seu problema. Detalhe o que você estava fazendo quando o erro aconteceu e que tipo de mensagem apareceu, por exemplo.
							</p>
						</S.Tip>
						<S.Form>
							<Fieldset
								label={'Solicitante'}
								id={'requester'}
								inputType={'text'}
							/>
							<Fieldset
								label={'Setor'}
								id={'sector'}
								inputType={'text'}
							/>
							<Fieldset
								label={'Categoria'}
								id={'category'}
								inputType={'text'}
							/>
							<Textarea
								label={'Solicitação'}
								id={'request'}
							/>
							<Fieldset
								label={'Local'}
								id={'local'}
								inputType={'text'}
							/>
							<Fieldset
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