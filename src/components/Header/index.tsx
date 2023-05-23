import { useNavigate } from 'react-router-dom';
import { HeaderContainer, HeaderTitle } from './styles';


function Header() {
	const navigate = useNavigate();

	return (
		<HeaderContainer>
			<HeaderTitle onClick={() => navigate('/')}>
				Meu Time
			</HeaderTitle>
		</HeaderContainer>
	);
}

export default Header;
