

import { FiLogIn } from 'react-icons/fi';
import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';

import { LoginContainer, LoginHeadline, LoginInputContainer, LoginSubtitle, LoginContent } from './styles';
import { UserContext } from '../../contexts/UserContext';
import { toast } from 'react-toastify';

function Login() {
	const [currentKey, setCurrentKey] = useState('');
	const { login, isAuthenticated } = useContext(UserContext);
	const navigate = useNavigate();

	async function onSubmit() {
		try {

			if (currentKey.trim() === '') {
				toast.warning('Informe a key!', {
					position: "top-center",
					autoClose: 2000,
					closeOnClick: true,
					pauseOnHover: true,
					theme: "light",
				});
				return;
			}

			login(currentKey);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		if (isAuthenticated) {
			navigate('/');
		}
	}, [isAuthenticated])

	return (
		<>
			<LoginContainer>
				<LoginContent>

					<LoginHeadline>Bem vindo ao app Meu Time!</LoginHeadline>
					<LoginSubtitle>Insira sua chave(key) do API-Football</LoginSubtitle>

					<LoginInputContainer>
						<CustomInput
							placeholder='Informe sua key'
							onChange={e => setCurrentKey(e.target.value)}
						/>
					</LoginInputContainer>

					<CustomButton
						startIcon={<FiLogIn size={18} />}
						onClick={onSubmit}
					>
						Entrar
					</CustomButton>

					<LoginSubtitle>
						Não possui a chave?  <br />
						Clique <a href="https://rapidapi.com/auth/sign-up?referral=/api-sports/api/api-football/pricing" target="_blank">aqui</a>  para realizar o cadastro.
					</LoginSubtitle>

				</LoginContent>
			</LoginContainer >
			t
		</>
	);
}

export default Login;
