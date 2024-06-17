import React from "react";

export default function Phonetics({ phonetic }) {
  return (
    <span className="Phonetics">
      <a href={phonetic.audio} target="_blank" rel="noreferrer">
        {phonetic.text}
      </a>
    </span>
  );
}
