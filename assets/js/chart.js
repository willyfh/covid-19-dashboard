/*require.config({
    packages: [
        {
            name: 'echarts',
            location: 'https://cdn.rawgit.com/ecomfe/echarts/master/src',
            main: 'echarts'
        },
        {
            name: 'zrender',
            location: '//ecomfe.github.io/zrender/src',
            main: 'zrender'
        }
    ]
});*/
var data = [
                   {name:"31 km BaratDaya CIANJUR-JABAR",value:	5.0},
					{name:"152 km BaratLaut MALUKUTENGGARABRT",value:	5.0},
					{name:"81 km BaratDaya NABIRE-PAPUA",value:	5.4},
					{name:"237 km BaratLaut MALUKUTENGGARABRT",value:	5.3},
					{name:"132 km BaratLaut HALMAHERABARAT-MALUT",value:	6.1},
					{name:"117 km BaratLaut HALMAHERABARAT-MALUT",value:	5.0},
					{name:"133 km BaratLaut HALMAHERABARAT-MALUT",value:	5.1},
					{name:"138 km BaratLaut HALMAHERABARAT-MALUT",value:	5.0},
					{name:"272 km BaratLaut KOTA-SABANG-ACEH",value:	5.3},
					{name:"124 km Tenggara KAIMANA-PAPUABRT",value:	5.2},
					{name:"90 km BaratLaut DONGGALA-SULTENG",value:	5.0},
					{name:"192 km Tenggara KEP-MENTAWAI-SUMBAR",value:	5.8},
					{name:"46 km BaratLaut KAB-SIMEULUE-ACEH",value:	5.1},
					{name:"70 km BaratLaut KEP-TALAUD-SULUT",value:	5.0},
					{name:"71 km Tenggara KEP-TALAUD-SULUT",value:	5.1},
					{name:"130 km TimurLaut BITUNG-SULUT",value:	5.7},
					{name:"84 km BaratLaut HALMAHERABARAT-MALUT",value:	5.1},
					{name:"142 km BaratLaut HALMAHERABARAT-MALUT",value:	5.2},
					{name:"6 km BaratDaya SARMI-PAPUA",value:	5.2},
					{name:"16 km BaratLaut KAB-JAYAPURA-PAPUA",value:	5.1},
					{name:"165 km BaratLaut MALUKUTENGGARABRT",value:	6.0},
					{name:"150 km Tenggara KEP-TALAUD-SULUT",value:	5.2},
					{name:"244 km TimurLaut MALUKUBRTDAYA",value:	5.2},
					{name:"122 km BaratLaut HALMAHERABARAT-MALUT",value:	5.3},
					{name:"64 km TimurLaut KONAWEUTARA-SULTRA",value:	5.7},
					{name:"65 km TimurLaut KONAWEUTARA-SULTRA",value:	5.1},
					{name:"135 km BaratLaut HALMAHERABARAT-MALUT",value:	5.5},
					{name:"137 km BaratLaut HALMAHERABARAT-MALUT",value:	5.0},
					{name:"137 km TimurLaut BUOL-SULTENG",value:	5.1},
					{name:"135 km BaratLaut HALMAHERABARAT-MALUT",value:	6.8},
					{name:"128 km BaratLaut HALMAHERABARAT-MALUT",value:	5.0},
					{name:"127 km BaratLaut HALMAHERABARAT-MALUT",value:	5.2},
					{name:"126 km BaratLaut HALMAHERABARAT-MALUT",value:	5.4},
					{name:"118 km BaratLaut HALMAHERABARAT-MALUT",value:	5.0},
					{name:"19 km BaratLaut KAB-SIMEULUE-ACEH",value:	5.2},
					{name:"115 km BaratLaut HALMAHERABARAT-MALUT",value:	6.7},
					{name:"108 km BaratLaut MALUKUTENGGARABRT",value:	5.3},
					{name:"202 km BaratLaut KOTA-SABANG-ACEH`",value:	5.5},
					{name:"140 km BaratLaut HALMAHERABARAT-MALUT",value:	5.8},
					{name:"58 km TimurLaut BANGGAIKEP-SULTENG",value:	5.0},
					{name:"37 km TimurLaut GUNUNGSITOLI-SUMUT",value:	5.3},
					{name:"132 km BaratLaut HALMAHERABARAT-MALUT",value:	7.3},
					{name:"137 km BaratLaut HALMAHERABARAT-MALUT",value:	7.3},
					{name:"133 km BaratLaut HALMAHERABARAT-MALUT",value:	5.0},
					{name:"93 km Tenggara BOLAANGMONGONDOWSEL-SULUT",value:	6.3},
					{name:"133 km TimurLaut BITUNG-SULUT",value:	5.0},
					{name:"127 km BaratLaut HALMAHERABARAT-MALUT",value:	5.1},
					{name:"133 km BaratLaut HALMAHERABARAT-MALUT",value:	5.3},
					{name:"125 km BaratLaut HALMAHERABARAT-MALUT",value:	5.3},
					{name:"212 km BaratLaut MALUKUTENGGARABRT",value:	5.2},
					{name:"151 km BaratDaya TANGGAMUS-LAMPUNG",value:	5.0},
					{name:"80 km BaratLaut KEP-TALAUD-SULUT",value:	5.1},
					{name:"101 km BaratDaya KAB-ACEHJAYA",value:	5.6},
					{name:"58 km BaratDaya BOLAANGMONGONDOWSEL-SULUT",value:	5.3},
					{name:"75 km BaratDaya SELUMA-BENGKULU",value:	5.0},
					{name:"162 km BaratLaut MALUKUTENGGARABRT",value:	5.0},
					{name:"125 km BaratLaut BIMA-NTB",value:	6.0},
					{name:"200 km Tenggara KAB-MALANG-JATIM",value:	5.1},
					{name:"132 km BaratLaut HALMAHERABARAT-MALUT",value:	5.2},
					{name:"57 km BaratLaut HALMAHERABARAT-MALUT",value:	5.2},
					{name:"180 km BaratLaut KEP-TALAUD-SULUT",value:	5.1},
					{name:"84 km BaratDaya PANDEGLANG-BANTEN",value:	5.0},
					{name:"166 km TimurLaut PULAUMOROTAI-MALUT",value:	5.0},
					{name:"73 km BaratDaya LAMPUNGBARAT",value:	5.2},
					{name:"18 km TimurLaut KOTA-SUKABUMI-JABAR",value:	5.5},
					{name:"44 km BaratLaut SERAMBAGIANBARAT-MALUKU",value:	5.1},
					{name:"46 km BaratLaut NIASBARAT-SUMUT",value:	5.2},
					{name:"256 km BaratDaya KAB-ACEHJAYA",value:	5.0},
					{name:"189 km BaratLaut MALUKUTENGGARABRT",value:	5.3},
					{name:"13 km BaratDaya NABIRE-PAPUA",value:	5.0},
					{name:"176 km BaratLaut MALUKUTENGGARABRT",value:	5.1},
					{name:"96 km BaratLaut PANDEGLANG-BANTEN",value:	5.2},
					{name:"31 km BaratDaya KEP-TALAUD-SULUT",value:	5.2},
					{name:"176 km BaratLaut MALUKUTENGGARABRT",value:	5.0},
					{name:"19 km BaratDaya MAYBRAT-PAPUABRT",value:	5.4},
					{name:"127 km BaratLaut MALUKUTENGGARABRT",value:	5.1},
					{name:"137 km BaratLaut TUAL-MALUKU",value:	5.0},
					{name:"257 km TimurLaut MALUKUBRTDAYA",value:	5.0},
					{name:"101 km BaratLaut YALIMO-PAPUA",value:	5.1},
					{name:"49 km BaratDaya KEP-TALAUD-SULUT",value:	5.1},
					{name:"119 km BaratDaya PESAWARAN-LAMPUNG",value:	5.1},
					{name:"158 km BaratLaut MALUKUTENGGARABRT",value:	5.0},
					{name:"83 km BaratDaya PACITAN-JATIM",value:	5.0},
					{name:"67 km TimurLaut DONGGALA-SULTENG",value:	5.1},
					{name:"154 km TimurLaut TELUKBINTUNI-PAPUABRT",value:	5.1},
					{name:"237 km BaratDaya SERAMBAGIANBARAT-MALUKU",value:	5.1},
					{name:"228 km TimurLaut MALUKUBRTDAYA",value:	5.2},
					{name:"55 km BaratDaya BENGKULUSELATAN",value:	5.0},
					{name:"31 km BaratDaya NIASUTARA-SUMUT",value:	5.6},
					{name:"25 km BaratDaya NIASUTARA-SUMUT",value:	5.2},
					{name:"50 km BaratDaya SELUMA-BENGKULU",value:	5.0},
					{name:"128 km Tenggara BOLAANGMONGONDOWTMR-SULUT",value:	5.0},
					{name:"53 km BaratDaya BOLAANGMONGONDOWSEL-SULUT",value:	5.0},
					{name:"57 km TimurLaut SARMI-PAPUA",value:	5.0},
					{name:"325 km BaratLaut KOTA-SABANG-NAD",value:	5.2},
					{name:"439 km BaratLaut KOTA-SABANG-NAD",value:	5.2},
					{name:"62 km TimurLaut MALUKUTENGAH",value:	5.0},
					{name:"14 km BaratDaya TANAHDATAR-SUMBAR",value:	5.0},
					{name:"131 km Tenggara BOLAANGMONGONDOWTMR-SULUT",value:	6.2},
					{name:"139 km Tenggara BOLAANGMONGONDOWTMR-SULUT",value:	5.7},
					{name:"138 km Tenggara BOLAANGMONGONDOWTMR-SULUT",value:	5.3},
					{name:"117 km BaratDaya SUMBABARATDAYA-NTT",value:	5.0},
					{name:"32 km BaratDaya PADANGLAWAS-SUMUT",value:	5.0},
					{name:"154 km BaratDaya KAB-MALANG-JATIM",value:	5.0},
					{name:"238 km TimurLaut MALUKUBRTDAYA",value:	5.4},
					{name:"192 km BaratLaut MALUKUTENGGARABRT",value:	5.0},
					{name:"399 km BaratLaut KAB-SIMEULUE-NAD",value:	5.1},
					{name:"60 km TimurLaut SIAUTAGULANDANGBIARO-SULUT",value:	5.1},
					{name:"45 km BaratLaut PUNCAKJAYA-PAPUA",value:	5.0},
					{name:"73 km BaratLaut PULAUMOROTAI-MALUT",value:	5.0},
					{name:"119 km BaratLaut MALUKUBRTDAYA",value:	5.4},
					{name:"124 km Tenggara NIASSELATAN-SUMUT",value:	5.0},
					{name:"52 km BaratDaya WAROPEN-PAPUA",value:	5.0},
					{name:"74 km TimurLaut KEP-TALAUD-SULUT",value:	5.1},
					{name:"46 km BaratLaut KEP-TALAUD-SULUT",value:	5.4},
					{name:"200 km TimurLaut MALUKUBRTDAYA",value:	6.2},
					{name:"97 km BaratDaya KOTA-SABANG-NAD",value:	5.0},
					{name:"96 km Tenggara NIASSELATAN-SUMUT",value:	5.0},
					{name:"53 km BaratDaya MUKOMUKO-BENGKULU",value:	5.1},
					{name:"28 km TimurLaut KAB-ACEHBARAT",value:	5.1},
					{name:"50 km Tenggara WAROPEN-PAPUA",value:	5.0},
					{name:"115 km Tenggara KAB-MALANG-JATIM",value:	5.0},
					{name:"110 km BaratDaya TRENGGALEK-JATIM",value:	5.3},
					{name:"527 km BaratDaya KOTA-SABANG-NAD",value:	5.0},
					{name:"54 km TimurLaut MALUKUBRTDAYA",value:	5.0},
					{name:"76 km BaratDaya KEEROM-PAPUA",value:	5.4},
					{name:"17 km BaratLaut DONGGALA-SULTENG",value:	5.3},
					{name:"104 km Tenggara PACITAN-JATIM",value:	5.6},
					{name:"92 km BaratDaya PANDEGLANG-BANTEN",value:	5.6},
					{name:"126 km BaratLaut TUAL-MALUKU",value:	5.5},
					{name:"156 km BaratLaut MALUKUTENGGARABRT",value:	5.3},
					{name:"110 km TimurLaut LEMBATA-NTT",value:	5.4},
					{name:"91 km BaratLaut NIASUTARA-SUMUT",value:	5.9},
					{name:"17 km Tenggara YALIMO-PAPUA",value:	5.4},
					{name:"9 km BaratLaut YALIMO-PAPUA",value:	5.1},
					{name:"91 km Tenggara BOLAANGMONGONDOWTMR-SULUT",value:	5.2},
					{name:"63 km BaratLaut KEP-MENTAWAI-SUMBAR",value:	5.0},
					{name:"125 km BaratLaut TERNATE-MALUT",value:	5.0},
					{name:"128 km BaratDaya SUMBABARATDAYA-NTT",value:	5.4},
					{name:"59 km Tenggara BONEBOLANGO-GORONTALO",value:	5.2},
					{name:"67 km BaratLaut YALIMO-PAPUA",value:	5.3},
					{name:"81 km Tenggara KAB-GORONTALO",value:	5.9},
					{name:"75 km BaratDaya KAB-TASIKMALAYA-JABAR",value:	5.5},
					{name:"103 km BaratLaut PULAUMOROTAI-MALUT",value:	5.1},
					{name:"40 km TimurLaut LEBONG-BENGKULU",value:	5.2},
					{name:"42 km Tenggara BITUNG-SULUT",value:	5.2},
					{name:"187 km BaratLaut RAJAAMPAT-PAPUABRT",value:	5.2},
					{name:"223 km BaratLaut MALUKUTENGGARABRT",value:	5.1},
					{name:"97 km BaratDaya KEBUMEN-JATENG",value:	5.0},
					{name:"53 km TimurLaut SIAUTAGULANDANGBIARO-SULUT",value:	5.0},
					{name:"634 km BaratDaya KAB-SIMEULUE-NAD",value:	5.9},
					{name:"91 km BaratDaya LEBAK-BANTEN",value:	5.1},
					{name:"54 km BaratLaut MANGGARAIBRT-NTT",value:	5.3},
					{name:"61 km BaratLaut SIKKA-NTT",value:	5.2},
					{name:"155 km Tenggara SIAUTAGULANDANGBIARO-SULUT",value:	5.1},
					{name:"234 km TimurLaut MALUKUBRTDAYA",value:	5.0},
					{name:"138 km BaratDaya LAMPUNGBARAT",value:	5.0},
					{name:"263 km BaratDaya LAMPUNGBARAT",value:	5.0},
					{name:"254 km BaratDaya LAMPUNGBARAT",value:	5.0},
					{name:"55 km BaratLaut SERAMBAGIANBARAT-MALUKU",value:	5.4},
					{name:"342 km BaratDaya KAB-ACEHJAYA",value:	6.4},
					{name:"242 km BaratLaut KAB-SIMEULUE-NAD",value:	5.2},
					{name:"170 km BaratDaya KAUR-BENGKULU",value:	5.1},
					{name:"39 km TimurLaut SUMBAWA-NTB",value:	5.7},
					{name:"16 km BaratDaya KEP-TALAUD-SULUT",value:	5.4},
					{name:"65 km BaratDaya KAB-ACEHSINGKIL",value:	5.4},
					{name:"88 km TimurLaut BURUSELATAN-MALUKU",value:	5.7},
					{name:"67 km BaratDaya KAB-ACEHSINGKIL",value:	5.7},
					{name:"137 km BaratLaut MALUKUTENGGARABRT",value:	5.0},
					{name:"59 km TimurLaut MALUKUTENGGARABRT",value:	5.2},
					{name:"181 km BaratDaya BENGKULUSELATAN",value:	5.7},
					{name:"191 km BaratDaya LAMPUNGBARAT",value:	5.0},
					{name:"32 km BaratDaya OGANKOMRNGULUSEL-SUMSEL",value:	5.4},
					{name:"60 km TimurLaut TAMBRAUW-PAPUABRT",value:	5.1},
					{name:"27 km BaratLaut ALOR-NTT",value:	5.3},
					{name:"252 km BaratLaut MALUKUTENGGARABRT",value:	5.0},
					{name:"274 km Tenggara MALUKUBRTDAYA",value:	5.8},
					{name:"224 km TimurLaut MALUKUBRTDAYA",value:	5.8},
					{name:"215 km TimurLaut MALUKUBRTDAYA",value:	5.0},
					{name:"218 km TimurLaut MALUKUBRTDAYA",value:	5.0},
					{name:"162 km TimurLaut KEP-SULA-MALUT",value:	5.1},
					{name:"114 km Tenggara KAIMANA-PAPUABRT",value:	5.0},
					{name:"68 km BaratDaya KEBUMEN-JATENG",value:	5.3},
					{name:"203 km BaratLaut KEP-SANGIHE-SULUT",value:	5.1},
					{name:"104 km BaratDaya KEBUMEN-JATENG",value:	6.5},
					{name:"117 km BaratLaut MALUKUTENGGARABRT",value:	5.4},
					{name:"126 km BaratDaya KEP-SELAYAR-SULSEL",value:	5.3},
					{name:"219 km BaratDaya MALUKUTENGGARABRT",value:	5.3},
					{name:"30 km BaratDaya KAB-ACEHBESAR",value:	4.2},
					{name:"52 km TimurLaut MALUKUTENGAH",value:	5.0},
					{name:"64 km BaratDaya KAUR-BENGKULU",value:	5.2},
					{name:"127 km BaratLaut TERNATE-MALUT",value:	5.0},
					{name:"30 km BaratLaut KAB-SUKABUMI-JABAR",value:	5.1},
					{name:"226 km BaratDaya KAB-SIMEULUE-NAD",value:	5.2},
					{name:"27 km BaratDaya BANGGAIKEP-SULTENG",value:	5.0},
					{name:"132 km BaratDaya NIASSELATAN-SUMUT",value:	5.1},
					{name:"57 km BaratDaya TELUKWONDAMA-PAPUABRT",value:	5.0},
					{name:"72 km BaratDaya PANDEGLANG-BANTEN",value:	5.2},
					{name:"267 km TimurLaut MALUKUBRTDAYA",value:	5.1},
					{name:"75 km Tenggara PESAWARAN-LAMPUNG",value:	5.1},
					{name:"92 km BaratLaut PULAUMOROTAI-MALUT",value:	5.2}
				];
