import styled from 'styled-components';
import Colors from '../../theme/theme.colors';

export const GridDashboardContainer = styled.div`
	width: 100%;

	@media screen and (min-width:768px){
		width:22rem;
		height:20rem;
	}
`;

export const Header  = styled.div`
	background: ${Colors.background.blue};
	color: ${Colors.text.white};
	width: 100%;
	font-weight: 400;
	font-size:1rem;
	height: 2rem;
	border-radius:10px;
	display: flex;
	align-items: center;
	justify-content: center;

	@media screen and (max-width:400px){
		font-size:0.5rem;
	}

	@media only screen and (min-width: 768px){
		width: 22rem;
	}
`;

export const Content = styled.div`
 width: 100%;
 margin-top:1rem;
 display: grid;
 gap:1rem;
 grid-template-areas:
 "1 2"
 "3 4";
`;

export const Card = styled.div`
	width: 40vw;
	height: 6rem;
	background: ${Colors.input.background};
	border-radius:10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media screen and (min-width:600px){
		width: 9rem;
	}

	@media only screen and (min-width: 768px){
		width: 10rem;
	}
`;

export const CardTitle = styled.div`
	font-size:0.8rem;
	font-weight:500;
`;

export const CardNumber = styled.div`
	font-size:2rem;
	font-weight:700;

`
