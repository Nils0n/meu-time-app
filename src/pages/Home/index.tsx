import Select from 'react-select';
import CustomTable from '../../components/CustomTable';
import LineUps from '../../components/LineUps';
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

function Home() {
	return (
		<HomeContainer>
			<HomeContent>
				<ContainerSelects>

					<ItemSelect>
						<label>Selecione o País</label>
						<Select options={options} />
						<Flag backgroundImage='https://images.pexels.com/photos/1182825/pexels-photo-1182825.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260' />
					</ItemSelect>

					<ItemSelect>
						<label>Selecione a temporada</label>
						<Select options={options} />
						<Flag backgroundImage='https://images.pexels.com/photos/1182825/pexels-photo-1182825.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260' />
					</ItemSelect>

					<ItemSelect>
						<label>Selecione a liga</label>
						<Select options={options} />
						<Flag backgroundImage='https://images.pexels.com/photos/1182825/pexels-photo-1182825.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260' />
					</ItemSelect>

					<ItemSelect>
						<label>Selecione o Time</label>
						<Select options={options} />
						<Flag backgroundImage='https://images.pexels.com/photos/1182825/pexels-photo-1182825.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260' />
					</ItemSelect>

				</ContainerSelects>

				<ContainerPlayers>
					<CustomTable data={players} />
					<LineUps nameImage='5-3-2' />
				</ContainerPlayers>

			</HomeContent>
		</HomeContainer>
	)
}

export default Home;
