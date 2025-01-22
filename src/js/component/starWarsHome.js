import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import IntroAnimation from "./intro-animation.js";
const StarWarsHome = () => {

  const { actions, store } = useContext(Context);

  useEffect(() => {
    actions.setLoading(true);
    setTimeout(() => {
      actions.setLoading(false);
    }, 2000);
  }, []);

  if (store.loading) {
    return <p className="d-flex justify-content-center align-items-center"><div className="spinner-border text-warning" role="status">
      <span className="visually-hidden">Loading...</span>
    </div></p>;
  }

  return (<>
  
    <IntroAnimation />
    
  </>)
}

export default StarWarsHome;
