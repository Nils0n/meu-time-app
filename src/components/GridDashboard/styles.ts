import styled from 'styled-components';
import Colors from '../../theme/theme.colors';

export const GridDashboardContainer = styled.div`
	width:20rem;
	height:20rem;
`;

export const Header  = styled.div`
	background: ${Colors.background.blue};
	color: ${Colors.text.white};
	width: 20rem;
	padding-left:0.5rem;
	font-weight: 400;
	font-size:1rem;
	height: 2rem;
	border-radius:10px;
	display: flex;
	align-items: center;
`;

export const Content = styled.div`
 margin-top:1rem;
 display: grid;
 gap:1rem;
 grid-template-areas:
 "1 2"
 "3 4"

`;

export const Card = styled.div`
	width: 9rem;
	height: 6rem;
	background: ${Colors.input.background};
	border-radius:10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const CardTitle = styled.div`
	font-size:0.8rem;
	font-weight:500;
`;

export const CardNumber = styled.div`
	font-size:2rem;
	font-weight:700;

`
