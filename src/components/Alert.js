import React from "react";

export default function Alert(props) {
  function Capitalise(word) {
    return word.toLowerCase()[0].toUpperCase() + word.toLowerCase().slice(1);
  }
  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div className={`alert alert-${props.alert.type}`} role="alert">
          <strong>{Capitalise(props.alert.type)}</strong>: {props.alert.message}
        </div>
      )}
    </div>
  );
}
