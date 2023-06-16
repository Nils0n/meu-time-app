import lp4321 from '../../../../public/assets/images/lineups/lp4321.svg';
import lp3421 from '../../../../public/assets/images/lineups/lp3421.svg';
import lp343 from '../../../../public/assets/images/lineups/lp343.svg';
import lp352 from '../../../../public/assets/images/lineups/lp352.svg';
import lp361 from '../../../../public/assets/images/lineups/lp361.svg';
import lp433 from '../../../../public/assets/images/lineups/lp433.svg';
import lp4411 from '../../../../public/assets/images/lineups/lp4411.svg';
import lp442 from '../../../../public/assets/images/lineups/lp442.svg';
import lp4511 from '../../../../public/assets/images/lineups/lp4511.svg';
import lp451 from '../../../../public/assets/images/lineups/lp451.svg';
import lp532 from '../../../../public/assets/images/lineups/lp532.svg';
import lp541 from '../../../../public/assets/images/lineups/lp541.svg';
import lp4231 from '../../../../public/assets/images/lineups/lp4231.svg';

const lineUpsSvg = [
	{
		name:'3-4-2-1',
		svg:lp3421
	},
	{
		name:'3-4-3',
		svg:lp343
	},
	{
		name:'3-5-2',
		svg:lp352
	},
	{
		name:'3-6-1',
		svg:lp361
	},
	{
		name:'4-3-2-1',
		svg:lp4321
	},
	{
		name:'4-2-3-1',
		svg:lp4231
	},
	{
		name:'4-3-3',
		svg:lp433
	},
	{
		name:'4-4-1-1',
		svg:lp4411
	},
	{
		name:'4-4-2',
		svg:lp442
	},
	{
		name:'4-5-1-1',
		svg:lp4511
	},
	{
		name:'4-5-1',
		svg:lp451
	},
	{
		name:'5-3-2',
		svg:lp532
	},
	{
		name:'5-4-1',
		svg:lp541
	},
	{
		name:'4-2-3-1',
		svg:lp4231
	},
];

export function getLineUps(lineup:string){
	const currentLinup =  lineUpsSvg.filter(item => item.name === lineup);
	return currentLinup[0]?.svg;
}
