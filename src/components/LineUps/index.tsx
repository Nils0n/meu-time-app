import { useEffect } from 'react';
import { ContainerImage, ContainerLineUps, HeaderLineUps } from "./styles";

type LineUpsProps = {
	nameImage: string;
}

function LineUps({ nameImage }: LineUpsProps) {
	useEffect(() => { console.log('nameIma', nameImage) }, [nameImage])

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
