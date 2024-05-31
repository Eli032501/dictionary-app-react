import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  let [word, setWord] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
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
      <form className="row mb-5" onSubmit={handleSubmit}>
        <div className="col-6"></div>
        <div className="col-4">
          <input className="w-75" type="text" onChange={handleUpdate} />
          <input className="w-25" type="submit" value="Search" />
        </div>
        <div className="col-2"></div>
      </form>
      <h1>Dictionary</h1>
      <div className="row ">
        <div className="col-6"></div>
        <p className="col-4">what word do you want to look up?</p>
        <div className="col-2"></div>
      </div>
    </div>
  );
}
