import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux";

const Like = () => {
  const likedOnes = useSelector((state) => state.advice.likes);
  console.log(likedOnes);
  return (
    <>
      <Header />
      <div className="like-home">
        <div>Like Page</div>
        <ul>
          {likedOnes.length === 0
            ? "no liked advices"
            : likedOnes.map((liked) => {
                return (
                  <li className="card-panel teal lighten-2" key={liked.id}>
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
