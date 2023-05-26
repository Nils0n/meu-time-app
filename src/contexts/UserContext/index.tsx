import { createContext, ReactNode, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import api from '../../service/api';

type CountryProps = {
	name: string;
	code?: string;
	flag?: string;
	value?: string;
	label: string;
}


type UserContextProps = {
	key: string;
	login: (key: string) => void;
	logout: () => void;
	countries: CountryProps[] | [];
	isAuthenticated: boolean;
}

type UserContextProviderProps = {
	children: ReactNode
}

export const UserContext = createContext<UserContextProps>({
	key: '',
	login: (currentKey) => ({}),
	logout: () => ({}),
	countries: [],
	isAuthenticated: false
});


function UserContextProvider({ children }: UserContextProviderProps) {
	const [key, setKey] = useState('');
	const [countries, setCountries] = useState<CountryProps[] | []>([]);
	const isAuthenticated = countries.length !== 0;

	async function login(currentKey: string) {
		if (!currentKey) return;

		try {
			const { data } = await api.get('/countries', {
				headers: {
					'x-rapidapi-key': `${currentKey}`,
				}
			})

			if (data?.length !== 0) {
				toast.success(`Bem vindo ao App Meu Time!`, {
					position: "top-center",
					autoClose: 2000,
					closeOnClick: true,
					pauseOnHover: true,
					theme: "light",
				});
				setKey(currentKey);
				setCountries(data.response);
				localStorage.setItem('@Key', currentKey);
				localStorage.setItem('@Countries', JSON.stringify(data.response));
			}

		} catch (error: any) {
			setKey('');
			localStorage.clear();
			console.log(error);

			switch (error?.response?.status) {
				case 404:
					toast.error('Endpoint não encontrado!', {
						position: "top-center",
						autoClose: 2000,
						closeOnClick: true,
						pauseOnHover: true,
						theme: "light",
					});
					break;
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
		setCountries([]);
		localStorage.clear();
	}

	useEffect(() => {
		const localKey = localStorage.getItem('@Key');
		const localCountries = localStorage.getItem('@Countries');

		if (localKey && localCountries) {
			setKey(localKey);
			setCountries(JSON.parse(localCountries));
		}

	}, [])

	return (
		<UserContext.Provider value={{ key, countries, isAuthenticated, login, logout }}>
			{children}
			<ToastContainer />
		</UserContext.Provider>
	)
}

export default UserContextProvider;
