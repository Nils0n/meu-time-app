import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa'
import { UserContext } from '../../contexts/UserContext';
import { HeaderContainer, HeaderItem, HeaderItemContainer, HeaderTitle, Items } from './styles';


function Header() {
	const navigate = useNavigate();
	const { isAuthenticated, logout } = useContext(UserContext);

	return (
		<HeaderContainer>
			<HeaderTitle onClick={() => navigate('/')}>
				Meu Time
			</HeaderTitle>

			{isAuthenticated &&
				<HeaderItemContainer>
					<Items>
						<HeaderItem onClick={logout}>
							Sair
						</HeaderItem>
					</Items>
					<HeaderItem>
						<FaRegUserCircle size={36} />
					</HeaderItem>
				</HeaderItemContainer>
			}

		</HeaderContainer>
	);
}

export default Header;
