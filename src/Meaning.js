import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning({ meanings }) {
  return (
    <div className="Meaning ">
      <h3>{meanings.partOfSpeech}</h3>
      {meanings.definitions.map(function (definitions, index) {
        return (
          <span className="row" key={index}>
            <ul className="container-definition col-12 col-md-7">
              <li className="definition ">{definitions.definition}</li>
              <p className="example">{definitions.example}</p>
              <Synonyms synonyms={definitions.synonyms} />
            </ul>
          </span>
        );
      })}
    </div>
  );
}
