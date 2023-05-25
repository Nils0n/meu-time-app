import Select from 'react-select';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';

import CustomTable from '../../components/CustomTable';
import LineUps from '../../components/LineUps';
import Colors from '../../theme/theme.colors';

import { ContainerPlayers, ContainerSelects, Flag, HomeContainer, HomeContent, ItemSelect } from './styles';

const options = [
	{ value: 'chocolate', label: 'Chocolate' },
	{ value: 'strawberry', label: 'Strawberry' },
	{ value: 'vanilla', label: 'Vanilla' }
]

const players = [
	{ name: 'Jon Joe', age: 23, nationality: 'Brasil' },
	{ name: 'Jon Joe', age: 23, nationality: 'Brasil' },
	{ name: 'Jon Joe', age: 23, nationality: 'Brasil' },
	{ name: 'Jon Joe', age: 23, nationality: 'Brasil' },
	{ name: 'Jon Joe', age: 23, nationality: 'Brasil' },
	{ name: 'Jon Joe', age: 23, nationality: 'Brasil' },
	{ name: 'Jon Joe', age: 23, nationality: 'Brasil' },
	{ name: 'Jon Joe', age: 23, nationality: 'Brasil' },
];

const data = [
	{
		"name": "0-15",
		"total gols": 4,
		"porcentagem": "6.06%"
	},
	{
		"name": "16-30",
		"total gols": 17,
		"porcentagem": "25.76%"
	},
	{
		"name": "31-45",
		"total gols": 11,
		"porcentagem": "16.67%"
	}
]

function Home() {
	return (
		<HomeContainer>
			<HomeContent>
				<ContainerSelects>

					<ItemSelect>
						<label>Selecione o País</label>
						<Select options={options} />
						<Flag backgroundimage='https://images.pexels.com/photos/1182825/pexels-photo-1182825.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260' />
					</ItemSelect>

					<ItemSelect>
						<label>Selecione a temporada</label>
						<Select options={options} />
						<Flag backgroundimage='https://images.pexels.com/photos/1182825/pexels-photo-1182825.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260' />
					</ItemSelect>

					<ItemSelect>
						<label>Selecione a liga</label>
						<Select options={options} />
						<Flag backgroundimage='https://images.pexels.com/photos/1182825/pexels-photo-1182825.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260' />
					</ItemSelect>

					<ItemSelect>
						<label>Selecione o Time</label>
						<Select options={options} />
						<Flag backgroundimage='https://images.pexels.com/photos/1182825/pexels-photo-1182825.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260' />
					</ItemSelect>

				</ContainerSelects>

				<ContainerPlayers>
					<CustomTable data={players} />
					<LineUps nameImage='5-3-2' />
				</ContainerPlayers>


				<BarChart width={540} height={250} data={data}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Bar dataKey="total gols" fill={Colors.background.blue} />
				</BarChart>
			</HomeContent>
		</HomeContainer>
	)
}

export default Home;
