import { useContext, useState, useEffect } from 'react';
import Select from 'react-select';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';

import CustomTable from '../../components/CustomTable';
import GridDashboard from '../../components/GridDashboard';
import LineUps from '../../components/LineUps';
import { UserContext } from '../../contexts/UserContext';
import api from '../../service/api';
import Colors from '../../theme/theme.colors';

import { ContainerPlayers, ContainerSelects, Flag, HomeContainer, HomeContent, ItemSelect } from './styles';

type CountryProps = {
	name: string;
	code?: string;
	flag?: string;
}

type OptionsProps = {
	value: string | number;
	label: string | number;
	id?: string;
	code?: string;
	name?: string;
	type?: string;
	logo?: string;
}

type LeagueProps = {
	value: string;
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


function Home() {
	const [country, setCountry] = useState<CountryProps | null>(null);
	const [league, setLeague] = useState<LeagueProps | null>(null);
	const [team, setTeam] = useState<TeamProps | null>(null);
	const [season, setSeason] = useState<string | null>(null);
	const [mostUsedLineup, setMostUsedLineUp] = useState<string>('');
	const [dataDashboard, setDataDashboard] = useState();

	const [seasons, setSeasons] = useState<OptionsProps[] | []>([]);
	const [leagues, setLeagues] = useState<OptionsProps[] | []>([]);
	const [teams, setTeams] = useState<OptionsProps[] | []>([]);
	const [statics, setStatics] = useState();

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
					season
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
					season,
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
					season,
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
			const lineups = data.response?.lineups?.reduce(
				(accuMulator, currentValue) => accuMulator?.played < currentValue?.played ? currentValue : accuMulator
			);

			setMostUsedLineUp(lineups?.formation);

		} catch (error) {
			console.log(error);
		}
	}



	useEffect(() => {
		if (country) {
			getSeansons();
		}
	}, [country])

	useEffect(() => {
		if (country && season) {
			getLeagues();
		}
	}, [country, season])


	useEffect(() => {
		if (country && season && league) {
			getTeams();
		}
	}, [country, season, league])

	useEffect(() => {
		if (team) {
			getTeamStatics();
		}
	}, [team])

	useEffect(() => { console.log(statics) }, [statics])

	return (
		<HomeContainer>
			<HomeContent>
				<ContainerSelects>

					<ItemSelect>
						<label>Selecione o País</label>
						<Select
							options={optionsCountries}
							onChange={e =>
								setCountry({
									name: `${e?.value}`,
									code: `${e?.code}`,
									flag: `${e?.flag}`
								})}
						/>
						<Flag backgroundimage={`${country?.flag}`} />
					</ItemSelect>

					<ItemSelect>
						<label>Selecione a temporada</label>
						<Select
							options={seasons}
							onChange={e => setSeason(`${e?.value}`)}
						/>
						<Flag>
							{season}
						</Flag>
					</ItemSelect>

					<ItemSelect>
						<label>Selecione a liga</label>
						<Select
							options={leagues}
							onChange={e => setLeague({
								value: `${e?.value}`,
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
							options={teams}
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
							{/* <CustomTable data={players} /> */}
							<LineUps nameImage={`${mostUsedLineup}`} />
						</ContainerPlayers>


						<ContainerPlayers>

							<BarChart
								width={540}
								height={350}
								data={dataDashboard}
							>
								<CartesianGrid strokeDasharray="3 3" />
								<XAxis dataKey="name" />
								<YAxis />
								<Tooltip />
								<Legend />
								<Bar dataKey="total" fill={Colors.background.blue} />
							</BarChart>

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
