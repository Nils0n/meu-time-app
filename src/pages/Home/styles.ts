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
	width: 100%;
	max-width:65rem;
	background:${Colors.text.white};
	overflow: auto;
	border-radius:10px;
	padding:2rem;

	@media screen and (max-width: 600px) {
    padding:1rem 0 3rem;
		max-width:100%;
		width: 95%;
		background:${Colors.text.white};
		display: flex;
		flex-direction: column;
		align-items: center;
  }

	@media only screen and (min-width: 768px) {
		width: 85%;
	}

`;

export const ContainerSelects = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	gap:2rem;
	margin-bottom:3rem;

	@media screen and (max-width: 768px) {
    gap:4rem;
  }


`;

export const ContainerPlayers = styled.div`
  margin-top: 5rem;
	height: 20rem;
	gap:2rem;
	display: flex;
	width: 60%;
	flex-wrap: wrap;

	@media screen and (max-width: 600px) {
		width: 90%;
  }

	@media only screen and (min-width: 768px) {
		width:60%;
		display: flex;
		flex-direction: column;
	}


`;

export const ItemSelect = styled.div`
	height: 10rem;
	width: 12rem;


	& label{
		font-size:1rem;
		color:${Colors.text.dark};
		font-weight:500;
	}

	@media screen and (max-width: 600px) {
		width: 80%;
	}
`;

export const Flag = styled.div<FlagProps>`
	height: 8rem;
	width: 100%;
	margin-top:0.5rem;
	background-image: ${(props) => `url('${props?.backgroundimage}')`};
	background-repeat: no-repeat;
	background-position: center;
	background-size: contain;
	border-radius:10px;
	font-weight: 900;
	font-size:3rem;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgba(0, 0, 0, 0.275);

`;

export const ContainerButton = styled.div`
	width: 100%;
	display: flex;
	justify-content: end;

	@media screen and (max-width: 768px) {
		margin-right:1.25rem;
	}

	& button {
		width: 3rem;
		height: 2.8rem;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius:100%;
		border: none;
		background: ${Colors.background.blue};
		color: ${Colors.text.white};
		cursor: pointer;
	}

`

export const ContainerDash = styled.div`
	width: 100%;
	height: 20rem;
	margin-top:10rem;

		@media only screen and (min-width: 768px){
			padding-right:2rem;
			height: 80rem;
			margin-top:0;
		}

		@media only screen and (min-width: 992px){
			padding-right:2rem;
		}
`;
