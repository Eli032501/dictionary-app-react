import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

import "./Dictionary.css";

export default function Dictionary({ defaultWord }) {
  let [word, setWord] = useState(defaultWord);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleImageResponse(response) {
    console.log(response.data.photos);
    setPhotos(response.data.photos);
  }

  function handleResponse(response) {
    setResults(response.data[0]);

    const keyApiImage = "ba3t92f6af6b8204143cbo1c5a032ba3";

    let urlImages = `https://api.shecodes.io/images/v1/search?query=${word}&key=${keyApiImage}`;

    axios.get(urlImages).then(handleImageResponse);
  }

  function search() {
    //https://dictionaryapi.dev/
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
    axios.get(url).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleUpdate(event) {
    setWord(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
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
        <Results results={results} photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
