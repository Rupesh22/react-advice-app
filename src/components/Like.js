import React, { useEffect } from "react";
import NavBar from "./NavBar";
import { useSelector, useDispatch } from "react-redux";
import { FETCH_LIKES } from "../actions/types";

//AOS
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000,
  offset: 50,
});

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
        <div className="like-header">
          Like's
          <span role="img" aria-label="like">
            👍
          </span>
        </div>
        <ul className="card-container">
          {likedOnes.length === 0 ? (
            <div
              style={{
                paddingTop: "5px",
                textTransform: "uppercase",
                fontWeight: "bold",
              }}
            >
              no liked advices
            </div>
          ) : (
            likedOnes.map((liked) => {
              return (
                <li className="card-m" data-aos="fade-left" key={liked.id}>
                  {liked.advice}
                </li>
              );
            })
          )}
        </ul>
      </div>
    </>
  );
};

export default Like;
