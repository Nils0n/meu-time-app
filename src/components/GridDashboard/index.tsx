import { Card, CardNumber, CardTitle, Content, GridDashboardContainer, Header } from './styles'

type GridDashboardProps = {
	played: number | 0;
	totalWins: number | 0;
	totalDraws: number | 0;
	totalLoses: number | 0;
}

function GridDashboard({ played, totalWins, totalDraws, totalLoses }: GridDashboardProps) {
	return (
		<GridDashboardContainer>
			<Header>Resultados durante a temporada</Header>
			<Content>

				<Card>
					<CardTitle>Total de jogos</CardTitle>
					<CardNumber>{played}</CardNumber>
				</Card>

				<Card>
					<CardTitle>Total de vitórias</CardTitle>
					<CardNumber>{totalWins}</CardNumber>
				</Card>

				<Card>
					<CardTitle>Total de empates</CardTitle>
					<CardNumber>{totalDraws}</CardNumber>
				</Card>

				<Card>
					<CardTitle>Total de derrotas</CardTitle>
					<CardNumber>{totalLoses}</CardNumber>
				</Card>

			</Content>
		</GridDashboardContainer>
	)
}

export default GridDashboard;
