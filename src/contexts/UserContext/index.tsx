import { createContext, ReactNode, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import api from '../../service/api';

type CurrentUserProps = {
	firstname: string;
	lastname: string;
}

type UserContextProps = {
	key: string;
	login: (key: string) => void;
	logout: () => void;
	currentUser: CurrentUserProps | null;
	isAuthenticated: boolean;
}

type UserContextProviderProps = {
	children: ReactNode
}

export const UserContext = createContext<UserContextProps>({
	key: '',
	login: (currentKey) => ({}),
	logout: () => ({}),
	currentUser: null,
	isAuthenticated: false
});


function UserContextProvider({ children }: UserContextProviderProps) {
	const [key, setKey] = useState('');
	const [currentUser, setCurrentUser] = useState<CurrentUserProps | null>(null);
	const isAuthenticated = currentUser !== null;


	async function login(currentKey: string) {
		setCurrentUser({ firstname: 'nilson', lastname: 'batista' });
		return;
		if (!currentKey) return;

		try {
			const { data } = await api.get('/status', {
				headers: {
					'Content-Type': 'application/json',
					'x-rapidapi-key': `${currentKey}`
				}
			})


			if (data.subscription.active) {
				toast.success(`Bem vindo ao App Meu Time ${data?.account.firstname}`);
				setKey(currentKey);
				setCurrentUser({
					firstname: data?.account?.firstname,
					lastname: data?.account?.lastname
				});
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
		setCurrentUser(null);
	}

	return (
		<UserContext.Provider value={{ key, currentUser, isAuthenticated, login, logout }}>
			{children}
			<ToastContainer />
		</UserContext.Provider>
	)
}

export default UserContextProvider;
