import { Card, CardNumber, CardTitle, Content, GridDashboardContainer, Header } from './styles'

function GridDashboard() {
	return (
		<GridDashboardContainer>
			<Header>Resultados durante a temporada</Header>
			<Content>

				<Card>
					<CardTitle>Total de jogos</CardTitle>
					<CardNumber>25</CardNumber>
				</Card>

				<Card>
					<CardTitle>Total de vitórias</CardTitle>
					<CardNumber>15</CardNumber>
				</Card>

				<Card>
					<CardTitle>Total de empates</CardTitle>
					<CardNumber>6</CardNumber>
				</Card>

				<Card>
					<CardTitle>Total de derrotas</CardTitle>
					<CardNumber>4</CardNumber>
				</Card>

			</Content>
		</GridDashboardContainer>
	)
}

export default GridDashboard;
