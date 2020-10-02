import React from "react";
import NavBar from "./NavBar";
import { useSelector } from "react-redux";

const Like = () => {
  const likedOnes = useSelector((state) => state.advice.likes);
  console.log(likedOnes);
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
