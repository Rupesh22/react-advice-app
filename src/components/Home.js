import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//Actions
import { fetchAdvice } from "../actions/fetchAction";
import { likeAdvice } from "../actions/likeAction";

import Header from "./Header";

const Home = () => {
  const { slip } = useSelector((state) => state.advice);
  const { isLoading } = useSelector((state) => state.advice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdvice());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <div className="home home-container">
        {isLoading ? (
          <div className="card-content grey lighten-4 center-align">
            Loading...
          </div>
        ) : (
          <div>{slip.advice}</div>
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
    </div>
  );
};

export default Home;
