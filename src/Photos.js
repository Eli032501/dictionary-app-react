import React from "react";
import "./Photos.css";

export default function Photos({ photos }) {
  if (photos) {
    return (
      <div className="Photos col col-md-6  ">
        {photos.map(function (photo, index) {
          return (
            <figure key={index}>
              <a href={photo.src.original} target="_blank" rel="noreferrer">
                <img
                  src={photo.src.landscape}
                  className="img-fluid"
                  alt={photo.photographer}
                />
              </a>
            </figure>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
