import React, {useContext, useEffect} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


const CharacterDropdown = () => {
    const { store, actions } = useContext(Context);


    useEffect(() => {

        actions.getCharactersList();

    }, [])

    return (<>
        <span className="nav-link dropdown-toggle text-warning" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Characters
        </span>
        <ul className="dropdown-menu bg-dark">
            {store.characterList && store.characterList.length > 0 ? (
                store.characterList.map((character, index) => (
                    <Link to={`/character/${character.uid}`} className="text-warning">
                        <li key={index} className="mb-2">
                            {character.name}
                        </li>
                    </Link>
                ))
            ) : (
                <li>No hay planetas disponibles</li>
            )}
        </ul>
    </>)
}

export default CharacterDropdown;