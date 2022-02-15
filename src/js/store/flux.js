const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
				   	people:null,
					films:null,
					planets: null,
					species:null,
					vehicle: null,
					starship: null,
					favorites: []	
		},
		actions: {
			getPeople:()=>{
				fetch("https://www.swapi.tech/api/people")
			.then(response => response.json())// entonces la respuesta de la api pasa a formato json
			.then(objeto => {console.log(objeto)
			setStore({
				people: objeto.results
			})
			})
			.catch(error => console.log('error', error));
			},
					getStarship:()=>{
						fetch('https://www.swapi.tech/api/starships/')
							.then(response => response.json())
							.then(objeto => {console.log(objeto)
								setStore({
										starship: objeto.results
										})
										})
								.catch(error => console.log('error', error));

			},
			getVehicle:()=>{
				fetch('https://www.swapi.tech/api/vehicles/')
				.then(response => response.json())
				.then(objeto =>{console.log(objeto)
					setStore({
						vehicle:objeto.results
					})
			})
			.catch(error => console.log('error', error));
		},
				getFilms:()=>{
					fetch('https://www.swapi.tech/api/films/')
					.then(response => response.json())
					.then(objeto =>{console.log(objeto)
						setStore({
							films: result.results
					})
				})
				.catch(error => console.log('error',error));
			
			},
			getSpecies:()=>{
				fetch('https://www.swapi.tech/api/species/')
				.then(response => response.json())
				.then(specie =>{console.log(specie)
					setStore({
						species: specie.results
					})
			})
			.catch(error => console.log('error', error));
		},
		getPlanets:()=>{
			fetch('https://www.swapi.tech/api/planets/')
			.then(response => response.json())
			.then(planet => {console.log(planet)
				setStore({
					planets: planet.results
				})
		})
		.catch(error => console.log('error', error));
	},	


		}
		
	};
};

export default getState;
