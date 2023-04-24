import Vue from 'vue';
import Router from 'vue-router';

import Bitcellular4 from './components/Bitcellular4';
import Blockify from './components/Blockify';
import CEC from './components/CEC';
import Cheers from './components/Cheers';
import Dashboard from './components/Dashboard';
import Financer from './components/Financer';
import GenericDesktop from './components/GenericDesktop';
import HalfAndHalf from './components/HalfAndHalf';
import HireMe3 from './components/HireMe3';
import Home from './components/Home';
import HomeMockup from './components/HomeMockup';
import Hooden from './components/Hooden';
import IPadMiniiPad97Landsape from './components/IPadMiniiPad97Landsape';
import IPadMiniiPad97Portrait from './components/IPadMiniiPad97Portrait';
import IPhone12ProMax from './components/IPhone12ProMax';
import KnottBank from './components/KnottBank';
import LoginForm from './components/LoginForm';
import OpenSource2 from './components/OpenSource2';
import Organizations from './components/Organizations';
import TDT from './components/TDT';
import ThePublic from './components/ThePublic';
import TS from './components/TS';
import UNIMETA from './components/UNIMETA';
import X3RUPT from './components/X3RUPT';
import {
	bitcellular4Data,
	blockifyData,
	cECData,
	cheersData,
	dashboardData,
	financerData,
	genericDesktopData,
	halfAndHalfData,
	hireMe32Data,
	homeData,
	homeMockupData,
	hoodenData,
	iPadMiniiPad97LandsapeData,
	iPadMiniiPad97PortraitData,
	iPhone12ProMaxData,
	knottBankData,
	openSource22Data,
	organizationsData,
	tDTData,
	thePublicData,
	tSData,
	uNIMETAData,
	x3RUPTData
} from './data';

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/home-mockup',
			component: HomeMockup,
			props: { ...homeMockupData }
		},
		{
			path: '/iphone-12-pro-max',
			component: IPhone12ProMax,
			props: { ...iPhone12ProMaxData }
		},
		{
			path: '/generic-desktop',
			component: GenericDesktop,
			props: { ...genericDesktopData }
		},
		{
			path: '/ipad-mini-ipad-9-7-portrait',
			component: IPadMiniiPad97Portrait,
			props: { ...iPadMiniiPad97PortraitData }
		},
		{
			path: '/ipad-mini-ipad-9-7-landsape',
			component: IPadMiniiPad97Landsape,
			props: { ...iPadMiniiPad97LandsapeData }
		},
		{
			path: '/home',
			component: Home,
			props: { ...homeData }
		},
		{
			path: '/login-form',
			component: LoginForm
		},
		{
			path: '/open-source',
			component: OpenSource2,
			props: { ...openSource22Data }
		},
		{
			path: '/3rupt',
			component: X3RUPT,
			props: { ...x3RUPTData }
		},
		{
			path: '/bitcellular',
			component: Bitcellular4,
			props: { ...bitcellular4Data }
		},
		{
			path: '/cec',
			component: CEC,
			props: { ...cECData }
		},
		{
			path: '/cheers',
			component: Cheers,
			props: { ...cheersData }
		},
		{
			path: '/half-and-half',
			component: HalfAndHalf,
			props: { ...halfAndHalfData }
		},
		{
			path: '/the-public',
			component: ThePublic,
			props: { ...thePublicData }
		},
		{
			path: '/knott-bank',
			component: KnottBank,
			props: { ...knottBankData }
		},
		{
			path: '/ts',
			component: TS,
			props: { ...tSData }
		},
		{
			path: '/hooden',
			component: Hooden,
			props: { ...hoodenData }
		},
		{
			path: '/blockify',
			component: Blockify,
			props: { ...blockifyData }
		},
		{
			path: '/uni-meta',
			component: UNIMETA,
			props: { ...uNIMETAData }
		},
		{
			path: '/tdt',
			component: TDT,
			props: { ...tDTData }
		},
		{
			path: '/financer',
			component: Financer,
			props: { ...financerData }
		},
		{
			path: '/dashboard',
			component: Dashboard,
			props: { ...dashboardData }
		},
		{
			path: '/hire-me',
			component: HireMe3,
			props: { ...hireMe32Data }
		},
		{
			path: '*',
			component: Organizations,
			props: { ...organizationsData }
		}
	]
});
