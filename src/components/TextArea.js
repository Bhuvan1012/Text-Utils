import React, { useState } from "react";
import Button from "./Button";

export default function TextArea(props) {
  const [text, setText] = useState("");
  return (
    <>
      <div className="container my-3">
        <h2>{props.heading}</h2>
        <textarea
          className="form-control"
          id="form"
          rows="10"
          value={text}
          onChange={(event) => {
            let newText = event.target.value;
            return setText(newText);
          }}
          style={{
            backgroundColor: props.mode === "light" ? "white" : "#11052C",
            color: props.mode === "light" ? "black" : "white",
          }}
        >
          {text}
        </textarea>
        <Button
          title="Convert to UpperCase"
          mode={props.mode}
          disable={text.length === 0}
          handleClick={() => {
            props.alert("success", "Text converted to UpperCase.");
            return setText(text.toUpperCase());
          }}
        />
        <Button
          disable={text.length === 0}
          title="Convert to LowerCase"
          mode={props.mode}
          handleClick={() => {
            props.alert("success", "Text converted to LowerCase.");
            return setText(text.toLowerCase());
          }}
        />
        <Button
          disable={text.length === 0}
          title="Clear Text"
          mode={props.mode}
          handleClick={() => {
            props.alert("success", "Text cleared.");
            return setText("");
          }}
        />
        <Button
          disable={text.length === 0}
          title="Capitalise First Alphabet"
          mode={props.mode}
          handleClick={() => {
            let newText = text
              .split(" ")
              .map(
                (word) =>
                  word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase()
              )
              .join(" ");
            props.alert("success", "Capitalised First Alphabet.");
            return setText(newText);
          }}
        />
        <Button
          disable={text.length === 0}
          title="Capitalise All Except First Alphabet"
          mode={props.mode}
          handleClick={() => {
            let newText = text
              .split(" ")
              .map(
                (word) =>
                  word.slice(0, 1).toLowerCase() + word.slice(1).toUpperCase()
              )
              .join(" ");
            props.alert("success", "Capitalised All Except First Alphabet.");
            return setText(newText);
          }}
        />
        <Button
          disable={text.length === 0}
          title="Get Array"
          mode={props.mode}
          handleClick={() => {
            props.alert("success", "Word splitted to an array.");
            return setText(String(text.split("")));
          }}
        />
      </div>
      <div className="container my-3">
        <h4>Text Summary</h4>
        <p>
          {text.split(/\s+/).length === 1 && text.split(/\s+/)[0].length === 0
            ? 0
            : text.split(/\s+/).filter((word) => word.length !== 0).length}{" "}
          words and {text.length} characters.
        </p>
        <p>
          {text.split(/\s+/).length === 1 && text.split(/\s+/)[0].length === 0
            ? 0
            : 0.008 *
              text.split(/\s+/).filter((word) => word.length !== 0).length}{" "}
          minutes required to read.
        </p>
        <h4>Preview</h4>
        <p>
          {text.split(/\s+/).filter((word) => word.length !== 0).length > 0
            ? text
            : "Nothing to preview."}
        </p>
      </div>
    </>
  );
}
