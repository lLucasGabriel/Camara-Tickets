import React from 'react';
import * as S from './styles';

import Header from '../../components/Header';
import Sidenav from '../../components/Sidenav';

import Navigator from '../../components/Form/Navigator';
import Fieldset from '../../components/Form/Fieldset';
import Textarea from '../../components/Form/Textarea';

export default function RegisterTicket() {
	return (
		<>
			<Header />
			<S.Container>
				<Sidenav />
				<main>
					<Navigator />
					<S.Section>
						<S.Title>NOVO TICKET</S.Title>
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
							<S.CheckboxLabel>Prioridade</S.CheckboxLabel>
							<S.Checkbox>
								<input type='Checkbox' value='low' id='low' name='low' />
								<label htmlFor='low'>Baixa</label>
								<input type='Checkbox' value='medium' id='medium' name='medium' />
								<label htmlFor='medium'>Média</label>
								<input type='Checkbox' value='high' id='high' name='high' />
								<label htmlFor='high'>Alta</label>
							</S.Checkbox>
						</S.Form>
					</S.Section>
				</main>
			</S.Container>
		</>
	);
}