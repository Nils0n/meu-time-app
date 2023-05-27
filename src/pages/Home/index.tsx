import { useContext, useState, useEffect } from 'react';
import { AiOutlineClear } from 'react-icons/ai';
import Select from 'react-select';
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';

import CustomTable from '../../components/CustomTable';
import GridDashboard from '../../components/GridDashboard';
import LineUps from '../../components/LineUps';
import { UserContext } from '../../contexts/UserContext';
import api from '../../service/api';
import Colors from '../../theme/theme.colors';

import { ContainerButton, ContainerDash, ContainerPlayers, ContainerSelects, Flag, HomeContainer, HomeContent, ItemSelect } from './styles';

type CountryProps = {
	name?: string;
	code?: string;
	flag?: string;
	value: string;
	label?: string;
}

type SeasonProps = {
	value: string;
	label: string;
}

type LeagueProps = {
	value: string;
	label: string;
	id: string;
	name: string;
	type: string;
	logo?: string;
}

type TeamProps = {
	id: string;
	value: string;
	label: string;
	name: string;
	code?: string;
	logo?: string;
}

type PlayersProps = {
	name: string;
	age: string;
	photo: string;
	nationality: string;
}

type LineUpProps = {
	formation: string;
	played: number;
}

type FixturesProps = {
	draws: { total: number | undefined };
	loses: { total: number | undefined };
	played: { total: number | undefined };
	wins: { total: number | undefined };
}

type StaticProps = {
	fixtures?: FixturesProps | undefined;


}

