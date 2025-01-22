import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

const CharacterOverview = () => {

    const { actions, store } = useContext(Context);
    let { id } = useParams();

    useEffect(() => {
        actions.setLoading(true);


        setTimeout(() => {
            actions.getCharacterOverViews(id);
            actions.setLoading(false);
        }, 1000);


        return () => {
            actions.setLoading(false);
        };
    }, [id]);

    if (store.loading) {
        return <p className="d-flex justify-content-center align-items-center"><div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
        </div></p>;
    }


    const imageUrl = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;

    return (<>
    <div className="d-flex justify-content-center mt-5  w-100">
        <div className="card w-50 h d-flex justify-content-center p-2 border border-warning border-2 bg-transparent " >
            <h1 className="d-flex justify-content-center"> {store.characterOverview.name}</h1>
            <div className="card-body w-75 d-flex flex-row gap-3">
                <div className="character-img col-7">
                    <img src={imageUrl} alt={store.characterOverview.name} className="img-fluid rounded" />
                </div>
                <div className="character-table col-8 text-warning">
                    <table className="table table-striped text-warning">
                        <thead className="table-dark text-warning">
                            <tr>
                                <th>Characteristic</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody className="table-dark text-warning">
                            <tr>
                                <td>Name</td>
                                <td>{store.characterOverview.name}</td>
                            </tr>
                            <tr>
                                <td>Eye Color</td>
                                <td>{store.characterOverview.eye_color}</td>
                            </tr>
                            <tr>
                                <td>Hair Color</td>
                                <td>{store.characterOverview.hair_color}</td>
                            </tr>
                            <tr>
                                <td>Skin Color</td>
                                <td>{store.characterOverview.skin_color}</td>
                            </tr>
                            <tr>
                                <td>Height (cm)</td>
                                <td>{store.characterOverview.height}</td>
                            </tr>
                            <tr>
                                <td>Mass (kg)</td>
                                <td>{store.characterOverview.mass}</td>
                            </tr>
                            <tr>
                                <td>Gender</td>
                                <td>{store.characterOverview.gender}</td>
                            </tr>
                            <tr>
                                <td>Birth Year</td>
                                <td>{store.characterOverview.birth_year}</td>
                            </tr>
                            <tr>
                                <td>Homeworld</td>
                                <td>{store.characterOverview.homeworld}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>
                <div>

                </div>


                <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => actions.addFavorite(store.characterOverview.name)}
                    >Favorito</button>
            </div>
        </div>
    </>)
}

export default CharacterOverview;