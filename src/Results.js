import React from "react";
import "./Results.css";
import Meaning from "./Meaning";

export default function Results({ results }) {
  if (results) {
    return (
      <div className="Results">
        <div className="row">
          <div className="col col-md-7">
            <h2 className="">{results.word}</h2>
            <p className="line-decoration phonetic ">
              {results.phonetics[0].text}
            </p>
          </div>
        </div>
        {results.meanings.map(function (meanings, index) {
          return (
            <div key={index}>
              <Meaning meanings={meanings} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="Results d-flex justify-content-center">
        <div>
          <h1>Dictionary</h1>
          <p className="text-intro">what word do you want to look up?</p>
        </div>
      </div>
    );
  }
}
