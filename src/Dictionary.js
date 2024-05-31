import React, { useState } from "react";

export default function Dictionary() {
  let [word, setWord] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching ${word} definition`);
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
