import styled from 'styled-components';
import Colors from '../../theme/theme.colors';

export const GridDashboardContainer = styled.div`
	width: 100%;

	@media only screen and (min-width:768px) and (max-width:1216px){
		width: 100%;
		height:20rem;
	}

	@media only screen and (min-width:1216px){
		width: 22rem;
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

	@media only screen and (max-width:400px){
		font-size:0.5rem;
	}

	@media only screen and (min-width: 768px){
		width: 60%;
		height: fit-content;
		padding: 0.5rem;
	}

	@media only screen and (min-width:1216px){
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

	@media only screen and (min-width: 768px) and (max-width:1216px){
		width: 10rem;
		margin-top:0.5rem;
		gap: 0.5rem;
		 grid-template-areas:
			"1"
			"2"
			"3"
			"4";
	}

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

	@media only screen and (min-width: 768px) and (max-width:1216px){
		width:28vw;
		height: 3rem;

	}




`;

export const CardTitle = styled.div`
	font-size:0.8rem;
	font-weight:500;

	@media only screen and (min-width: 768px) and (max-width:1216px){
		font-size:0.6rem;
	}
`;

export const CardNumber = styled.div`
	font-size:2rem;
	font-weight:700;

	@media only screen and (min-width: 768px) and (max-width:1216px){
		font-size:1rem;
	}

`
