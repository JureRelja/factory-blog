import React from "react";

function Banner(props) {
  return (
    <div
      className={`d-flex flex-column justify-content-center align-items-center bg-body ${
        props.size === "lg" && "wrapper"
      } banner`}
    >
      <p>banner</p>
      {props.size === "lg" && <p>940x120</p>}
      {props.size === "sm" && <p>620x120</p>}
    </div>
  );
}

export default Banner;
