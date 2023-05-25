import { createContext, ReactNode, useState } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';
import api from '../../service/api';


type UserContextProps = {
	key: string;
	validateKey: (key: string) => void;
	logout: () => void;
}

type UserContextProviderProps = {
	children: ReactNode
}

export const UserContext = createContext<UserContextProps>({
	key: '',
	validateKey: (currentKey) => ({}),
	logout: () => ({})
});


function UserContextProvider({ children }: UserContextProviderProps) {
	const [key, setKey] = useState('');

	async function validateKey(currentKey: string) {
		if (!currentKey) return;

		try {
			const { data } = await api.get('/status', {
				headers: {
					'Content-Type': 'application/json',
					'x-rapidapi-key': `${currentKey}`
				}
			})

			console.log(data);

			if (data.subscription.active) {
				toast.success(`Bem vindo ao App Meu Time ${data?.account.firstname}`);
				setKey(currentKey);
			}

		} catch (error: any) {
			console.log(error);

			switch (error?.response?.status) {
				case 403:
					toast.error('Você não está cadastrado na API Futeboll!', {
						position: "top-center",
						autoClose: 2000,
						closeOnClick: true,
						pauseOnHover: true,
						theme: "light",
					});
					break;
				case 429:
					toast.error('Você não possui mais requisições', {
						position: "top-center",
						autoClose: 2000,
						closeOnClick: true,
						pauseOnHover: true,
						theme: "light",
					});
					break;
				default:
					toast.error('Algo deu errado tente novamente mais tarde', {
						position: "top-center",
						autoClose: 2000,
						closeOnClick: true,
						pauseOnHover: true,
						theme: "light",
					});
					break;
			}
		}
	}

	function logout() {
		setKey('');
	}

	return (
		<UserContext.Provider value={{ key, validateKey, logout }}>
			{children}
			<ToastContainer />
		</UserContext.Provider>
	)
}

export default UserContextProvider;
