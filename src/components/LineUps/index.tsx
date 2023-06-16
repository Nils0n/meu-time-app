import { ContainerImage, ContainerLineUps, HeaderLineUps } from "./styles";
import { getLineUps } from './utils/getlineUps';

type LineUpsProps = {
	nameImage: string;
}

function LineUps({ nameImage }: LineUpsProps) {

	return (
		<ContainerLineUps>
			<HeaderLineUps>Formação mais utilizada</HeaderLineUps>
			<ContainerImage>
				<img src={`${getLineUps(nameImage)}`} alt={`Formação ${nameImage}`} />
			</ContainerImage>
		</ContainerLineUps>
	)
}

export default LineUps;
