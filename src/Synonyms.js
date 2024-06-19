import React from "react";

import "./Synonyms.css";

export default function Synonyms({ synonyms }) {
  if (synonyms.length > 0) {
    return (
      <div className="Synonyms">
        <h6>synonyms:</h6>
        {synonyms.map(function (synonym, index) {
          return (
            <span key={index}>
              <p> {synonym}</p>
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
