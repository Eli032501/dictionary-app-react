import React from "react";
import "./Results.css";
import Meaning from "./Meaning";

export default function Results({ results }) {
  if (results) {
    return (
      <div className="Results">
        <div className="row">
          <div className="col-7">
            <h2 className="text-end">{results.word}</h2>
            <p className="line-decoration phonetic">
              {results.phonetics[0].text}
            </p>
            {results.meanings.map(function (meanings, index) {
              return (
                <div key={index}>
                  <Meaning meanings={meanings} />
                </div>
              );
            })}
          </div>
          <div className="col-5"></div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Results">
        <h1>Dictionary</h1>
        <div className="row ">
          <div className="col-6"></div>
          <p className="col-4">what word do you want to look up?</p>
          <div className="col-2"></div>
        </div>
      </div>
    );
  }
}
