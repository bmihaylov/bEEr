'use strict';
app
		.factory(
				'homeService',
				function($http, $location) {
					var allProjects = [
					                   {
					                	    "_id": "559217be9c582e7efe175795",
					                	    "index": 0,
					                	    "guid": "05396d11-af17-411b-8566-75bd96897e07",
					                	    "isNew": true,
					                	    "name": "sit ullamco",
					                	    "tasks": [
					                	      {
					                	        "_id": "559217be496236912d79f0c3",
					                	        "name": "do tempor cillum",
					                	        "description": "eu do ex dolor",
					                	        "isNew": true,
					                	        "comments": [
					                	          {
					                	            "_id": "559217be14c0b1827ca7f03f",
					                	            "from": "Todd Tanner",
					                	            "date": "2015-06-30 11:38:51 ",
					                	            "content": "culpa magna consectetur nostrud duis dolor reprehenderit ad nulla consequat",
					                	            "isNew": false
					                	          },
					                	          {
					                	            "_id": "559217be338364beb4db64c7",
					                	            "from": "Aurelia Hamilton",
					                	            "date": "2015-06-30 07:27:55 ",
					                	            "content": "cupidatat ullamco duis minim cupidatat minim ullamco velit non id",
					                	            "isNew": false
					                	          },
					                	          {
					                	            "_id": "559217be716527066018ce09",
					                	            "from": "Bette England",
					                	            "date": "2015-06-30 11:49:23 ",
					                	            "content": "anim laboris quis sint ex reprehenderit aliquip labore velit veniam",
					                	            "isNew": false
					                	          },
					                	          {
					                	            "_id": "559217be85301a9bb5b8d5a1",
					                	            "from": "Flynn Gallegos",
					                	            "date": "2015-06-30 22:28:31 ",
					                	            "content": "ullamco deserunt cillum ut eu officia dolor est ex labore",
					                	            "isNew": true
					                	          }
					                	        ]
					                	      },
					                	      {
					                	        "_id": "559217bed332b46f988f070e",
					                	        "name": "nisi aute ipsum",
					                	        "description": "commodo fugiat sit occaecat",
					                	        "isNew": false,
					                	        "comments": [
					                	          {
					                	            "_id": "559217be3f1d1f5acf53b7b5",
					                	            "from": "Helga Callahan",
					                	            "date": "2015-06-30 10:50:53 ",
					                	            "content": "dolore aliquip culpa eu proident do eu reprehenderit consequat veniam",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217be80f1a9e8dc73d812",
					                	            "from": "Reyna Rice",
					                	            "date": "2015-06-30 08:33:12 ",
					                	            "content": "duis deserunt magna nisi ut eiusmod ad magna consectetur irure",
					                	            "isNew": false
					                	          },
					                	          {
					                	            "_id": "559217be0dd07e5b475e1594",
					                	            "from": "Duke Nichols",
					                	            "date": "2015-06-30 14:57:29 ",
					                	            "content": "magna ex dolor ex eu ut proident exercitation ad nisi",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217be0ed5351f81a64b6e",
					                	            "from": "Massey Buckner",
					                	            "date": "2015-06-30 15:30:04 ",
					                	            "content": "elit excepteur et consectetur mollit in non laboris ipsum sint",
					                	            "isNew": false
					                	          }
					                	        ]
					                	      },
					                	      {
					                	        "_id": "559217bec3875bedbc940f34",
					                	        "name": "sint ut occaecat",
					                	        "description": "sit reprehenderit consectetur excepteur",
					                	        "isNew": false,
					                	        "comments": [
					                	          {
					                	            "_id": "559217be1a777e3241db947f",
					                	            "from": "Minnie Delgado",
					                	            "date": "2015-06-30 11:34:35 ",
					                	            "content": "laboris ipsum consequat in eiusmod esse excepteur duis ex incididunt",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217beab0541c22ee594de",
					                	            "from": "Michelle Steele",
					                	            "date": "2015-06-30 17:44:40 ",
					                	            "content": "occaecat voluptate sunt sunt incididunt veniam eiusmod officia culpa et",
					                	            "isNew": false
					                	          },
					                	          {
					                	            "_id": "559217becfb3cd631a6a938e",
					                	            "from": "William Snyder",
					                	            "date": "2015-06-30 21:36:25 ",
					                	            "content": "laboris in exercitation deserunt fugiat ex laborum ipsum aute aliquip",
					                	            "isNew": false
					                	          },
					                	          {
					                	            "_id": "559217beabd9be961437cb09",
					                	            "from": "Alvarado Hardy",
					                	            "date": "2015-06-30 13:17:16 ",
					                	            "content": "officia qui minim ipsum nulla ex irure sint est cupidatat",
					                	            "isNew": true
					                	          }
					                	        ]
					                	      },
					                	      {
					                	        "_id": "559217bee91e996271db35f7",
					                	        "name": "dolore ea voluptate",
					                	        "description": "duis culpa officia officia",
					                	        "isNew": false,
					                	        "comments": [
					                	          {
					                	            "_id": "559217bec448238f828d80f5",
					                	            "from": "Elisa Bean",
					                	            "date": "2015-06-30 20:53:15 ",
					                	            "content": "reprehenderit amet sit proident labore reprehenderit ex esse aliqua quis",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217be64c502180cc8cdb3",
					                	            "from": "Agnes Silva",
					                	            "date": "2015-06-30 18:13:22 ",
					                	            "content": "occaecat labore irure fugiat ea elit labore cupidatat irure consequat",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217beb8eddff123d3cadf",
					                	            "from": "Cain Ramirez",
					                	            "date": "2015-06-30 19:49:53 ",
					                	            "content": "qui do commodo sunt eu aliquip et sunt et exercitation",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217be89c61aa48c4a15b9",
					                	            "from": "White Oneil",
					                	            "date": "2015-06-30 22:18:36 ",
					                	            "content": "velit minim ad culpa et sunt irure dolore sint labore",
					                	            "isNew": false
					                	          }
					                	        ]
					                	      },
					                	      {
					                	        "_id": "559217be991100f29e21a731",
					                	        "name": "labore magna pariatur",
					                	        "description": "reprehenderit et cupidatat sunt",
					                	        "isNew": false,
					                	        "comments": [
					                	          {
					                	            "_id": "559217be232327c4adbe314b",
					                	            "from": "Millicent Witt",
					                	            "date": "2015-06-30 21:05:31 ",
					                	            "content": "reprehenderit ea pariatur sint nostrud id amet do veniam reprehenderit",
					                	            "isNew": false
					                	          },
					                	          {
					                	            "_id": "559217bee819ca2491668107",
					                	            "from": "Marianne Collins",
					                	            "date": "2015-06-30 17:24:29 ",
					                	            "content": "qui labore proident adipisicing ea aliqua in est minim ut",
					                	            "isNew": false
					                	          },
					                	          {
					                	            "_id": "559217be8ef289b504bd7122",
					                	            "from": "Harrison Banks",
					                	            "date": "2015-06-30 18:56:45 ",
					                	            "content": "qui quis consequat enim sint sint duis excepteur laboris laborum",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217be42f8cff023653014",
					                	            "from": "Debra Merritt",
					                	            "date": "2015-06-30 07:51:27 ",
					                	            "content": "do proident ex adipisicing eu aliquip duis do aliqua nisi",
					                	            "isNew": false
					                	          }
					                	        ]
					                	      },
					                	      {
					                	        "_id": "559217bed791fecbdd673923",
					                	        "name": "voluptate laborum eu",
					                	        "description": "id magna qui est",
					                	        "isNew": false,
					                	        "comments": [
					                	          {
					                	            "_id": "559217be0372e5647c7f5e67",
					                	            "from": "Houston Moss",
					                	            "date": "2015-06-30 20:59:44 ",
					                	            "content": "non anim sint occaecat officia ex sit incididunt exercitation duis",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217be0b25688754453dca",
					                	            "from": "Rosario Murphy",
					                	            "date": "2015-06-30 07:23:35 ",
					                	            "content": "ad irure velit exercitation ea ut minim laborum ullamco ut",
					                	            "isNew": false
					                	          },
					                	          {
					                	            "_id": "559217becace8f2ba4ef5089",
					                	            "from": "Bernadette Howe",
					                	            "date": "2015-06-30 17:49:43 ",
					                	            "content": "dolor fugiat elit reprehenderit occaecat velit ut deserunt anim velit",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217beb50c06fdd43c2653",
					                	            "from": "Mayer Shaffer",
					                	            "date": "2015-06-30 19:16:52 ",
					                	            "content": "qui tempor mollit elit ea reprehenderit quis elit fugiat aute",
					                	            "isNew": false
					                	          }
					                	        ]
					                	      },
					                	      {
					                	        "_id": "559217beceeec81202633b68",
					                	        "name": "deserunt mollit magna",
					                	        "description": "aliqua tempor qui nisi",
					                	        "isNew": true,
					                	        "comments": [
					                	          {
					                	            "_id": "559217bec31cc7e7ec82643a",
					                	            "from": "Brennan Diaz",
					                	            "date": "2015-06-30 17:29:33 ",
					                	            "content": "commodo est minim excepteur esse minim dolor sit ut eu",
					                	            "isNew": false
					                	          },
					                	          {
					                	            "_id": "559217be69802484e82cf835",
					                	            "from": "Mattie Strickland",
					                	            "date": "2015-06-30 17:08:11 ",
					                	            "content": "dolore eiusmod nulla sint quis deserunt nisi anim ut voluptate",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217beacc03e6f10222e05",
					                	            "from": "Maribel Bates",
					                	            "date": "2015-06-30 09:07:37 ",
					                	            "content": "mollit enim velit proident cillum cillum aute deserunt aliquip incididunt",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217becd0080b6c4a7c254",
					                	            "from": "Marylou Mayo",
					                	            "date": "2015-06-30 23:42:37 ",
					                	            "content": "quis dolor ipsum aliquip laboris quis in aliqua tempor dolor",
					                	            "isNew": true
					                	          }
					                	        ]
					                	      }
					                	    ]
					                	  },
					                	  {
					                	    "_id": "559217be7e04128f9b79f4d4",
					                	    "index": 1,
					                	    "guid": "9182ef6b-8452-456b-b584-a7114a2b5a69",
					                	    "isNew": false,
					                	    "name": "aliqua consequat",
					                	    "tasks": [
					                	      {
					                	        "_id": "559217bea79ce45038dff8cb",
					                	        "name": "quis Lorem laborum",
					                	        "description": "ad nostrud sint cupidatat",
					                	        "isNew": true,
					                	        "comments": [
					                	          {
					                	            "_id": "559217be4815de9632ad1c64",
					                	            "from": "Coleen Sanford",
					                	            "date": "2015-06-30 20:38:52 ",
					                	            "content": "magna labore magna ullamco elit est consequat ex esse minim",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217be350bb6342d0bd0c6",
					                	            "from": "Araceli Holmes",
					                	            "date": "2015-06-30 07:29:53 ",
					                	            "content": "adipisicing magna mollit anim commodo culpa proident cupidatat et aliqua",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217be30c52495a630cc55",
					                	            "from": "Gina Browning",
					                	            "date": "2015-06-30 13:26:41 ",
					                	            "content": "ex officia labore occaecat quis officia non in ut excepteur",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217be79e73b5e23ff1df6",
					                	            "from": "Villarreal Navarro",
					                	            "date": "2015-06-30 11:58:46 ",
					                	            "content": "aute nulla mollit dolore ex eiusmod laborum eiusmod anim ut",
					                	            "isNew": false
					                	          }
					                	        ]
					                	      },
					                	      {
					                	        "_id": "559217beb3cbabe8b1a75ef5",
					                	        "name": "Lorem sunt dolor",
					                	        "description": "aliquip cupidatat dolor consectetur",
					                	        "isNew": false,
					                	        "comments": [
					                	          {
					                	            "_id": "559217be31fc8258c86e9713",
					                	            "from": "Melendez Conrad",
					                	            "date": "2015-06-30 07:48:56 ",
					                	            "content": "excepteur aliquip quis esse deserunt ex qui officia enim reprehenderit",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217be49cd1f804d73fb79",
					                	            "from": "Leona Booth",
					                	            "date": "2015-06-30 11:18:58 ",
					                	            "content": "magna quis eu irure cillum occaecat sint laboris qui sunt",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217be363360a216843046",
					                	            "from": "Joseph Osborne",
					                	            "date": "2015-06-30 18:41:40 ",
					                	            "content": "dolor mollit proident laboris cillum nostrud dolor culpa dolor anim",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217be779ef0d2a6628313",
					                	            "from": "Leticia Fernandez",
					                	            "date": "2015-06-30 19:25:06 ",
					                	            "content": "veniam tempor in amet Lorem ullamco pariatur elit cillum irure",
					                	            "isNew": false
					                	          }
					                	        ]
					                	      },
					                	      {
					                	        "_id": "559217be915afdbf23e4af8f",
					                	        "name": "duis qui cillum",
					                	        "description": "ex nulla quis non",
					                	        "isNew": true,
					                	        "comments": [
					                	          {
					                	            "_id": "559217be29b5607d904f5661",
					                	            "from": "Fleming Higgins",
					                	            "date": "2015-06-30 17:52:03 ",
					                	            "content": "fugiat officia cupidatat adipisicing ut pariatur nulla eiusmod exercitation minim",
					                	            "isNew": false
					                	          },
					                	          {
					                	            "_id": "559217be31b91dbfc833513f",
					                	            "from": "Schultz Summers",
					                	            "date": "2015-06-30 15:15:25 ",
					                	            "content": "do ea mollit fugiat minim id velit reprehenderit qui id",
					                	            "isNew": false
					                	          },
					                	          {
					                	            "_id": "559217beb7dcf94e25ebfb77",
					                	            "from": "Powers Ramsey",
					                	            "date": "2015-06-30 14:10:33 ",
					                	            "content": "non culpa laborum cillum duis eu ad fugiat mollit ipsum",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217be9ecdce497d615e4e",
					                	            "from": "Charlotte Hendrix",
					                	            "date": "2015-06-30 22:07:56 ",
					                	            "content": "commodo tempor et labore eiusmod ex et adipisicing magna ut",
					                	            "isNew": true
					                	          }
					                	        ]
					                	      },
					                	      {
					                	        "_id": "559217bed400f4d6a08a671c",
					                	        "name": "fugiat veniam nisi",
					                	        "description": "duis anim non ut",
					                	        "isNew": false,
					                	        "comments": [
					                	          {
					                	            "_id": "559217bec0e14406e2d54751",
					                	            "from": "Reynolds Obrien",
					                	            "date": "2015-06-30 08:18:33 ",
					                	            "content": "cupidatat pariatur id sint elit nulla cupidatat ipsum reprehenderit minim",
					                	            "isNew": false
					                	          },
					                	          {
					                	            "_id": "559217beb9752cd48bc97c47",
					                	            "from": "Jordan Holt",
					                	            "date": "2015-06-30 13:47:27 ",
					                	            "content": "et dolor aliqua voluptate amet enim fugiat eiusmod nisi consequat",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217becd38b944f2a4467f",
					                	            "from": "Mcpherson Russo",
					                	            "date": "2015-06-30 19:24:27 ",
					                	            "content": "velit irure occaecat sit aliqua labore id et aliquip id",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217be7a87313fd8126d38",
					                	            "from": "Cruz Terrell",
					                	            "date": "2015-06-30 09:08:17 ",
					                	            "content": "ut ullamco in adipisicing eu officia magna ut consectetur nisi",
					                	            "isNew": true
					                	          }
					                	        ]
					                	      },
					                	      {
					                	        "_id": "559217be61be9c2ee09dc4fb",
					                	        "name": "elit deserunt incididunt",
					                	        "description": "aliquip cillum culpa tempor",
					                	        "isNew": true,
					                	        "comments": [
					                	          {
					                	            "_id": "559217be71b4b4af39f87f15",
					                	            "from": "Janis Dixon",
					                	            "date": "2015-06-30 12:23:01 ",
					                	            "content": "non tempor pariatur dolor Lorem elit elit ex sint exercitation",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217be22387585c8e3af67",
					                	            "from": "Paul Hudson",
					                	            "date": "2015-06-30 22:18:57 ",
					                	            "content": "non veniam veniam aute ullamco elit ex eu velit reprehenderit",
					                	            "isNew": false
					                	          },
					                	          {
					                	            "_id": "559217be4d2d6726cead48fb",
					                	            "from": "Coleman Benjamin",
					                	            "date": "2015-06-30 22:37:58 ",
					                	            "content": "dolore culpa irure id et cillum aute ullamco aliqua consequat",
					                	            "isNew": false
					                	          },
					                	          {
					                	            "_id": "559217beec004dc190e761e4",
					                	            "from": "Sawyer Jordan",
					                	            "date": "2015-06-30 12:17:02 ",
					                	            "content": "aute nulla commodo deserunt Lorem est aliquip ut amet consectetur",
					                	            "isNew": false
					                	          }
					                	        ]
					                	      },
					                	      {
					                	        "_id": "559217be64cb0bf417569169",
					                	        "name": "aliquip incididunt officia",
					                	        "description": "ad sunt sunt ullamco",
					                	        "isNew": false,
					                	        "comments": [
					                	          {
					                	            "_id": "559217be5858b2760b7ac08c",
					                	            "from": "Vaughan Rodriguez",
					                	            "date": "2015-06-30 11:43:53 ",
					                	            "content": "magna eu in voluptate ipsum veniam incididunt laborum non occaecat",
					                	            "isNew": false
					                	          },
					                	          {
					                	            "_id": "559217bed119c7b761bf1296",
					                	            "from": "Gena Spence",
					                	            "date": "2015-06-30 14:23:16 ",
					                	            "content": "labore do elit nisi aliquip consequat occaecat enim fugiat aute",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217beccac69476e881f00",
					                	            "from": "Wong Justice",
					                	            "date": "2015-06-30 08:57:58 ",
					                	            "content": "cupidatat cillum nostrud Lorem aliqua velit occaecat mollit deserunt commodo",
					                	            "isNew": false
					                	          },
					                	          {
					                	            "_id": "559217bee8d3c94ad69b7e48",
					                	            "from": "Cara Stein",
					                	            "date": "2015-06-30 22:21:13 ",
					                	            "content": "reprehenderit cupidatat culpa officia qui excepteur ad ipsum dolore tempor",
					                	            "isNew": true
					                	          }
					                	        ]
					                	      },
					                	      {
					                	        "_id": "559217be30865eac8bae72ca",
					                	        "name": "culpa eu ut",
					                	        "description": "incididunt aliquip proident irure",
					                	        "isNew": false,
					                	        "comments": [
					                	          {
					                	            "_id": "559217be0c95275602082393",
					                	            "from": "Hale Goodwin",
					                	            "date": "2015-06-30 18:11:45 ",
					                	            "content": "aliquip ea commodo aute commodo aute veniam duis tempor deserunt",
					                	            "isNew": false
					                	          },
					                	          {
					                	            "_id": "559217be440f98daaa90acae",
					                	            "from": "Fannie Walton",
					                	            "date": "2015-06-30 18:02:09 ",
					                	            "content": "ad fugiat ex quis aliquip do adipisicing cillum irure exercitation",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217bec8eccf9aad9e1e82",
					                	            "from": "Angie Golden",
					                	            "date": "2015-06-30 15:52:03 ",
					                	            "content": "sunt ex exercitation ut excepteur et ipsum aliqua deserunt esse",
					                	            "isNew": false
					                	          },
					                	          {
					                	            "_id": "559217bedd749f33f450b8f9",
					                	            "from": "Charity Evans",
					                	            "date": "2015-06-30 22:33:31 ",
					                	            "content": "do aliquip excepteur sint in ipsum tempor velit officia ut",
					                	            "isNew": false
					                	          }
					                	        ]
					                	      }
					                	    ]
					                	  },
					                	  {
					                	    "_id": "559217bebfa90adf5bd7b75b",
					                	    "index": 2,
					                	    "guid": "534f7ad2-d4c1-4934-baac-b3e65b69c28a",
					                	    "isNew": true,
					                	    "name": "ullamco elit",
					                	    "tasks": [
					                	      {
					                	        "_id": "559217bec8e6e5c65474026d",
					                	        "name": "laborum dolor quis",
					                	        "description": "et elit laborum aute",
					                	        "isNew": false,
					                	        "comments": [
					                	          {
					                	            "_id": "559217bed0000c0eb6f2315b",
					                	            "from": "Summers Moreno",
					                	            "date": "2015-06-30 10:15:23 ",
					                	            "content": "esse ex in ipsum tempor aliqua duis cillum et sunt",
					                	            "isNew": false
					                	          },
					                	          {
					                	            "_id": "559217bec0ef22d9e773f85e",
					                	            "from": "Mack Lawrence",
					                	            "date": "2015-06-30 16:18:31 ",
					                	            "content": "aute laboris duis deserunt ex consequat mollit labore id aliqua",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217bebec52c1c5f6921ce",
					                	            "from": "Daniels Short",
					                	            "date": "2015-06-30 12:22:48 ",
					                	            "content": "nostrud veniam aliquip commodo dolore fugiat dolor culpa ex eiusmod",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217be70c6c0c076c9a78e",
					                	            "from": "Dorothy Huff",
					                	            "date": "2015-06-30 11:46:55 ",
					                	            "content": "est ut fugiat excepteur eiusmod occaecat fugiat labore veniam commodo",
					                	            "isNew": true
					                	          }
					                	        ]
					                	      },
					                	      {
					                	        "_id": "559217be8e20378b0f5f6b6e",
					                	        "name": "exercitation proident est",
					                	        "description": "sunt in qui mollit",
					                	        "isNew": false,
					                	        "comments": [
					                	          {
					                	            "_id": "559217be951539bdb2a2f2bd",
					                	            "from": "Orr Saunders",
					                	            "date": "2015-06-30 14:42:33 ",
					                	            "content": "quis officia nostrud incididunt proident sint et proident cupidatat id",
					                	            "isNew": false
					                	          },
					                	          {
					                	            "_id": "559217bef6354f8dabb2b441",
					                	            "from": "Kerri Willis",
					                	            "date": "2015-06-30 19:24:13 ",
					                	            "content": "veniam minim sunt officia excepteur tempor qui labore reprehenderit minim",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217bed24c8f53852a4373",
					                	            "from": "Holmes Vang",
					                	            "date": "2015-06-30 09:44:36 ",
					                	            "content": "quis eu consequat cupidatat nostrud ut dolor eiusmod aute excepteur",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217be99e5426fdebc9535",
					                	            "from": "Elliott Woods",
					                	            "date": "2015-06-30 15:15:58 ",
					                	            "content": "eiusmod ea minim incididunt duis proident consectetur et deserunt amet",
					                	            "isNew": true
					                	          }
					                	        ]
					                	      },
					                	      {
					                	        "_id": "559217bedd3e35596a72271c",
					                	        "name": "laborum elit ullamco",
					                	        "description": "officia minim sint Lorem",
					                	        "isNew": true,
					                	        "comments": [
					                	          {
					                	            "_id": "559217be3679f77d2e1b78ac",
					                	            "from": "Eva Foster",
					                	            "date": "2015-06-30 22:44:52 ",
					                	            "content": "ipsum labore dolor ut id quis eiusmod aliquip culpa consequat",
					                	            "isNew": false
					                	          },
					                	          {
					                	            "_id": "559217be1dd3a0fcca7fbdf1",
					                	            "from": "Marietta Carter",
					                	            "date": "2015-06-30 15:01:27 ",
					                	            "content": "id cupidatat ad est mollit ex exercitation minim fugiat reprehenderit",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217bea7c01796eeec4ed2",
					                	            "from": "Guzman Hayes",
					                	            "date": "2015-06-30 15:40:15 ",
					                	            "content": "reprehenderit enim ex commodo aliquip veniam esse pariatur reprehenderit irure",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217bef5e6ae6e2df1e494",
					                	            "from": "Wilda Hicks",
					                	            "date": "2015-06-30 07:38:36 ",
					                	            "content": "ex dolor nostrud quis voluptate exercitation laborum Lorem qui quis",
					                	            "isNew": true
					                	          }
					                	        ]
					                	      },
					                	      {
					                	        "_id": "559217becdc56b5a2d13ecec",
					                	        "name": "consequat nostrud cillum",
					                	        "description": "ut voluptate reprehenderit amet",
					                	        "isNew": false,
					                	        "comments": [
					                	          {
					                	            "_id": "559217be0fbe3a70d690085f",
					                	            "from": "Jodi Oneill",
					                	            "date": "2015-06-30 16:31:04 ",
					                	            "content": "aliqua nulla sit quis et velit in ad ea nisi",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217beb840f603b130f831",
					                	            "from": "Burke Chan",
					                	            "date": "2015-06-30 11:22:32 ",
					                	            "content": "magna exercitation eu consectetur sunt minim cillum est adipisicing duis",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217bee4a51d6f99320b31",
					                	            "from": "Pollard Harding",
					                	            "date": "2015-06-30 21:38:43 ",
					                	            "content": "dolore consectetur proident et nostrud cillum proident sit occaecat ipsum",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217beef51a4fbf3677647",
					                	            "from": "Shelton Melton",
					                	            "date": "2015-06-30 17:26:23 ",
					                	            "content": "quis minim laborum ullamco ut reprehenderit et pariatur elit ipsum",
					                	            "isNew": false
					                	          }
					                	        ]
					                	      },
					                	      {
					                	        "_id": "559217be8410a157110d69c1",
					                	        "name": "pariatur nostrud culpa",
					                	        "description": "ipsum aliqua irure esse",
					                	        "isNew": false,
					                	        "comments": [
					                	          {
					                	            "_id": "559217befbd93c522c4fa69a",
					                	            "from": "Washington Jenkins",
					                	            "date": "2015-06-30 18:22:33 ",
					                	            "content": "est officia excepteur enim id irure anim irure incididunt sunt",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217befcd81e3ff843c913",
					                	            "from": "Alexandria Johnston",
					                	            "date": "2015-06-30 20:48:03 ",
					                	            "content": "reprehenderit quis consequat est consectetur excepteur in magna Lorem ea",
					                	            "isNew": false
					                	          },
					                	          {
					                	            "_id": "559217beca4500931242294e",
					                	            "from": "Kirkland Kramer",
					                	            "date": "2015-06-30 17:32:59 ",
					                	            "content": "consequat ea ad pariatur exercitation reprehenderit minim mollit minim excepteur",
					                	            "isNew": false
					                	          },
					                	          {
					                	            "_id": "559217be39462493986be033",
					                	            "from": "Dunlap Walker",
					                	            "date": "2015-06-30 11:22:42 ",
					                	            "content": "tempor in cupidatat nostrud aute cupidatat incididunt consectetur dolor do",
					                	            "isNew": true
					                	          }
					                	        ]
					                	      },
					                	      {
					                	        "_id": "559217be25eba11481f0813a",
					                	        "name": "elit elit esse",
					                	        "description": "consectetur nostrud reprehenderit nostrud",
					                	        "isNew": false,
					                	        "comments": [
					                	          {
					                	            "_id": "559217bebf253f5a1c5f3d83",
					                	            "from": "Helen Wright",
					                	            "date": "2015-06-30 22:50:24 ",
					                	            "content": "ipsum sint velit anim occaecat minim est voluptate enim culpa",
					                	            "isNew": false
					                	          },
					                	          {
					                	            "_id": "559217bec2f8afe1126c2048",
					                	            "from": "Hooper Nicholson",
					                	            "date": "2015-06-30 10:13:36 ",
					                	            "content": "in eiusmod exercitation qui exercitation cupidatat sunt aliqua nisi deserunt",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217beb2d5fd5b91845872",
					                	            "from": "Adkins Jensen",
					                	            "date": "2015-06-30 22:05:51 ",
					                	            "content": "laborum dolore ad eu officia voluptate minim eiusmod officia laborum",
					                	            "isNew": false
					                	          },
					                	          {
					                	            "_id": "559217be8cebc1b485648943",
					                	            "from": "Celina Arnold",
					                	            "date": "2015-06-30 21:50:11 ",
					                	            "content": "et Lorem nostrud laborum ad adipisicing et labore nostrud tempor",
					                	            "isNew": false
					                	          }
					                	        ]
					                	      },
					                	      {
					                	        "_id": "559217be01e6253cb0a4c7a2",
					                	        "name": "culpa quis aliquip",
					                	        "description": "sunt sunt consequat fugiat",
					                	        "isNew": true,
					                	        "comments": [
					                	          {
					                	            "_id": "559217be26ddf8fd79d31bef",
					                	            "from": "Mullins Crosby",
					                	            "date": "2015-06-30 17:32:37 ",
					                	            "content": "commodo dolore excepteur est nulla mollit ex exercitation Lorem mollit",
					                	            "isNew": false
					                	          },
					                	          {
					                	            "_id": "559217be1b67b58546ced1ca",
					                	            "from": "Callahan Newman",
					                	            "date": "2015-06-30 19:28:30 ",
					                	            "content": "veniam culpa non cillum excepteur excepteur reprehenderit eiusmod ullamco labore",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217be5d89fbfaf72ac52e",
					                	            "from": "Josephine Ratliff",
					                	            "date": "2015-06-30 12:17:17 ",
					                	            "content": "et dolore esse laboris proident ea mollit occaecat anim commodo",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217be8f6557e005cd0482",
					                	            "from": "Hayden Maddox",
					                	            "date": "2015-06-30 12:51:00 ",
					                	            "content": "qui qui anim et consectetur voluptate amet quis irure eiusmod",
					                	            "isNew": true
					                	          }
					                	        ]
					                	      }
					                	    ]
					                	  },
					                	  {
					                	    "_id": "559217be60eb3cecd39f71a2",
					                	    "index": 3,
					                	    "guid": "366edd71-4b65-404e-9050-7fccc61e5b4b",
					                	    "isNew": true,
					                	    "name": "deserunt velit",
					                	    "tasks": [
					                	      {
					                	        "_id": "559217be59e7b56552be7147",
					                	        "name": "fugiat cupidatat consectetur",
					                	        "description": "eiusmod incididunt officia officia",
					                	        "isNew": false,
					                	        "comments": [
					                	          {
					                	            "_id": "559217bee86773b279fa026a",
					                	            "from": "Ericka Goff",
					                	            "date": "2015-06-30 10:08:40 ",
					                	            "content": "nisi exercitation esse mollit ea incididunt occaecat adipisicing sint qui",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217be225a096a8b6daaaf",
					                	            "from": "Martinez Weaver",
					                	            "date": "2015-06-30 20:59:39 ",
					                	            "content": "aliqua commodo sit duis esse elit pariatur eiusmod eiusmod ipsum",
					                	            "isNew": false
					                	          },
					                	          {
					                	            "_id": "559217be2fd9b3ce2e3bc858",
					                	            "from": "Ewing Griffin",
					                	            "date": "2015-06-30 16:47:09 ",
					                	            "content": "irure occaecat fugiat ipsum quis mollit in voluptate et sunt",
					                	            "isNew": false
					                	          },
					                	          {
					                	            "_id": "559217beb6b1f7fdf4d68107",
					                	            "from": "Navarro Singleton",
					                	            "date": "2015-06-30 23:26:02 ",
					                	            "content": "eiusmod exercitation aliqua nisi eiusmod deserunt esse ullamco fugiat nisi",
					                	            "isNew": false
					                	          }
					                	        ]
					                	      },
					                	      {
					                	        "_id": "559217be2d436e110c29e484",
					                	        "name": "ex ut magna",
					                	        "description": "enim sit laborum incididunt",
					                	        "isNew": false,
					                	        "comments": [
					                	          {
					                	            "_id": "559217bef836ae1e2a5fd3f1",
					                	            "from": "Rosalind Mcconnell",
					                	            "date": "2015-06-30 14:45:34 ",
					                	            "content": "in irure velit enim dolor non aliquip tempor esse adipisicing",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217bec53d92f1edbbd921",
					                	            "from": "Wynn Thompson",
					                	            "date": "2015-06-30 10:46:42 ",
					                	            "content": "labore qui incididunt veniam velit duis Lorem dolor eu ipsum",
					                	            "isNew": false
					                	          },
					                	          {
					                	            "_id": "559217be74bfe6b2bc132faa",
					                	            "from": "Jimenez West",
					                	            "date": "2015-06-30 14:37:37 ",
					                	            "content": "fugiat anim aliquip cupidatat ut ipsum nulla in nisi qui",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217be927fa9c8a6f6ec4c",
					                	            "from": "Deleon Crane",
					                	            "date": "2015-06-30 22:08:44 ",
					                	            "content": "minim ut exercitation veniam mollit reprehenderit cupidatat est reprehenderit qui",
					                	            "isNew": true
					                	          }
					                	        ]
					                	      },
					                	      {
					                	        "_id": "559217be4e6fbc9fc7c53b44",
					                	        "name": "amet commodo laborum",
					                	        "description": "deserunt dolore duis culpa",
					                	        "isNew": true,
					                	        "comments": [
					                	          {
					                	            "_id": "559217bee6757385b185fdb2",
					                	            "from": "Humphrey Alvarez",
					                	            "date": "2015-06-30 14:05:57 ",
					                	            "content": "duis ipsum nisi fugiat elit veniam exercitation sunt labore incididunt",
					                	            "isNew": false
					                	          },
					                	          {
					                	            "_id": "559217beb263a7d208441595",
					                	            "from": "Esther Marsh",
					                	            "date": "2015-06-30 07:40:59 ",
					                	            "content": "consectetur magna labore enim consequat eu laborum proident nisi magna",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217bef7f85f4821a2b833",
					                	            "from": "Soto Mendoza",
					                	            "date": "2015-06-30 21:37:39 ",
					                	            "content": "Lorem magna ipsum in sunt veniam anim aliquip mollit sunt",
					                	            "isNew": false
					                	          },
					                	          {
					                	            "_id": "559217be81809c2373079f3d",
					                	            "from": "Lou Burch",
					                	            "date": "2015-06-30 14:20:27 ",
					                	            "content": "cillum ad proident enim minim dolore eiusmod irure cillum consequat",
					                	            "isNew": false
					                	          }
					                	        ]
					                	      },
					                	      {
					                	        "_id": "559217be7f32118b165c6cf3",
					                	        "name": "dolor est reprehenderit",
					                	        "description": "mollit deserunt laboris veniam",
					                	        "isNew": false,
					                	        "comments": [
					                	          {
					                	            "_id": "559217be259cf171863935d7",
					                	            "from": "Goldie Trujillo",
					                	            "date": "2015-06-30 09:46:05 ",
					                	            "content": "nulla ad ut cillum cillum esse elit cupidatat ipsum laborum",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217bef52c3e2966f617c5",
					                	            "from": "Dolly Davidson",
					                	            "date": "2015-06-30 19:15:03 ",
					                	            "content": "est pariatur consequat dolore cupidatat veniam est sint dolor officia",
					                	            "isNew": false
					                	          },
					                	          {
					                	            "_id": "559217bec8b7da956185afbe",
					                	            "from": "Lindsey Heath",
					                	            "date": "2015-06-30 12:59:24 ",
					                	            "content": "aliqua aute ea qui eiusmod sit ex amet irure ea",
					                	            "isNew": false
					                	          },
					                	          {
					                	            "_id": "559217be7631815621cc39f5",
					                	            "from": "Dena Fleming",
					                	            "date": "2015-06-30 13:36:52 ",
					                	            "content": "aliquip Lorem labore officia proident incididunt ea magna et nostrud",
					                	            "isNew": true
					                	          }
					                	        ]
					                	      },
					                	      {
					                	        "_id": "559217bebcca709d0be7bf6e",
					                	        "name": "incididunt aute nisi",
					                	        "description": "esse ullamco veniam nulla",
					                	        "isNew": false,
					                	        "comments": [
					                	          {
					                	            "_id": "559217beeac8db9d8c6a3f55",
					                	            "from": "Chase Vinson",
					                	            "date": "2015-06-30 20:38:13 ",
					                	            "content": "mollit eu commodo ullamco mollit qui fugiat consequat nostrud quis",
					                	            "isNew": false
					                	          },
					                	          {
					                	            "_id": "559217befa537ea1e5d35fae",
					                	            "from": "Ramirez Gallagher",
					                	            "date": "2015-06-30 07:57:47 ",
					                	            "content": "nisi id officia incididunt anim minim eiusmod tempor aliqua id",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217be27cf218eccc67287",
					                	            "from": "Travis Frederick",
					                	            "date": "2015-06-30 15:14:05 ",
					                	            "content": "cupidatat fugiat consequat occaecat Lorem consequat Lorem esse cupidatat dolore",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217be42facaae9d0afb87",
					                	            "from": "Bruce Downs",
					                	            "date": "2015-06-30 13:53:19 ",
					                	            "content": "veniam ex do excepteur et non qui non culpa consectetur",
					                	            "isNew": true
					                	          }
					                	        ]
					                	      },
					                	      {
					                	        "_id": "559217be4ace4b58e548f457",
					                	        "name": "cillum anim proident",
					                	        "description": "duis fugiat nostrud dolor",
					                	        "isNew": false,
					                	        "comments": [
					                	          {
					                	            "_id": "559217be0ccbb625edb94722",
					                	            "from": "Velez Carroll",
					                	            "date": "2015-06-30 09:54:06 ",
					                	            "content": "consequat proident laborum voluptate reprehenderit duis commodo minim nisi elit",
					                	            "isNew": false
					                	          },
					                	          {
					                	            "_id": "559217be932e0cc3f39f113f",
					                	            "from": "Slater Byrd",
					                	            "date": "2015-06-30 08:10:11 ",
					                	            "content": "eu nulla sunt ut ea occaecat dolor ea pariatur deserunt",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217be38c9d84a8a9c47db",
					                	            "from": "Salas Foley",
					                	            "date": "2015-06-30 08:08:18 ",
					                	            "content": "velit eu duis cupidatat mollit nostrud eu labore ad dolore",
					                	            "isNew": false
					                	          },
					                	          {
					                	            "_id": "559217be73575dcf94d73a37",
					                	            "from": "Jamie Nieves",
					                	            "date": "2015-06-30 19:07:27 ",
					                	            "content": "irure magna ad exercitation cupidatat laboris mollit tempor non do",
					                	            "isNew": true
					                	          }
					                	        ]
					                	      },
					                	      {
					                	        "_id": "559217be8db8f8c929626e3b",
					                	        "name": "consequat qui amet",
					                	        "description": "fugiat officia dolor ipsum",
					                	        "isNew": true,
					                	        "comments": [
					                	          {
					                	            "_id": "559217bed260bded97cc8a7e",
					                	            "from": "Ellison Alexander",
					                	            "date": "2015-06-30 07:55:26 ",
					                	            "content": "occaecat sit do minim aliquip irure nulla dolor dolor Lorem",
					                	            "isNew": false
					                	          },
					                	          {
					                	            "_id": "559217bee9c999c6d1c07934",
					                	            "from": "Georgina Porter",
					                	            "date": "2015-06-30 17:55:14 ",
					                	            "content": "anim magna quis minim nisi consequat culpa et voluptate elit",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217be27f7e3f3b6cae8d3",
					                	            "from": "Reed Peck",
					                	            "date": "2015-06-30 08:24:25 ",
					                	            "content": "quis enim et proident laboris cillum eu aute excepteur quis",
					                	            "isNew": false
					                	          },
					                	          {
					                	            "_id": "559217be16e6b05e20300c76",
					                	            "from": "Leah Smith",
					                	            "date": "2015-06-30 10:39:46 ",
					                	            "content": "sint amet exercitation nostrud incididunt sint sunt adipisicing sint enim",
					                	            "isNew": false
					                	          }
					                	        ]
					                	      }
					                	    ]
					                	  },
					                	  {
					                	    "_id": "559217be4e36b253b8a0d70f",
					                	    "index": 4,
					                	    "guid": "5f6cd7dc-bb17-4c51-b28e-6e1961950e98",
					                	    "isNew": true,
					                	    "name": "anim velit",
					                	    "tasks": [
					                	      {
					                	        "_id": "559217be77061817d8ab51d4",
					                	        "name": "ex sint non",
					                	        "description": "in ea ex irure",
					                	        "isNew": true,
					                	        "comments": [
					                	          {
					                	            "_id": "559217be75444fe14ee15c56",
					                	            "from": "Sondra Elliott",
					                	            "date": "2015-06-30 11:37:51 ",
					                	            "content": "sunt irure id aliqua dolor in labore elit dolor sunt",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217befa7e9e753875349e",
					                	            "from": "Isabel Myers",
					                	            "date": "2015-06-30 11:32:51 ",
					                	            "content": "minim culpa pariatur mollit Lorem dolor incididunt nisi aute nisi",
					                	            "isNew": false
					                	          },
					                	          {
					                	            "_id": "559217be5a5ed9d1ca2e6d96",
					                	            "from": "Meredith Frank",
					                	            "date": "2015-06-30 15:34:31 ",
					                	            "content": "esse adipisicing tempor exercitation velit ut in amet voluptate Lorem",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217be9f1fcde73a0ceb41",
					                	            "from": "Barlow Oliver",
					                	            "date": "2015-06-30 21:50:57 ",
					                	            "content": "occaecat pariatur duis cupidatat consequat cupidatat laborum occaecat excepteur excepteur",
					                	            "isNew": true
					                	          }
					                	        ]
					                	      },
					                	      {
					                	        "_id": "559217bee1940c3159dc80bc",
					                	        "name": "veniam reprehenderit quis",
					                	        "description": "proident aliqua labore aute",
					                	        "isNew": true,
					                	        "comments": [
					                	          {
					                	            "_id": "559217be742f369a5b9ec197",
					                	            "from": "Claudine Harper",
					                	            "date": "2015-06-30 18:57:50 ",
					                	            "content": "consectetur in nisi veniam ea sint irure in aliqua sit",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217be89a714c091d6b511",
					                	            "from": "Sandra Reese",
					                	            "date": "2015-06-30 15:43:03 ",
					                	            "content": "ex tempor consequat anim veniam non labore consectetur mollit fugiat",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217be5207e0b217765f3c",
					                	            "from": "Hopper Huffman",
					                	            "date": "2015-06-30 15:55:06 ",
					                	            "content": "do velit non incididunt enim amet sint deserunt incididunt excepteur",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217be3ccecb183e341f85",
					                	            "from": "Alberta Brooks",
					                	            "date": "2015-06-30 10:27:39 ",
					                	            "content": "consectetur ex excepteur ut incididunt do voluptate cillum Lorem laborum",
					                	            "isNew": false
					                	          }
					                	        ]
					                	      },
					                	      {
					                	        "_id": "559217beb20ed5907be89223",
					                	        "name": "do non nisi",
					                	        "description": "velit excepteur enim pariatur",
					                	        "isNew": false,
					                	        "comments": [
					                	          {
					                	            "_id": "559217be136fbf6af9b47c3b",
					                	            "from": "Morse House",
					                	            "date": "2015-06-30 15:36:11 ",
					                	            "content": "in fugiat et sunt aute sunt et eiusmod aute aute",
					                	            "isNew": false
					                	          },
					                	          {
					                	            "_id": "559217bec6b2866c8f3ffb91",
					                	            "from": "Patricia Patel",
					                	            "date": "2015-06-30 14:02:22 ",
					                	            "content": "ipsum voluptate ut voluptate pariatur anim Lorem veniam irure voluptate",
					                	            "isNew": false
					                	          },
					                	          {
					                	            "_id": "559217bea1980a191cff999a",
					                	            "from": "Joy Black",
					                	            "date": "2015-06-30 14:53:05 ",
					                	            "content": "nisi veniam non dolore culpa esse velit adipisicing quis tempor",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217beef8032d7df2c5bae",
					                	            "from": "Georgette Small",
					                	            "date": "2015-06-30 21:00:35 ",
					                	            "content": "eu irure excepteur non esse esse esse nisi eu id",
					                	            "isNew": false
					                	          }
					                	        ]
					                	      },
					                	      {
					                	        "_id": "559217bef42da3cad7edac3c",
					                	        "name": "ea nostrud aute",
					                	        "description": "nisi velit anim officia",
					                	        "isNew": true,
					                	        "comments": [
					                	          {
					                	            "_id": "559217be46611ecf0ebb85b7",
					                	            "from": "Hart Mendez",
					                	            "date": "2015-06-30 19:56:02 ",
					                	            "content": "exercitation minim laborum reprehenderit nostrud dolor adipisicing do reprehenderit velit",
					                	            "isNew": false
					                	          },
					                	          {
					                	            "_id": "559217bedc000e7f40f82812",
					                	            "from": "Enid Sykes",
					                	            "date": "2015-06-30 09:05:51 ",
					                	            "content": "mollit et minim magna occaecat ea laborum amet consequat duis",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217bea833f6ca3938145e",
					                	            "from": "Stanton Castillo",
					                	            "date": "2015-06-30 15:50:21 ",
					                	            "content": "Lorem veniam eu qui cillum ullamco culpa quis id deserunt",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217bee6accb6753a34937",
					                	            "from": "Jewel Richmond",
					                	            "date": "2015-06-30 22:13:38 ",
					                	            "content": "occaecat officia exercitation nisi adipisicing labore laborum ex nostrud culpa",
					                	            "isNew": true
					                	          }
					                	        ]
					                	      },
					                	      {
					                	        "_id": "559217bedc82cc46f5bf6935",
					                	        "name": "excepteur commodo commodo",
					                	        "description": "ex laboris mollit commodo",
					                	        "isNew": true,
					                	        "comments": [
					                	          {
					                	            "_id": "559217be9f79febfd3776c56",
					                	            "from": "Workman Stanley",
					                	            "date": "2015-06-30 10:46:50 ",
					                	            "content": "consequat amet incididunt ipsum ut reprehenderit dolor consectetur duis labore",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217bef6f0e4e33448678d",
					                	            "from": "Dominguez Wiley",
					                	            "date": "2015-06-30 07:26:07 ",
					                	            "content": "qui id occaecat aute sint incididunt aliquip deserunt in ipsum",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217beadf17985b94ae3e8",
					                	            "from": "Colon Guy",
					                	            "date": "2015-06-30 13:45:25 ",
					                	            "content": "ut esse Lorem pariatur fugiat consectetur sint cillum adipisicing consequat",
					                	            "isNew": false
					                	          },
					                	          {
					                	            "_id": "559217be7485d168a1a398da",
					                	            "from": "Christy Drake",
					                	            "date": "2015-06-30 12:19:01 ",
					                	            "content": "deserunt culpa quis voluptate aliqua aliquip nisi ex aliquip sunt",
					                	            "isNew": false
					                	          }
					                	        ]
					                	      },
					                	      {
					                	        "_id": "559217be32d4576377fa2391",
					                	        "name": "anim est dolore",
					                	        "description": "laborum labore amet eu",
					                	        "isNew": true,
					                	        "comments": [
					                	          {
					                	            "_id": "559217be6dc00ff9846339fa",
					                	            "from": "Boyer Wolf",
					                	            "date": "2015-06-30 23:26:33 ",
					                	            "content": "voluptate eiusmod mollit veniam officia cupidatat ea pariatur fugiat ea",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217bea2fcf7a824db5228",
					                	            "from": "Robinson Noel",
					                	            "date": "2015-06-30 08:41:02 ",
					                	            "content": "ut reprehenderit magna cillum et incididunt sit Lorem in sit",
					                	            "isNew": false
					                	          },
					                	          {
					                	            "_id": "559217be2cc35a3cbbf4d888",
					                	            "from": "Adrian Yates",
					                	            "date": "2015-06-30 07:31:37 ",
					                	            "content": "ut esse duis aute ullamco pariatur irure excepteur irure non",
					                	            "isNew": false
					                	          },
					                	          {
					                	            "_id": "559217be83f147fc783ce0c7",
					                	            "from": "Wells Hickman",
					                	            "date": "2015-06-30 13:17:31 ",
					                	            "content": "commodo adipisicing sunt occaecat aliquip fugiat nostrud amet minim tempor",
					                	            "isNew": true
					                	          }
					                	        ]
					                	      },
					                	      {
					                	        "_id": "559217be02c16c7ad4bf08d2",
					                	        "name": "ullamco do nisi",
					                	        "description": "velit aute ex nisi",
					                	        "isNew": false,
					                	        "comments": [
					                	          {
					                	            "_id": "559217be12b7a414039ec22a",
					                	            "from": "Dionne Giles",
					                	            "date": "2015-06-30 23:25:10 ",
					                	            "content": "magna qui eiusmod do ut non eiusmod velit velit velit",
					                	            "isNew": false
					                	          },
					                	          {
					                	            "_id": "559217be3d9c10ae649d6590",
					                	            "from": "Neal Case",
					                	            "date": "2015-06-30 16:18:20 ",
					                	            "content": "fugiat officia quis deserunt pariatur est id laborum quis et",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217be3a29059c16923901",
					                	            "from": "Clay Chen",
					                	            "date": "2015-06-30 18:18:48 ",
					                	            "content": "minim esse reprehenderit nisi consectetur eu et et commodo do",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217be03d3fc23ee8fd235",
					                	            "from": "Caitlin Garcia",
					                	            "date": "2015-06-30 20:06:16 ",
					                	            "content": "irure consequat proident in dolor cupidatat nisi do officia irure",
					                	            "isNew": true
					                	          }
					                	        ]
					                	      }
					                	    ]
					                	  },
					                	  {
					                	    "_id": "559217be6bac7b532a3f7853",
					                	    "index": 5,
					                	    "guid": "51d5efe9-7b89-46ec-b5cf-57f74c5e096f",
					                	    "isNew": false,
					                	    "name": "id est",
					                	    "tasks": [
					                	      {
					                	        "_id": "559217be2ee838437bdcd389",
					                	        "name": "laborum nisi sint",
					                	        "description": "in veniam laborum nulla",
					                	        "isNew": false,
					                	        "comments": [
					                	          {
					                	            "_id": "559217bea2bddb379764e939",
					                	            "from": "Erica Irwin",
					                	            "date": "2015-06-30 07:20:24 ",
					                	            "content": "aliqua enim nostrud minim laborum ullamco proident consectetur ipsum dolor",
					                	            "isNew": false
					                	          },
					                	          {
					                	            "_id": "559217bea181df77017823f0",
					                	            "from": "Pratt Mathis",
					                	            "date": "2015-06-30 21:25:19 ",
					                	            "content": "proident culpa nisi nisi ipsum id nisi deserunt occaecat anim",
					                	            "isNew": false
					                	          },
					                	          {
					                	            "_id": "559217beabbf24649dc9252e",
					                	            "from": "Elva Lawson",
					                	            "date": "2015-06-30 08:58:42 ",
					                	            "content": "quis exercitation qui anim amet minim consectetur exercitation sint et",
					                	            "isNew": false
					                	          },
					                	          {
					                	            "_id": "559217beeca3592f215d5ff0",
					                	            "from": "Fulton Brennan",
					                	            "date": "2015-06-30 12:25:56 ",
					                	            "content": "irure voluptate ex do ex id officia aliquip in tempor",
					                	            "isNew": true
					                	          }
					                	        ]
					                	      },
					                	      {
					                	        "_id": "559217becff89526ef4a839d",
					                	        "name": "enim commodo incididunt",
					                	        "description": "cillum non aliquip in",
					                	        "isNew": false,
					                	        "comments": [
					                	          {
					                	            "_id": "559217bee8fb1486d3ebd034",
					                	            "from": "Doreen Vega",
					                	            "date": "2015-06-30 17:57:10 ",
					                	            "content": "deserunt cupidatat enim reprehenderit labore Lorem quis eiusmod do est",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217be5473150a36856bd5",
					                	            "from": "Hamilton Mckenzie",
					                	            "date": "2015-06-30 20:24:16 ",
					                	            "content": "aliqua culpa ipsum pariatur officia labore consectetur cillum excepteur proident",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217be9e72fe5182235923",
					                	            "from": "Espinoza Mills",
					                	            "date": "2015-06-30 11:20:25 ",
					                	            "content": "sit enim irure sunt ex duis mollit do et exercitation",
					                	            "isNew": false
					                	          },
					                	          {
					                	            "_id": "559217beb1dca2fa0cfdb976",
					                	            "from": "Gonzalez Shaw",
					                	            "date": "2015-06-30 07:16:59 ",
					                	            "content": "fugiat fugiat reprehenderit Lorem labore fugiat incididunt quis deserunt eiusmod",
					                	            "isNew": true
					                	          }
					                	        ]
					                	      },
					                	      {
					                	        "_id": "559217beb964a4a926ad6bc7",
					                	        "name": "mollit cillum esse",
					                	        "description": "eiusmod consequat veniam deserunt",
					                	        "isNew": true,
					                	        "comments": [
					                	          {
					                	            "_id": "559217be6afb6cc8cbefe273",
					                	            "from": "Dillon Cochran",
					                	            "date": "2015-06-30 14:11:14 ",
					                	            "content": "magna quis aute cillum duis laborum ad officia magna nisi",
					                	            "isNew": false
					                	          },
					                	          {
					                	            "_id": "559217be7b78b970f1fdd9f8",
					                	            "from": "Warren Bentley",
					                	            "date": "2015-06-30 07:54:29 ",
					                	            "content": "sit occaecat eu sit officia nisi qui minim aliqua tempor",
					                	            "isNew": false
					                	          },
					                	          {
					                	            "_id": "559217bef9e72d7ee9a56db3",
					                	            "from": "Lucile Schneider",
					                	            "date": "2015-06-30 21:13:20 ",
					                	            "content": "qui dolor dolor magna anim dolor elit magna veniam do",
					                	            "isNew": false
					                	          },
					                	          {
					                	            "_id": "559217be4f6b02890916cf72",
					                	            "from": "Hahn Dotson",
					                	            "date": "2015-06-30 17:45:41 ",
					                	            "content": "ex ad fugiat voluptate duis cillum irure eiusmod consequat eu",
					                	            "isNew": true
					                	          }
					                	        ]
					                	      },
					                	      {
					                	        "_id": "559217be767ab4540f6fe260",
					                	        "name": "dolor anim do",
					                	        "description": "amet et velit ad",
					                	        "isNew": false,
					                	        "comments": [
					                	          {
					                	            "_id": "559217be386b011b122cacb7",
					                	            "from": "Teri Bradford",
					                	            "date": "2015-06-30 20:03:02 ",
					                	            "content": "laboris anim consequat nulla eiusmod est ipsum aliquip ad officia",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217be21291f1444ef267c",
					                	            "from": "Moss Armstrong",
					                	            "date": "2015-06-30 07:27:28 ",
					                	            "content": "irure qui laborum pariatur magna sint officia veniam enim non",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217be5c07ce938bfaec36",
					                	            "from": "Christie Ashley",
					                	            "date": "2015-06-30 10:50:49 ",
					                	            "content": "ex amet adipisicing sint proident id Lorem officia officia consectetur",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217bed4d4062c0424ed34",
					                	            "from": "Bentley Guthrie",
					                	            "date": "2015-06-30 09:49:39 ",
					                	            "content": "aliqua non ipsum minim occaecat qui veniam excepteur id sint",
					                	            "isNew": true
					                	          }
					                	        ]
					                	      },
					                	      {
					                	        "_id": "559217be31790d34c15f48a6",
					                	        "name": "aute velit sit",
					                	        "description": "sint consequat laborum aliqua",
					                	        "isNew": false,
					                	        "comments": [
					                	          {
					                	            "_id": "559217bea2d71a388281556d",
					                	            "from": "Haney Butler",
					                	            "date": "2015-06-30 14:02:44 ",
					                	            "content": "aliqua culpa tempor adipisicing ullamco nostrud elit qui laboris ea",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217bee7199a15bee8161e",
					                	            "from": "York Simpson",
					                	            "date": "2015-06-30 12:48:16 ",
					                	            "content": "aliquip sint sunt amet minim Lorem in aliquip deserunt ullamco",
					                	            "isNew": false
					                	          },
					                	          {
					                	            "_id": "559217be80fe505813f37d9f",
					                	            "from": "Franklin Mcleod",
					                	            "date": "2015-06-30 18:07:28 ",
					                	            "content": "occaecat exercitation in amet ipsum culpa do ea irure elit",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217be407b896cc1df1697",
					                	            "from": "Cantrell Shannon",
					                	            "date": "2015-06-30 23:54:07 ",
					                	            "content": "labore sunt do minim dolor commodo est laboris irure duis",
					                	            "isNew": true
					                	          }
					                	        ]
					                	      },
					                	      {
					                	        "_id": "559217be86efe4c82a0df984",
					                	        "name": "incididunt dolore nostrud",
					                	        "description": "irure consequat fugiat nostrud",
					                	        "isNew": false,
					                	        "comments": [
					                	          {
					                	            "_id": "559217bef531e1278562a245",
					                	            "from": "Shelly Hahn",
					                	            "date": "2015-06-30 18:16:40 ",
					                	            "content": "ipsum officia est sit fugiat et nisi occaecat pariatur deserunt",
					                	            "isNew": false
					                	          },
					                	          {
					                	            "_id": "559217be4ab2fc14dd5d1cb8",
					                	            "from": "Herman William",
					                	            "date": "2015-06-30 10:45:00 ",
					                	            "content": "commodo ullamco enim qui consectetur elit aliquip irure aute excepteur",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217be189cd6b5d071ca87",
					                	            "from": "Burt Franco",
					                	            "date": "2015-06-30 17:40:56 ",
					                	            "content": "occaecat nulla veniam ipsum aliqua est culpa consectetur eiusmod nulla",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217be8712a971fe813fc2",
					                	            "from": "Darcy Hancock",
					                	            "date": "2015-06-30 17:42:21 ",
					                	            "content": "ea nisi minim sunt sit reprehenderit cupidatat adipisicing magna sunt",
					                	            "isNew": false
					                	          }
					                	        ]
					                	      },
					                	      {
					                	        "_id": "559217be79aa38a8409cb07f",
					                	        "name": "consectetur velit proident",
					                	        "description": "fugiat dolor incididunt pariatur",
					                	        "isNew": true,
					                	        "comments": [
					                	          {
					                	            "_id": "559217beb696c67d72c4a619",
					                	            "from": "Christensen Martinez",
					                	            "date": "2015-06-30 18:35:43 ",
					                	            "content": "ad aliqua nulla elit tempor amet commodo fugiat quis ex",
					                	            "isNew": false
					                	          },
					                	          {
					                	            "_id": "559217be843ccc56c9a1fcf8",
					                	            "from": "Sharron Leblanc",
					                	            "date": "2015-06-30 09:38:03 ",
					                	            "content": "sint voluptate nostrud in elit et consequat reprehenderit ea ullamco",
					                	            "isNew": true
					                	          },
					                	          {
					                	            "_id": "559217beba0512a982d3f7ef",
					                	            "from": "Kerry Cameron",
					                	            "date": "2015-06-30 12:36:10 ",
					                	            "content": "nulla aute mollit ipsum consequat sit deserunt ullamco irure elit",
					                	            "isNew": false
					                	          },
					                	          {
					                	            "_id": "559217be3c78efb60dde22f0",
					                	            "from": "Jerri Cline",
					                	            "date": "2015-06-30 21:56:35 ",
					                	            "content": "nostrud aliqua officia irure sint irure ipsum reprehenderit laboris veniam",
					                	            "isNew": true
					                	          }
					                	        ]
					                	      }
					                	    ]
					                	  }
					                	]

					return {
						getNewComments : function() {
							var newComments = [];
							allProjects.forEach(function(project) {
								project.tasks.forEach(function(task) {
									task.comments.forEach(function(com) {
										if (com.isNew) {
											var comment = {
													"projectName" : project.name
												};
											comment.taskName = task.name;
											comment.from = com.from;
											comment.date = com.date;
											comment.content = com.content;
											
											newComments.push(comment);
										}
									});
								});

							});

							return newComments;
						},
						getNewTasks : function() {
							var newTasks = [];
							allProjects.forEach(function(project) {
								project.tasks.forEach(function(t) {
									if (t.isNew) {
										var task = {
												"projectName" : project.name
											};
										task.name = t.name;
										task.description = t.description;
										task.comments = t.comments;
										newTasks.push(task);
									}
								});

							});

							return newTasks;
						},
						getNewProjects : function() {
							var newProjects = [];
							allProjects.forEach(function(project) {
								if (project.isNew) {
									newProjects.push(project);
								}
							});

							return newProjects;
						},
						getAllProjects : function() {
							return allProjects;
						}
					}

				});