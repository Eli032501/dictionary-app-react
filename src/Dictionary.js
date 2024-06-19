import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary({ defaultWord }) {
  let [word, setWord] = useState(defaultWord);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    //https://dictionaryapi.dev/
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
    axios.get(url).then(handleResponse);
  }

  function handleUpdate(event) {
    setWord(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  function search() {
    //https://dictionaryapi.dev/
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
    axios.get(url).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <form className="  " onSubmit={handleSubmit}>
          <div className="d-none d-sm-block  col-sm-6 col-md-8"></div>
          <div className="col col-sm-6 col-md-4 row justify-content-between">
            <input
              className=" bar-search"
              type="text"
              defaultValue={defaultWord}
              onChange={handleUpdate}
            />
            <input className=" btn-submit" type="submit" value="search" />
            <div className="hints-search">
              words suggested: sunset, wine, yoga
            </div>
          </div>
        </form>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