var geoCoordMap = {
               "31 km BaratDaya CIANJUR-JABAR":[	107.11,-7.46	],
				"152 km BaratLaut MALUKUTENGGARABRT":[	131.26,-6.23	],
				"81 km BaratDaya NABIRE-PAPUA":[	134.89,-3.77	],
				"237 km BaratLaut MALUKUTENGGARABRT":[	129.26,-7.25	],
				"132 km BaratLaut HALMAHERABARAT-MALUT":[	126.63,2.13	],
				"117 km BaratLaut HALMAHERABARAT-MALUT":[	126.8,2.12	],
				"133 km BaratLaut HALMAHERABARAT-MALUT":[	126.66,2.18	],
				"138 km BaratLaut HALMAHERABARAT-MALUT":[	126.7,2.29	],
				"272 km BaratLaut KOTA-SABANG-ACEH":[	93.93,7.84	],
				"124 km Tenggara KAIMANA-PAPUABRT":[	133.86,-4.79	],
				"90 km BaratLaut DONGGALA-SULTENG":[	119.5,0.34	],
				"192 km Tenggara KEP-MENTAWAI-SUMBAR":[	100.07,-3.88	],
				"46 km BaratLaut KAB-SIMEULUE-ACEH":[	95.68,2.67	],
				"70 km BaratLaut KEP-TALAUD-SULUT":[	126.49,4.85	],
				"71 km Tenggara KEP-TALAUD-SULUT":[	127.08,3.72	],
				"130 km TimurLaut BITUNG-SULUT":[	126.32,1.62	],
				"84 km BaratLaut HALMAHERABARAT-MALUT":[	126.92,1.79	],
				"142 km BaratLaut HALMAHERABARAT-MALUT":[	126.4,1.94	],
				"6 km BaratDaya SARMI-PAPUA":[	138.73,-1.93	],
				"16 km BaratLaut KAB-JAYAPURA-PAPUA":[	140.42,-2.46	],
				"165 km BaratLaut MALUKUTENGGARABRT":[	130.66,-6.29	],
				"150 km Tenggara KEP-TALAUD-SULUT":[	128.11,3.93	],
				"244 km TimurLaut MALUKUBRTDAYA":[	128.45,-7	],
				"122 km BaratLaut HALMAHERABARAT-MALUT":[	126.68,2.05	],
				"64 km TimurLaut KONAWEUTARA-SULTRA":[	122.38,-2.88	],
				"65 km TimurLaut KONAWEUTARA-SULTRA":[	122.39,-2.87	],
				"135 km BaratLaut HALMAHERABARAT-MALUT":[	127.08,2.51	],
				"137 km BaratLaut HALMAHERABARAT-MALUT":[	126.52,2.05	],
				"137 km TimurLaut BUOL-SULTENG":[	121.45,2.25	],
				"135 km BaratLaut HALMAHERABARAT-MALUT":[	126.5,1.99	],
				"128 km BaratLaut HALMAHERABARAT-MALUT":[	126.61,2.04	],
				"127 km BaratLaut HALMAHERABARAT-MALUT":[	126.55,1.93	],
				"126 km BaratLaut HALMAHERABARAT-MALUT":[	126.47,1.71	],
				"118 km BaratLaut HALMAHERABARAT-MALUT":[	126.64,1.92	],
				"19 km BaratLaut KAB-SIMEULUE-ACEH":[	95.98,2.74	],
				"115 km BaratLaut HALMAHERABARAT-MALUT":[	127.08,2.31	],
				"108 km BaratLaut MALUKUTENGGARABRT":[	131.34,-6.62	],
				"202 km BaratLaut KOTA-SABANG-ACEH`":[	94.77,7.55	],
				"140 km BaratLaut HALMAHERABARAT-MALUT":[	126.41,1.91	],
				"58 km TimurLaut BANGGAIKEP-SULTENG":[	123.53,-1.21	],
				"37 km TimurLaut GUNUNGSITOLI-SUMUT":[	97.76,1.59	],
				"132 km BaratLaut HALMAHERABARAT-MALUT":[	126.5,1.94	],
				"137 km BaratLaut HALMAHERABARAT-MALUT":[	126.46,1.95	],
				"133 km BaratLaut HALMAHERABARAT-MALUT":[	126.52,1.99	],
				"93 km Tenggara BOLAANGMONGONDOWSEL-SULUT":[	124.1,-0.39	],
				"133 km TimurLaut BITUNG-SULUT":[	126.33,1.75	],
				"127 km BaratLaut HALMAHERABARAT-MALUT":[	126.54,1.91	],
				"133 km BaratLaut HALMAHERABARAT-MALUT":[	126.47,1.9	],
				"125 km BaratLaut HALMAHERABARAT-MALUT":[	126.49,1.74	],
				"212 km BaratLaut MALUKUTENGGARABRT":[	129.6,-6.88	],
				"151 km BaratDaya TANGGAMUS-LAMPUNG":[	104.15,-6.57	],
				"80 km BaratLaut KEP-TALAUD-SULUT":[	126.26,4.77	],
				"101 km BaratDaya KAB-ACEHJAYA":[	94.79,4.68	],
				"58 km BaratDaya BOLAANGMONGONDOWSEL-SULUT":[	123.76,-0.08	],
				"75 km BaratDaya SELUMA-BENGKULU":[	102.14,-4.39	],
				"162 km BaratLaut MALUKUTENGGARABRT":[	130.51,-6.41	],
				"125 km BaratLaut BIMA-NTB":[	117.59,-7.22	],
				"200 km Tenggara KAB-MALANG-JATIM":[	112.87,-10.01	],
				"132 km BaratLaut HALMAHERABARAT-MALUT":[	126.38,1.54	],
				"57 km BaratLaut HALMAHERABARAT-MALUT":[	127.3,1.83	],
				"180 km BaratLaut KEP-TALAUD-SULUT":[	125.88,5.63	],
				"84 km BaratDaya PANDEGLANG-BANTEN":[	105.29,-7.2	],
				"166 km TimurLaut PULAUMOROTAI-MALUT":[	128.63,3.83	],
				"73 km BaratDaya LAMPUNGBARAT":[	104.1,-5.81	],
				"18 km TimurLaut KOTA-SUKABUMI-JABAR":[	107.07,-6.88	],
				"44 km BaratLaut SERAMBAGIANBARAT-MALUKU":[	128.05,-2.92	],
				"46 km BaratLaut NIASBARAT-SUMUT":[	97.07,1.01	],
				"256 km BaratDaya KAB-ACEHJAYA":[	93.6,3.78	],
				"189 km BaratLaut MALUKUTENGGARABRT":[	129.86,-6.81	],
				"13 km BaratDaya NABIRE-PAPUA":[	135.38,-3.39	],
				"176 km BaratLaut MALUKUTENGGARABRT":[	130.06,-6.7	],
				"96 km BaratLaut PANDEGLANG-BANTEN":[	104.93,-6.51	],
				"31 km BaratDaya KEP-TALAUD-SULUT":[	126.53,4.3	],
				"176 km BaratLaut MALUKUTENGGARABRT":[	130.34,-6.39	],
				"19 km BaratDaya MAYBRAT-PAPUABRT":[	132.35,-1.28	],
				"127 km BaratLaut MALUKUTENGGARABRT":[	131.07,-6.49	],
				"137 km BaratLaut TUAL-MALUKU":[	131.57,-5.25	],
				"257 km TimurLaut MALUKUBRTDAYA":[	128.72,-7.69	],
				"101 km BaratLaut YALIMO-PAPUA":[	139.42,-2.7	],
				"49 km BaratDaya KEP-TALAUD-SULUT":[	126.63,3.89	],
				"119 km BaratDaya PESAWARAN-LAMPUNG":[	104.56,-6.4	],
				"158 km BaratLaut MALUKUTENGGARABRT":[	130.1,-6.95	],
				"83 km BaratDaya PACITAN-JATIM":[	111.09,-8.86	],
				"67 km TimurLaut DONGGALA-SULTENG":[	119.9,0.21	],
				"154 km TimurLaut TELUKBINTUNI-PAPUABRT":[	134.31,-0.96	],
				"237 km BaratDaya SERAMBAGIANBARAT-MALUKU":[	128.25,-5.23	],
				"228 km TimurLaut MALUKUBRTDAYA":[	128.45,-7.68	],
				"55 km BaratDaya BENGKULUSELATAN":[	102.59,-4.53	],
				"31 km BaratDaya NIASUTARA-SUMUT":[	97.18,1.13	],
				"25 km BaratDaya NIASUTARA-SUMUT":[	97.21,1.18	],
				"50 km BaratDaya SELUMA-BENGKULU":[	102.54,-4.46	],
				"128 km Tenggara BOLAANGMONGONDOWTMR-SULUT":[	125.17,-0.21	],
				"53 km BaratDaya BOLAANGMONGONDOWSEL-SULUT":[	123.8,-0.04	],
				"57 km TimurLaut SARMI-PAPUA":[	139.27,-1.87	],
				"325 km BaratLaut KOTA-SABANG-NAD":[	92.57,6.86	],
				"439 km BaratLaut KOTA-SABANG-NAD":[	92.59,8.69	],
				"62 km TimurLaut MALUKUTENGAH":[	129.5,-2.69	],
				"14 km BaratDaya TANAHDATAR-SUMBAR":[	100.53,-0.57	],
				"131 km Tenggara BOLAANGMONGONDOWTMR-SULUT":[	125.17,-0.24	],
				"139 km Tenggara BOLAANGMONGONDOWTMR-SULUT":[	125.16,-0.33	],
				"138 km Tenggara BOLAANGMONGONDOWTMR-SULUT":[	125.18,-0.31	],
				"117 km BaratDaya SUMBABARATDAYA-NTT":[	118.16,-9.91	],
				"32 km BaratDaya PADANGLAWAS-SUMUT":[	99.8,0.91	],
				"154 km BaratDaya KAB-MALANG-JATIM":[	112.51,-9.6	],
				"238 km TimurLaut MALUKUBRTDAYA":[	128.54,-7.68	],
				"192 km BaratLaut MALUKUTENGGARABRT":[	129.74,-7.02	],
				"399 km BaratLaut KAB-SIMEULUE-NAD":[	92.51,2.86	],
				"60 km TimurLaut SIAUTAGULANDANGBIARO-SULUT":[	125.95,2.81	],
				"45 km BaratLaut PUNCAKJAYA-PAPUA":[	137.77,-3.38	],
				"73 km BaratLaut PULAUMOROTAI-MALUT":[	128.13,2.93	],
				"119 km BaratLaut MALUKUBRTDAYA":[	125.49,-7.22	],
				"124 km Tenggara NIASSELATAN-SUMUT":[	98.12,-0.39	],
				"52 km BaratDaya WAROPEN-PAPUA":[	136.26,-2.72	],
				"74 km TimurLaut KEP-TALAUD-SULUT":[	127.36,4.69	],
				"46 km BaratLaut KEP-TALAUD-SULUT":[	126.46,4.54	],
				"200 km TimurLaut MALUKUBRTDAYA":[	128.12,-7.26	],
				"97 km BaratDaya KOTA-SABANG-NAD":[	94.55,5.35	],
				"96 km Tenggara NIASSELATAN-SUMUT":[	98.55,0.2	],
				"53 km BaratDaya MUKOMUKO-BENGKULU":[	101.22,-3.09	],
				"28 km TimurLaut KAB-ACEHBARAT":[	96.41,4.46	],
				"50 km Tenggara WAROPEN-PAPUA":[	136.51,-2.69	],
				"115 km Tenggara KAB-MALANG-JATIM":[	113.02,-9.19	],
				"110 km BaratDaya TRENGGALEK-JATIM":[	111.51,-9.15	],
				"527 km BaratDaya KOTA-SABANG-NAD":[	90.95,3.92	],
				"54 km TimurLaut MALUKUBRTDAYA":[	126.87,-7.65	],
				"76 km BaratDaya KEEROM-PAPUA":[	140.47,-3.65	],
				"17 km BaratLaut DONGGALA-SULTENG":[	119.74,-0.28	],
				"104 km Tenggara PACITAN-JATIM":[	111.24,-9.06	],
				"92 km BaratDaya PANDEGLANG-BANTEN":[	104.98,-6.83	],
				"126 km BaratLaut TUAL-MALUKU":[	131.69,-5.22	],
				"156 km BaratLaut MALUKUTENGGARABRT":[	130.02,-7.19	],
				"110 km TimurLaut LEMBATA-NTT":[	123.78,-7.46	],
				"91 km BaratLaut NIASUTARA-SUMUT":[	96.8,1.89	],
				"17 km Tenggara YALIMO-PAPUA":[	139.68,-3.69	],
				"9 km BaratLaut YALIMO-PAPUA":[	139.51,-3.52	],
				"91 km Tenggara BOLAANGMONGONDOWTMR-SULUT":[	124.74,-0.03	],
				"63 km BaratLaut KEP-MENTAWAI-SUMBAR":[	99.14,-2.01	],
				"125 km BaratLaut TERNATE-MALUT":[	126.34,1.35	],
				"128 km BaratDaya SUMBABARATDAYA-NTT":[	118.11,-10.05	],
				"59 km Tenggara BONEBOLANGO-GORONTALO":[	123.5,0.01	],
				"67 km BaratLaut YALIMO-PAPUA":[	139.42,-3.01	],
				"81 km Tenggara KAB-GORONTALO":[	122.95,-0.12	],
				"75 km BaratDaya KAB-TASIKMALAYA-JABAR":[	107.89,-8.16	],
				"103 km BaratLaut PULAUMOROTAI-MALUT":[	128.12,3.22	],
				"40 km TimurLaut LEBONG-BENGKULU":[	102.36,-2.84	],
				"42 km Tenggara BITUNG-SULUT":[	125.54,1.44	],
				"187 km BaratLaut RAJAAMPAT-PAPUABRT":[	129.95,0.35	],
				"223 km BaratLaut MALUKUTENGGARABRT":[	129.39,-7.25	],
				"97 km BaratDaya KEBUMEN-JATENG":[	109.28,-8.46	],
				"53 km TimurLaut SIAUTAGULANDANGBIARO-SULUT":[	125.88,2.87	],
				"634 km BaratDaya KAB-SIMEULUE-NAD":[	90.42,1.96	],
				"91 km BaratDaya LEBAK-BANTEN":[	106.01,-7.45	],
				"54 km BaratLaut MANGGARAIBRT-NTT":[	119.48,-8.57	],
				"61 km BaratLaut SIKKA-NTT":[	122.18,-8.13	],
				"155 km Tenggara SIAUTAGULANDANGBIARO-SULUT":[	126.8,2.72	],
				"234 km TimurLaut MALUKUBRTDAYA":[	128.51,-7.7	],
				"138 km BaratDaya LAMPUNGBARAT":[	103.98,-6.39	],
				"263 km BaratDaya LAMPUNGBARAT":[	102.6,-6.89	],
				"254 km BaratDaya LAMPUNGBARAT":[	102.65,-6.83	],
				"55 km BaratLaut SERAMBAGIANBARAT-MALUKU":[	128.07,-2.74	],
				"342 km BaratDaya KAB-ACEHJAYA":[	92.71,4	],
				"242 km BaratLaut KAB-SIMEULUE-NAD":[	93.94,2.96	],
				"170 km BaratDaya KAUR-BENGKULU":[	102.76,-5.98	],
				"39 km TimurLaut SUMBAWA-NTB":[	117.63,-8.41	],
				"16 km BaratDaya KEP-TALAUD-SULUT":[	126.72,4.18	],
				"65 km BaratDaya KAB-ACEHSINGKIL":[	97.87,1.93	],
				"88 km TimurLaut BURUSELATAN-MALUKU":[	127.48,-3.72	],
				"67 km BaratDaya KAB-ACEHSINGKIL":[	97.88,1.91	],
				"137 km BaratLaut MALUKUTENGGARABRT":[	130.91,-6.45	],
				"59 km TimurLaut MALUKUTENGGARABRT":[	131.71,-7.19	],
				"181 km BaratDaya BENGKULUSELATAN":[	101.97,-5.55	],
				"191 km BaratDaya LAMPUNGBARAT":[	103.47,-6.71	],
				"32 km BaratDaya OGANKOMRNGULUSEL-SUMSEL":[	103.97,-4.91	],
				"60 km TimurLaut TAMBRAUW-PAPUABRT":[	133.02,-0.07	],
				"27 km BaratLaut ALOR-NTT":[	124.59,-8.08	],
				"252 km BaratLaut MALUKUTENGGARABRT":[	129.3,-6.66	],
				"274 km Tenggara MALUKUBRTDAYA":[	128.39,-9.26	],
				"224 km TimurLaut MALUKUBRTDAYA":[	128.26,-7.01	],
				"215 km TimurLaut MALUKUBRTDAYA":[	128.2,-7.07	],
				"218 km TimurLaut MALUKUBRTDAYA":[	128.15,-6.89	],
				"162 km TimurLaut KEP-SULA-MALUT":[	126.25,-1.3	],
				"114 km Tenggara KAIMANA-PAPUABRT":[	133.86,-4.7	],
				"68 km BaratDaya KEBUMEN-JATENG":[	109.26,-8.16	],
				"203 km BaratLaut KEP-SANGIHE-SULUT":[	124.02,4.6	],
				"104 km BaratDaya KEBUMEN-JATENG":[	109.17,-8.48	],
				"117 km BaratLaut MALUKUTENGGARABRT":[	130.78,-6.72	],
				"126 km BaratDaya KEP-SELAYAR-SULSEL":[	120.39,-7.26	],
				"219 km BaratDaya MALUKUTENGGARABRT":[	129.42,-7.92	],
				"30 km BaratDaya KAB-ACEHBESAR":[	95.39,5.16	],
				"52 km TimurLaut MALUKUTENGAH":[	129.56,-2.86	],
				"64 km BaratDaya KAUR-BENGKULU":[	102.94,-4.94	],
				"127 km BaratLaut TERNATE-MALUT":[	126.37,1.43	],
				"30 km BaratLaut KAB-SUKABUMI-JABAR":[	106.63,-6.82	],
				"226 km BaratDaya KAB-SIMEULUE-NAD":[	94.11,2.16	],
				"27 km BaratDaya BANGGAIKEP-SULTENG":[	122.97,-1.55	],
				"132 km BaratDaya NIASSELATAN-SUMUT":[	97.37,-0.69	],
				"57 km BaratDaya TELUKWONDAMA-PAPUABRT":[	134.5,-3.24	],
				"72 km BaratDaya PANDEGLANG-BANTEN":[	105.37,-7.12	],
				"267 km TimurLaut MALUKUBRTDAYA":[	128.59,-6.8	],
				"75 km Tenggara PESAWARAN-LAMPUNG":[	105.24,-6.18	],
				"92 km BaratLaut PULAUMOROTAI-MALUT":[	128.23,3.15	]
				};

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};

