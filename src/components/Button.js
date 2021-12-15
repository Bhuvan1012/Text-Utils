import React from "react";

export default function Button(props) {
  return (
    <button
      type="button"
      className={`btn btn-${
        props.mode === "light" ? "primary" : "secondary"
      } mx-2 my-3`}
      onClick={props.handleClick}
      disabled={props.disable}
    >
      {props.title}
    </button>
  );
}
