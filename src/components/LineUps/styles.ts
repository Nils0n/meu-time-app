import styled from 'styled-components';
import Colors from '../../theme/theme.colors';

export const ContainerLineUps = styled.div`
	height: 20rem;
	margin-left:4rem;
`;

export const HeaderLineUps = styled.div`
	background: ${Colors.background.blue};
	color: ${Colors.text.white};
	width: 15rem;
	padding-left:0.5rem;
	font-weight: 400;
	font-size:1rem;
	height: 2rem;
	border-radius:10px;
	display: flex;
	align-items: center;
`;

export const ContainerImage = styled.div`

	margin-top:0.5rem;
	border-radius:10px;

	& img{
		width: 15rem;
		border-radius:10px;
	}

`;
