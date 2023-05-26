import styled from 'styled-components';
import Colors from '../../theme/theme.colors';

type FlagProps = {
	backgroundimage?: string;
}

export const HomeContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
	margin-top:3rem;
	padding-top:2rem;
  justify-content: center;

`;

export const HomeContent = styled.div`
	height: 90%;
	max-height:100vh;
	width: 85%;
	max-width:65rem;
	background:${Colors.text.white};
	overflow: auto;
	border-radius:10px;
	padding:2rem;

	@media screen and (max-width: 600px) {
    padding-bottom:2rem;
  }
`;

export const ContainerSelects = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	gap:2rem;
	margin-bottom:3rem;

@media screen and (max-width: 600px) {
    gap:4rem;
  }
`;

export const ContainerPlayers = styled.div`
  margin-top: 5rem;
	height: 20rem;
	display: flex;
	gap:2rem;
	flex-wrap: wrap;
	justify-content: space-around;

`;

export const ItemSelect = styled.div`
	height: 10rem;
	width: 12rem;

	& label{
		font-size:1rem;
		color:${Colors.text.dark};
		font-weight:500;
	}
`;

export const Flag = styled.div<FlagProps>`
	height: 8rem;
	width: 100%;
	margin-top:0.5rem;
	background-image: ${(props) => `url('${props?.backgroundimage}')`};
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	border-radius:10px;
	font-weight: 900;
	font-size:3rem;
	display: flex;
	align-items: center;
	justify-content: center;

`;

export const ContainerButton = styled.div`
	position: relative;
	left: 0;
	width: 3rem;
	height: 2.8rem;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius:100%;
	background: ${Colors.background.blue};
	color: ${Colors.text.white};
	cursor: pointer;

`
