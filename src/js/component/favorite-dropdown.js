import React, {useContext, useEffect} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const FavoriteDropdown = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
		if (storedFavorites) {
			actions.setFavorites(storedFavorites);
		}
		const storedCount = parseInt(localStorage.getItem("count"));
		if (!isNaN(storedCount)) {
			actions.setCount(storedCount);
		}
	}, []);

	return (<>
		<span className="btn btn-warning  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
			Favorites
			<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
			{store.count}
				<span className="visually-hidden">unread messages</span>
			</span>
		</span>
		<ul className="dropdown-menu">
			{store.favorites.map((favorite, index) => (
				<li key={index} className="d-flex justify-content-between align-items-center">
					<span>{favorite}</span>
					<button
						type="button"
						className="btn btn-danger btn-sm"
						onClick={() => actions.removeFavorite(index)}
					>
						X
					</button>
				</li>
			))}
		</ul>

	</>)
}
export default FavoriteDropdown;