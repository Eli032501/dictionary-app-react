import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [word, setWord] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    //https://dictionaryapi.dev/
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(url).then(handleResponse);
  }

  function handleUpdate(event) {
    setWord(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form className="row mb-4" onSubmit={handleSubmit}>
        <div className="col-8"></div>
        <div className="col-4 row justify-content-between">
          <input className=" bar-search" type="text" onChange={handleUpdate} />
          <input className=" btn-submit" type="submit" value="search" />
        </div>
      </form>
      <Results results={results} />
    </div>
  );
}
