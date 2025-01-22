import React from "react";
import { Link } from "react-router-dom";
import CharacterDropdown from "./character-dropdown";
import PlanetDropdown from "./planet-dropdown";
import VehicleDropdown from "./vehicles-dropdown";
import FavoriteDropdown from "./favorite-dropdown"

export const Navbar = () => {

	return (

		<nav className="navbar navbar-expand-lg bg-body-tertiary bg-secondary text-warning ">
			<div className="container-fluid">
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0 col-6">
						<Link className="text-warning" to="/">
							<li className="nav-item">
								<span className="nav-link active text-warning" aria-current="page" href="#">Home</span>
							</li>
						</Link>
						<li className="nav-item dropdown">
							<CharacterDropdown/>
						</li>
						<li className="nav-item dropdown">
							<PlanetDropdown />
						</li>
						<li className="nav-item dropdown">
							<VehicleDropdown />
						</li>
					</ul>
					<form className="d-flex col-3 me-2" role="search">
						<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
						<button className="btn btn-outline-warning" type="submit">Search</button>
					</form>
					<ul className="navbar-nav me-auto mb-2 mb-lg-0 col-1">
					<li className="nav-item dropdown">
							<FavoriteDropdown />
					</li>
					</ul>									
				</div>
			</div>
		</nav>
	);
};
