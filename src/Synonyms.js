import React from "react";
import "./Synonyms.css";

export default function Synonyms({ synonyms }) {
  //   console.log(synonyms);
  if (synonyms) {
    return (
      <div className="Synonyms">
        {/* <h6>Synonyms</h6> */}
        {synonyms.map(function (synonym, index) {
          return (
            <span className="synonym-container" key={index}>
              {" "}
              {synonym}
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
