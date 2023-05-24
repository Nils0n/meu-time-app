import { ContainerImage, ContainerLineUps, HeaderLineUps } from "./styles";

type LineUpsProps = {
	nameImage: string;
}

function LineUps({ nameImage }: LineUpsProps) {
	return (
		<ContainerLineUps>
			<HeaderLineUps>Formação mais utilizada</HeaderLineUps>
			<ContainerImage>
				<img src={`../public/assets/images/lineups/${nameImage}.svg`} alt={`Formação ${nameImage}`} />
			</ContainerImage>
		</ContainerLineUps>
	)
}

export default LineUps;
