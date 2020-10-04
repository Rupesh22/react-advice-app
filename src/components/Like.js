import React, { useEffect } from "react";
import NavBar from "./NavBar";
import { useSelector, useDispatch } from "react-redux";
import { FETCH_LIKES } from "../actions/types";

const Like = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: FETCH_LIKES,
    });
  }, [dispatch]);

  const likedOnes = useSelector((state) => state.advice.likes);
  return (
    <>
      <NavBar />
      <div className="like-home">
        <div>Like Page</div>
        <ul className="card-container">
          {likedOnes.length === 0
            ? "no liked advices"
            : likedOnes.map((liked) => {
                return (
                  <li className="card-m" key={liked.id}>
                    {liked.advice}
                  </li>
                );
              })}
        </ul>
      </div>
    </>
  );
};

export default Like;
