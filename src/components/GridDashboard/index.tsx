import { Card, CardNumber, CardTitle, Content, GridDashboardContainer, Header } from './styles'

type GridDashboardProps = {
	played: number | undefined;
	totalWins: number | undefined;
	totalDraws: number | undefined;
	totalLoses: number | undefined;
}

function GridDashboard({ played, totalWins, totalDraws, totalLoses }: GridDashboardProps) {
	return (
		<GridDashboardContainer>
			<Header>Resultados durante a temporada</Header>
			<Content>

				<Card>
					<CardTitle>Total de jogos</CardTitle>
					<CardNumber>{played || 0}</CardNumber>
				</Card>

				<Card>
					<CardTitle>Total de vitórias</CardTitle>
					<CardNumber>{totalWins || 0}</CardNumber>
				</Card>

				<Card>
					<CardTitle>Total de empates</CardTitle>
					<CardNumber>{totalDraws || 0}</CardNumber>
				</Card>

				<Card>
					<CardTitle>Total de derrotas</CardTitle>
					<CardNumber>{totalLoses || 0}</CardNumber>
				</Card>

			</Content>
		</GridDashboardContainer>
	)
}

export default GridDashboard;
