import React, {useContext, useEffect} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const VehicleDropdown = () => {

	const { store, actions } = useContext(Context);


	useEffect( () => {

		actions.getVehiclesList();

	 }, [])

	return (<>
		<span className="nav-link dropdown-toggle text-warning" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
			Vehicle
		</span>
		<ul className="dropdown-menu bg-dark">
			{store.vehicleList && store.vehicleList.length > 0 ? (
				store.vehicleList.map((vehicle, index) => (
					<Link to={`/vehicle/${vehicle.uid}`} className="text-warning">
					 	<li key={index} className="mb-2">
							{vehicle.name}
						</li>
					</Link>
				))
			) : (
				<li>No hay vehiculos disponibles</li>
			)}
		</ul>
	</>)
}

export default VehicleDropdown;