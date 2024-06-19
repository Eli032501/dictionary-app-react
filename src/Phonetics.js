import React from "react";
import "./Phonetics.css";

export default function Phonetics({ phonetic }) {
  if (phonetic.text) {
    return (
      <span className="Phonetics ">
        <a href={phonetic.audio} target="_blank" rel="noreferrer">
          {phonetic.text}
        </a>
      </span>
    );
  } else {
    return null;
  }
}
