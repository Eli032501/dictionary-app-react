import React from "react";
import "./Results.css";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import Photos from "./Photos";

export default function Results({ results }, { photos }) {
  if (results) {
    return (
      <div className="Results">
        <div className="row ">
          <div className="col col-md-7 line-decoration">
            <h2 className="">{results.word}</h2>
            {results.phonetics.map(function (phonetic, index) {
              return (
                <span className=" phonetic " key={index}>
                  <Phonetics phonetic={phonetic} />
                </span>
              );
            })}
          </div>
        </div>
        <div className="row">
          <div className="col col-md-7">
            {results.meanings.map(function (meanings, index) {
              return (
                <div key={index}>
                  <Meaning meanings={meanings} />
                </div>
              );
            })}
          </div>
          <Photos photos={photos} />
        </div>
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
