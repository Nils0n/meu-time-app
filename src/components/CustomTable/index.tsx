import { DivWrapper, TableCustom, TbodyCustom, TheadCustom } from './styles';


type PlayerProps = {
	name: string;
	age: number;
	nationality: string;
}

type CustomTableProps = {
	data?: PlayerProps[];
}

function CustomTable({ data }: CustomTableProps) {
	return (
		<DivWrapper>
			<TableCustom>
				<TheadCustom>
					<tr>
						<th>Nome</th>
						<th>Idade</th>
						<th>Nacionalidade</th>
					</tr>
				</TheadCustom>
				<TbodyCustom>
					{data && data.length > 0 && (
						data?.map((player, key) => (
							<tr key={key}>
								<td>{player.name}</td>
								<td>{player.age}</td>
								<td>{player.nationality}</td>
							</tr>
						))
					)}
				</TbodyCustom>
			</TableCustom>
		</DivWrapper>
	)
}

export default CustomTable;
