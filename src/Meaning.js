import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning({ meanings }) {
  return (
    <div className="Meaning ">
      <h3>{meanings.partOfSpeech}</h3>
      {meanings.definitions.map(function (definitions, index) {
        return (
          <span className="row">
            <div className="container-definition col col-md-7" key={index}>
              <p className="definition ">{definitions.definition}</p>
              <p className="example">{definitions.example}</p>
              <Synonyms synonyms={definitions.synonyms} />
            </div>
            <div className="d-none d-lg-block col-lg-1 "></div>
            <div className="d-none d-md-block col-md-4 col-lg-3 px-1 text-end"></div>
          </span>
        );
      })}
    </div>
  );
}
