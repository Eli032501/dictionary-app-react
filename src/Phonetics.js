import React from "react";

export default function Phonetics({ phonetic }) {
  console.log(phonetic.audio);
  return (
    <span className="Phonetics">
      <a href={phonetic.audio} target="_blank" rel="noreferrer">
        {phonetic.text}
      </a>
    </span>
  );
}