var mapOption = {
    backgroundColor: '#404a59',
    title : {
        text: '',
        subtextStyle : {
            fontFamily : "'Lora', serif",
			color :'#333'
        }
    },
    tooltip : {
        trigger: 'item',
        showDelay: 0,
        transitionDuration: 0.2,
	
        formatter : function (params) {
            var value = (params.value[2] + ' SR');
			if (params.value=='-'){
				return '-';
			}else{
				return "Lokasi : "+params.name + '<br/>Magnitude : ' + value;
			}
        }
    },
    dataRange: {
	    
        x : 'right',
        y : 'top',
        min: 4.0,
        max: 8.0,
		precision:1,
		formatter : function(v, v2){
            return v + " SR - "+v2+" SR"
        },
		
		selectedMode:true,
		hoverLink : true,
		realtime : true,
		splitNumber : 4,
        color: ['darkred','red','orange','yellow'],

       //text:['8.0 SR','4.0 SR'],
		
        calculable : false,
        textStyle : {
            fontFamily : "'Lora', serif",
        }
    },
    geo: {
        map: 'INDONESIA',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: false,
        itemStyle: {
            normal: {
                areaColor: '#323c48',
                borderColor: '#111'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    series : [
        {
            name: 'pm2.5',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: function (v){
					if(v[2] > 7) {
						return (v[2]*v[2])
					} else if(v[2]>6) {
						return ((v[2]*v[2])/2)
					}else {
						return ((v[2]*v[2])/4)
					}
                },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#ddb926'
                }
            }
        },
        {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data.sort(function (a, b) {
                return b.value - a.value;
            }).slice(0, 6)),
            symbolSize: function (v){
					if(v[2] > 7) {
						return (v[2]*v[2])
					} else if(v[2]>6) {
						return ((v[2]*v[2])/2)
					}else {
						return ((v[2]*v[2])/4)
					}
                },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    color: '#f4e925',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 1
        }
    ]
};

