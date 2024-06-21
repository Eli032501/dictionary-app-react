import React from "react";
import "./Photos.css";

export default function Photos({ photos }) {
  if (photos) {
    return (
      <div className="Photos col col-md-6  ">
        {photos.map(function (photo, index) {
          return (
            <figure key={index}>
              <img
                src={photo.src.landscape}
                className="img-fluid"
                alt={photo.photographer}
              />
            </figure>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
