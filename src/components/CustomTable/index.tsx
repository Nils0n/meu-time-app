import { DivWrapper, TableCustom, TbodyCustom, TheadCustom } from './styles';


type PlayersProps = {
	name: string;
	age: string;
	photo: string;
	nationality: string;
}

type CustomTableProps = {
	data?: PlayersProps[];
}

function CustomTable({ data }: CustomTableProps) {
	return (
		<DivWrapper>
			<div>
				<TableCustom>
					<TheadCustom>
						<tr>
							<th>Foto</th>
							<th>Nome</th>
							<th>Idade</th>
							<th>Nacionalidade</th>
						</tr>
					</TheadCustom>
					<TbodyCustom>
						{data && data.length > 0 && (
							data?.map((player, key) => (
								<tr key={key}>
									<td>
										<img src={player.photo} alt="Foto jogador" style={{ width: '3rem', height: '3rem', borderRadius: '50%' }} />
									</td>
									<td>{player.name}</td>
									<td>{player.age}</td>
									<td>{player.nationality}</td>
								</tr>
							))
						)}
					</TbodyCustom>
				</TableCustom>
			</div>
		</DivWrapper>
	)
}

export default CustomTable;
