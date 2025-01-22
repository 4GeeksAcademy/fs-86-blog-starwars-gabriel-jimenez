import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

const PlanetOverview = () => {

    const { actions, store } = useContext(Context);
    let { id } = useParams();

    useEffect(() => {
        actions.setLoading(true);


        setTimeout(() => {
            actions.getPlanetOverViews(id);
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


    const imageUrl = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;

    return (<>
    <div className="d-flex justify-content-center mt-5  w-100">
        <div className="card w-75 d-flex justify-content-center p-2 border border-warning border-2 bg-transparent" >
            <h1 className="d-flex justify-content-center"> {store.planetOverview.name}</h1>
            <div className="card-body w-75 d-flex flex-row gap-3">
                <div className="character-img col-7">
                    <img src={imageUrl} alt={store.planetOverview.name} className="img-fluid rounded" />
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
                                <td>{store.planetOverview.name}</td>
                            </tr>
                            <tr>
                                <td>Climate</td>
                                <td>{store.planetOverview.climate}</td>
                            </tr>
                            <tr>
                                <td>Diameter</td>
                                <td>{store.planetOverview.diameter}</td>
                            </tr>
                            <tr>
                                <td>Gravity</td>
                                <td>{store.planetOverview.gravity}</td>
                            </tr>
                            <tr>
                                <td>Population</td>
                                <td>{store.planetOverview.population}</td>
                            </tr>
                            <tr>
                                <td>Terrain</td>
                                <td>{store.planetOverview.terrain}</td>
                            </tr>
                            <tr>
                                <td>Orbital</td>
                                <td>{store.planetOverview.orbital_period}</td>
                            </tr>
                            <tr>
                                <td>Rotation</td>
                                <td>{store.planetOverview.rotation_period}</td>
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
                    onClick={() => actions.addFavorite(store.planetOverview.name)}
                    >Favorito</button>
            </div>
        </div>
    </>)

}

export default PlanetOverview;