function Home() {
	const [country, setCountry] = useState<CountryProps | null>(null);
	const [league, setLeague] = useState<LeagueProps | null>(null);
	const [team, setTeam] = useState<TeamProps | null>(null);
	const [season, setSeason] = useState<SeasonProps | null>(null);
	const [mostUsedLineup, setMostUsedLineUp] = useState<string>('');
	const [dataDashboard, setDataDashboard] = useState();

	const [seasons, setSeasons] = useState([]);
	const [leagues, setLeagues] = useState([]);
	const [teams, setTeams] = useState([]);
	const [squad, setSquad] = useState<PlayersProps[] | []>([]);
	const [statics, setStatics] = useState<StaticProps>();

	const { countries, key } = useContext(UserContext);

	const optionsCountries = countries?.map(item => ({
		value: item.name,
		label: `${item.name} - ${item.code}`,
		flag: item.flag,
		code: item.code
	}));

	async function getSeansons() {
		try {
			const { data } = await api.get('leagues/seasons', {
				headers: {
					'x-rapidapi-key': `${key}`,
				}
			});

			const options = data.response?.map((item: number[]) => ({ value: +item, label: +item }))
			setSeasons(options);

		} catch (error) {
			console.log(error);
		}
	}

	async function getLeagues() {
		try {
			const { data } = await api.get('leagues', {
				headers: {
					'x-rapidapi-key': `${key}`,
				},
				params: {
					country: country?.name,
					season: season?.value
				}
			});

			if (data.response?.length > 0) {
				const options = data.response.map((item: any) => ({
					value: item.league.id,
					label: `${item.league.name}`,
					id: item.league.id,
					name: item.league.name,
					logo: item.league.logo,
					type: item.league.type
				}));

				setLeagues(options);
			}

		} catch (error) {
			console.log(error);
		}
	}

	async function getTeams() {
		try {
			const { data } = await api.get('teams', {
				headers: {
					'x-rapidapi-key': `${key}`,
				},
				params: {
					country: country?.name,
					league: league?.id,
					season: season?.value
				}
			});

			if (data.response.length > 0) {
				const options = data.response.map((item: any) => ({
					id: item.team.id,
					value: item.team.id,
					name: item.team.name,
					code: item.team.code,
					logo: item.team?.logo,
					label: `${item.team.name} - ${item.team.code}`
				}));

				setTeams(options);
			}

		} catch (error) {
			console.log(error);
		}
	}

	async function getTeamStatics() {
		try {
			const { data } = await api.get('teams/statistics', {
				headers: {
					'x-rapidapi-key': `${key}`,
				},
				params: {
					league: league?.id,
					team: team?.id,
					season: season?.value
				}
			});

			setStatics(data.response);
			const minutes = data.response?.goals?.for?.minute;
			const keys = Object?.keys(minutes);
			const dataDash = keys.map(key => ({
				name: key,
				total: minutes[key]?.total,
				porcentagem: minutes[key]?.percentage
			})) as any;

			setDataDashboard(dataDash);

			if (data.response?.lineups?.length > 0) {
				const lineups = data.response?.lineups?.reduce(
					(accuMulator: LineUpProps, currentValue: LineUpProps) => accuMulator?.played < currentValue?.played ? currentValue : accuMulator
				);

				setMostUsedLineUp(lineups?.formation);
			} else {
				setMostUsedLineUp('sem dados');
			}

		} catch (error) {
			console.log(error);
		}
	}


	async function getPlayers() {
		try {
			const { data } = await api.get('players', {
				headers: {
					'x-rapidapi-key': `${key}`,
				},
				params: {
					team: team?.id,
					season: season?.value
				}
			});

			if (data.response?.length > 0) {
				const players = data.response?.map((item: any) => ({
					name: item?.player?.name,
					age: item?.player?.age,
					nationality: item?.player?.nationality,
					photo: item?.player?.photo
				}));

				setSquad(players);

			}

		} catch (error) {
			console.log(error);
		}
	}

	function cleared() {
		setCountry(null);
		setSeason(null);
		setLeague(null);
		setTeam(null);
		setMostUsedLineUp('');
		setDataDashboard(undefined);
		setStatics({});
		setSquad([]);
	}

	useEffect(() => {
		if (country) {
			setSeason(null);
			setLeague(null);
			setTeam(null);
			getSeansons();
		}
	}, [country])

	useEffect(() => {
		if (country && season) {
			setLeague(null);
			setTeam(null);
			getLeagues();
		}
	}, [country, season])


	useEffect(() => {
		if (country && season && league) {
			setTeam(null);
			getTeams();
		}
	}, [league])

	useEffect(() => {
		if (team) {
			setMostUsedLineUp('');
			setDataDashboard(undefined);
			setStatics({});
			setSquad([]);
			Promise.all([getTeamStatics(), getPlayers()]);
		}
	}, [team])

	return (
		<HomeContainer>
			<HomeContent>
				<ContainerButton onClick={cleared}>
					<button title='Limpar filtros'>
						<AiOutlineClear size={24} />
					</button>
				</ContainerButton>
				<ContainerSelects>

					<ItemSelect>
						<label>Selecione o País</label>
						<Select
							placeholder="País..."
							value={country}
							options={optionsCountries}
							onChange={e =>
								setCountry({
									value: `${e?.value}`,
									label: `${e?.label}`,
									name: `${e?.value}`,
									code: `${e?.code}`,
									flag: `${e?.flag}`,

								})}
						/>
						<Flag backgroundimage={`${country?.flag}`} />
					</ItemSelect>

					<ItemSelect>
						<label>Selecione a temporada</label>
						<Select
							placeholder="Temporada..."
							options={seasons}
							value={season}
							onChange={e => setSeason(e)}
						/>
						<Flag>
							{season?.label}
						</Flag>
					</ItemSelect>

					<ItemSelect>
						<label>Selecione a liga</label>
						<Select
							placeholder="Liga..."
							options={leagues}
							value={league}
							onChange={e => setLeague({
								value: `${e?.value}`,
								label: `${e?.label}`,
								id: `${e?.id}`,
								name: `${e?.name}`,
								type: `${e?.type}`,
								logo: `${e?.logo}`,
							})}
						/>
						<Flag backgroundimage={`${league?.logo}`} />
					</ItemSelect>

					<ItemSelect>
						<label>Selecione o Time</label>
						<Select
							placeholder="Time..."
							options={teams}
							value={team}
							onChange={e => setTeam({
								id: `${e?.id}`,
								value: `${e?.id}`,
								label: `${e?.label}`,
								name: `${e?.name}`,
								code: `${e?.code}`,
								logo: `${e?.logo}`,
							})}
						/>
						<Flag backgroundimage={team?.logo} />
					</ItemSelect>

				</ContainerSelects>

				{!!team &&
					<>
						<ContainerPlayers>
							<CustomTable data={squad} />
							<LineUps nameImage={`${mostUsedLineup}`} />
						</ContainerPlayers>

						<ContainerPlayers>
							<ContainerDash>
								<ResponsiveContainer >
									<BarChart
										data={dataDashboard}
									>
										<CartesianGrid strokeDasharray="3 3" />
										<XAxis dataKey="name" />
										<YAxis />
										<Tooltip />
										<Legend />
										<Bar dataKey="total" fill={Colors.background.blue} />
									</BarChart>
								</ResponsiveContainer>
							</ContainerDash>

							<GridDashboard
								played={statics?.fixtures?.played?.total}
								totalDraws={statics?.fixtures?.draws?.total}
								totalLoses={statics?.fixtures?.loses?.total}
								totalWins={statics?.fixtures?.wins?.total}
							/>
						</ContainerPlayers>

					</>
				}
			</HomeContent>
		</HomeContainer >
	)
}

export default Home;
