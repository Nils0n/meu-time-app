import { LoadingContainer } from './styles';
import BeatLoader
	from 'react-spinners/BeatLoader';

function Loading() {
	return (
		<LoadingContainer>
			<BeatLoader size={20} color="#ffff" />
		</LoadingContainer>
	);
}

export default Loading;
