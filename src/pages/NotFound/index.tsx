import { NotFoundContianer } from "./styles";
import linesman from '../../../public/assets/images/linesman.png';
import CustomButton from "../../components/CustomButton";
import { useNavigate } from "react-router-dom";

function NotFound() {
	const navigate = useNavigate();

	return (
		<NotFoundContianer>
			<p>Ops, página não encontrada!</p>

			<h3>Erro 404</h3>

			<img src={linesman} alt="bandeirinha" />

			<CustomButton onClick={() => navigate('/')}>
				Clique aqui para ser redirecionado
			</CustomButton>

		</NotFoundContianer>
	)
}

export default NotFound;
