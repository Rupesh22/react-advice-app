import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { ReactComponent as Nightvumi } from "../images/night_vumi.svg";

//Actions
import { fetchAdvice } from "../actions/fetchAction";
import { likeAdvice } from "../actions/likeAction";

import NavBar from "./NavBar";

const Home = () => {
  const { slip } = useSelector((state) => state.advice);
  const { isLoading } = useSelector((state) => state.advice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdvice());
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <div className="home home-container">
        <Nightvumi className="on-svg" />
        {isLoading ? (
          <div className="card-container card-m">Loading...</div>
        ) : (
          <div className="card-container card-m">{slip.advice}</div>
        )}
        <div>
          <button className="btn-m" onClick={() => dispatch(fetchAdvice())}>
            <span>GIVE ME ADVICE!</span>
          </button>
          <button className="btn-m" onClick={() => dispatch(likeAdvice(slip))}>
            <span>Like!</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
