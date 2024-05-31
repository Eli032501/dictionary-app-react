import React from "react";

export default function Meaning({ meanings }) {
  return (
    <div className="Meaning">
      <h3>{meanings.partOfSpeech}</h3>
      {meanings.definitions.map(function (definitions, index) {
        return (
          <div className="container-definition" key={index}>
            <p className="definition ">{definitions.definition}</p>

            <p className="example">{definitions.example}</p>
          </div>
        );
      })}
    </div>
  );
}