var topfiveOption = {
    title : {
        text: 'Lima Kasus Gempa Terbesar',
        subtext: 'Tahun 2014',
        textStyle : {
            fontFamily : "'Lora', serif",
			
        },
        subtextStyle : {
            fontFamily : "'Lora', serif",
        }
    },
    tooltip : {
        trigger: 'item',
		formatter : function (params) {
            var value = (params.value + ' SR');
            return params.name + '<br/>' + value;
        },
        axisPointer : { 
            type : 'shadow'
        },
    },
    toolbox: {
        show : false,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType: {show: true, type: ['bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'value',
            boundaryGap : [0, 0.01],
            axisLabel : {
                textStyle : {
                    fontFamily : "'Lora', serif",
                }
            },
            axisLine : {
                lineStyle : {
                    color : 'dimgray'
                }
            },
            axisTick : {
                show : false
            }
        }
    ],
    yAxis : [
        {
            type : 'category',
            data : ['104 km \nBaratDaya \nKEBUMEN-\nJATENG','115 km \nBaratLaut \nHALMAHERA\nBARAT-MALUT','135 km \nBaratLaut \nHALMAHERA\nBARAT-MALUT','137 km \nBaratLaut \nHALMAHERA\nBARAT-MALUT','132 km \nBaratLaut \nHALMAHERA\nBARAT-MALUT'],
            axisLabel : {
                textStyle : {
                    fontFamily : "'Lora', serif",
                }
            },
            axisLine : {
                lineStyle : {
                    color : 'dimgray'
                }
            },
            axisTick : {
                show : false
            }
       }
    ],
    grid : {
        x : 100,
        x2 : 20,
    },
    series : [
        {
            type:'bar',
           data:[6.5,6.7,6.8,7.3,7.3],
            itemStyle: {
                normal:{color:'darkred'}
            },
        }
    ]
};

var pulauOption = {
    title : {
        text: 'Jumlah Kasus Gempa Tiap Pulau',
        subtext: 'Tahun 2014',
        textStyle : {
            fontFamily : "'Lora', serif",
        },
        subtextStyle : {
            fontFamily : "'Lora', serif",
        }
    },
       tooltip : {
        trigger: 'item',
		formatter : function (params) {
            var value = (params.value);
            return params.name + '<br/>' + value;
        },
        axisPointer : { 
            type : 'shadow'
        },
    },
  
    xAxis : [
        {
            type : 'value',
            boundaryGap : [0, 0.01],
            axisLabel : {
                textStyle : {
                    fontFamily : "'Lora', serif",
                }
            },
			
            axisLine : {
                lineStyle : {
                    color : 'dimgray'
                }
            },
            axisTick : {
                show : false
            }
            
        }
    ],
    yAxis : [
        {
            type : 'category',
            data : ['Kalimantan','NTT-NTB','Jawa','Papua','Sulawesi','Sumatera','Maluku'],
            axisLabel : {
                textStyle : {
                    fontFamily : "'Lora', serif",
                }
            },
            axisLine : {
                lineStyle : {
                    color : 'dimgray'
                }
            },
            axisTick : {
                show : false
            }
			
       }
    ],
    grid : {
        x : 100,
        x2 : 20,
    },
    series : [
        {
            type:'bar',
            data:[0,8,18,20,36,48,71],
			
            itemStyle: {
                normal:{color:'darkred'}
            },
        }
    ]
};
/*
var institutionOption = {
    title : {
        text: 'Kasus Korupsi Berdasarkan Instansi',
        subtext: 'Jumlah Kasus Pada Semester I 2014',
        textStyle : {
            fontFamily : "'Lora', serif",
        },
        subtextStyle : {
            fontFamily : "'Lora', serif",
        }
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : { 
            type : 'shadow'
        },
    },
    toolbox: {
        show : false,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'value',
            boundaryGap : [0, 0.01],
            axisLabel : {
                textStyle : {
                    fontFamily : "'Lora', serif",
                }
            }
        }
    ],
    yAxis : [
        {
            type : 'category',
            data : ['Pajak','KY','Bank','Koperasi','Dispenda','Dinperindag','PNPM','Bappeda','BUMD','Disnakertrans','Penegak\nHukum','Kesehatan','Dinas\n(lain-lain)','Non\nPemerintah','Kelautan\ndan Perikanan','Dinas\nKesehatan','Dishubkominfo','Pendidikan','BUMN','ESDM','Badan\nPemerintahan','Dinas\nPendidikan','Kementrian','DPU','DPRD','Pemda'],
            axisLabel : {
                textStyle : {
                    fontFamily : "'Lora', serif",
                }
            }
       }
    ],
    grid : {
        x : 100,
        x2 : 20,
    },
    series : [
        {
            //name:'2011年',
            type:'bar',
            data:[1,1,2,2,3,3,3,4,4,4,4,5,6,7,8,8,9,13,13,14,18,19,19,20,21,97],
            itemStyle: {
                normal:{color:'indianred'}
            },
        }
    ]
};*/


		
		$.get('assets/js/geojson.json', function (geoJson) {

			echarts.registerMap('INDONESIA', geoJson);
			var mapChart = echarts.init(document.getElementById('map'));
            mapChart.setOption(mapOption);
		});

       // var mapChart = ec.init(document.getElementById('map'));
        //mapChart.setOption(mapOption);

        var topfiveChart = echarts.init(document.getElementById('topfive-chart'));
        topfiveChart.setOption(topfiveOption);

        var pulauChart = echarts.init(document.getElementById('pulau-chart'));
        pulauChart.setOption(pulauOption);
/*
        var institutionChart = ec.init(document.getElementById('institution-chart'));
        institutionChart.setOption(institutionOption);*/
