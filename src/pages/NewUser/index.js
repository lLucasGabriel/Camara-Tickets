import React from 'react';
import * as S from './styles';

import Header from '../../components/Header';
import Sidenav from '../../components/Sidenav';

import Fieldset from '../../components/Form/Fieldset';
import Submit from '../../components/Form/Submit';

export default function NewUser() {
	return (
		<>
			<Header />
			<S.Container>
				<Sidenav />
				<main>
					<S.Section>
						<S.Title>
							<h2>NOVO MEMBRO</h2>
						</S.Title>
						<S.Tip>
							<p>Dica!</p>
							<p>
								Utilize o campo slicitação para descrever melhor seu problema. Detalhe o que você estava fazendo quando o erro aconteceu e que tipo de mensagem apareceu, por exemplo.
							</p>
						</S.Tip>
						<S.Form>
							<Fieldset
								label={'Nome'}
								id={'name'}
								inputType={'text'}
							/>
							<Fieldset
								label={'Nascimento'}
								id={'birthday'}
								inputType={'text'}
							/>
							<Fieldset
								label={'CPF'}
								id={'cpf'}
								inputType={'text'}
							/>
							<Fieldset
								label={'Registro CMS'}
								inputType={'text'}
								id={'record'}
							/>
							<Fieldset
								label={'Usuário'}
								id={'username'}
								inputType={'text'}
							/>
							<Fieldset
								label={'Email'}
								id={'email'}
								inputType={'email'}
							/>
							<Fieldset
								label={'Origem'}
								id={'origin'}
								inputType={'text'}
							/>
							<Submit
								id={'Submit'}
								value={'Cadastrar'}
							/>
						</S.Form>
						<footer></footer>
					</S.Section>
				</main>
			</S.Container>
		</>
	);
}