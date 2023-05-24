

import { FiLogIn } from 'react-icons/fi';

import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';

import { LoginContainer, LoginHeadline, LoginInputContainer, LoginSubtitle, LoginContent } from './styles';

function Login() {


	return (
		<>
			<LoginContainer>
				<LoginContent>

					<LoginHeadline>Bem vindo ao app Meu Time!</LoginHeadline>
					<LoginSubtitle>Insira sua chave(key) do API-Football</LoginSubtitle>

					<LoginInputContainer>
						<CustomInput
							placeholder='Informe sua key'
						/>
					</LoginInputContainer>

					<CustomButton
						startIcon={<FiLogIn size={18} />}
					>
						Entrar
					</CustomButton>

					<LoginSubtitle>
						Não possui a chave?  <br />
						Clique <a href="https://rapidapi.com/auth/sign-up?referral=/api-sports/api/api-football/pricing" target="_blank">aqui</a>  para realizar o cadastro.
					</LoginSubtitle>

				</LoginContent>
			</LoginContainer >
		</>
	);
}

export default Login;
