import styled from 'styled-components';
import Colors from '../../theme/theme.colors';

export const ContainerLineUps = styled.div`
	height: 20rem;

	@media only screen and (min-width: 768px){
		width: 60%;
	}
`;

export const HeaderLineUps = styled.div`
	background: ${Colors.background.blue};
	color: ${Colors.text.white};
	width: 85vw;
	font-weight: 400;
	font-size:1rem;
	height: 2rem;
	border-radius:10px;
	display: flex;
	align-items: center;
	justify-content: center;

	@media only screen and (min-width: 768px){
		width: 100%;
	}

`;

export const ContainerImage = styled.div`

	margin-top:0.5rem;
	border-radius:10px;
	height:13rem;
	background: rgba(0 ,140 ,64 ) ;
	display: flex;
	justify-content: center;

	& img{
		width: 85vw;
		border-radius:10px;


		@media only screen and (min-width: 768px){
			width: 100%;
			height: 10rem;
		}
	}

`;
