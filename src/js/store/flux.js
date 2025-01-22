import { node } from "prop-types";
import  { characterDispatcher, planetDispatcher, vehicleDispatcher, characterOverViewsDispatcher  } from "./dispatcherBlogStarwars";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			loading: false,
			characterList: [],
			planetList: [],
			vehicleList: [],
			characterOverview: {},
		    planetOverview: {},
			vehicleOverview: {},
			favorites: JSON.parse(localStorage.getItem("favorites")) || [],
			count: parseInt(localStorage.getItem("count")) || 0,
			
		},
		actions: {
			
			addFavorite: (name) => {
				
				const store = getStore();

				if (!store.favorites.includes(name)) {
					const newFavorites = [...store.favorites, name];					
					setStore({ ...store, favorites: newFavorites, count: store.count + 1 });
					localStorage.setItem("favorites", JSON.stringify(newFavorites));
					localStorage.setItem("count", store.count + 1);
				}
			},

			removeFavorite: (id) => {
				const store = getStore();
				const newCount = store.count > 0 ? store.count - 1 : 0;			
				const newFavorites = store.favorites.filter((_, index) => index !== id);			
				setStore({ ...store, favorites: newFavorites, count: newCount });
				localStorage.setItem("favorites", JSON.stringify(newFavorites));
				localStorage.setItem("count", newCount);
			},

			setFavorites: (favorites) => {
				const store = getStore();
				setStore({ ...store, favorites });
			},
			setCount: (value) => {
				const store = getStore();
				setStore({ ...store, count: value });
				localStorage.setItem("count", value); 
			},
			
			setLoading: (status) => {
				const store = getStore();
				setStore({ ...store, loading: status });
			},

			getCharactersList: async () => {
				const characterList = await characterDispatcher.get();
				console.log(characterList)
				const store = getStore();
				setStore({...store, characterList});
			},

			getPlanetsList: async () => {
				const planetList = await planetDispatcher.get();
				const store = getStore();
				setStore({...store, planetList});
			},

			getVehiclesList: async () => {
				const vehicleList = await vehicleDispatcher.get();
				const store = getStore();
				setStore({...store, vehicleList});
			},

			getCharacterOverViews: async (id) => {
				const characterOverview = await characterDispatcher.getById(id)
				const store = getStore();
				setStore({...store, characterOverview});
			},

			getPlanetOverViews: async (id) => {
				const planetOverview = await planetDispatcher.getById(id)
				const store = getStore();
				setStore({...store, planetOverview});
			},

			getVehicleOverViews:async (id) => {
				const vehicleOverview = await vehicleDispatcher.getById(id)
				const store = getStore();
				setStore({...store, vehicleOverview});
			},
		}
	};
};
export default getState;
