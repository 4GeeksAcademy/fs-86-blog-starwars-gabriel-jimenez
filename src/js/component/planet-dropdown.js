import React, {useContext, useEffect} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const PlanetDropdown = () => {

    const { store, actions } = useContext(Context);


    useEffect( () => {

        actions.getPlanetsList();
        
     }, [])

    return (<>
        <span className="nav-link dropdown-toggle text-warning" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Planets
        </span>
        <ul className="dropdown-menu bg-dark">
            {store.planetList && store.planetList.length > 0 ? (
                store.planetList.map((planet, index) => (
                    <Link to={`/planet/${planet.uid}`} className="text-warning">
                        <li key={index} className="mb-2">
                            {planet.name}
                        </li>
                    </Link>
                ))
            ) : (
                <li>No hay planetas disponibles</li>
            )}
        </ul>
    </>)
}

export default PlanetDropdown;