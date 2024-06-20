import React from "react";
import "./Photos.css";

export default function Photos({ photos }) {
  if (photos) {
    return (
      <div className="Photos col col-md-4  ms-5 ">
        {photos.map(function (photo, index) {
          return (
            <img
              src={photo.src.landscape}
              className="img-fluid"
              alt={photo.photographer}
              key={index}
            />
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
