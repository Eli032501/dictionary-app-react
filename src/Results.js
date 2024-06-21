import React from "react";
import "./Results.css";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Results({ results }) {
  if (results) {
    return (
      <div className="Results col-12 col-md-6">
        <div className=" line-decoration">
          <h2 className="">{results.word}</h2>
          <div className="group-phonetic ">
            {results.phonetics.map(function (phonetic, index) {
              return (
                <span className=" phonetic " key={index}>
                  <Phonetics phonetic={phonetic} />
                </span>
              );
            })}
          </div>
        </div>

        <div className="">
          {results.meanings.map(function (meanings, index) {
            return (
              <div key={index}>
                <Meaning meanings={meanings} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="Results d-flex justify-content-center mt-4">
        <div>
          <h1 className="">Dictionary</h1>
          <p className="text-intro">what word do you want to look up?</p>
        </div>
      </div>
    );
  }
}
