import React, { useState } from "react";
export default function Textform(props) {
  const handleUpChange = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };
    /* const mystyle = {
     #myBox::placeholder{
    color: red;
}
    };*/
    const handleCapitalize = () => {
      let newText = text.split(" ").map((el) => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
      setText(newText);
    };
  const handleReset = () => {
    setText("");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
  };
  const handleLowChange = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <h1 className={`text-${props.mode === "light" ? "Dark" : "light"}`}>
        {props.heading}
      </h1>
      <div className="mb-3">
        <textarea
          className={`form-control text-${
            props.mode === "light" ? "Dark" : "light"
          } bg-${props.mode}`}
          placeholder="Enter hear to get started ......"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button
        disabled={text.length === 0}
        className={`btn btn-${
          props.mode === "light" ? "primary" : "dark"
        } ms-2 my-2`}
        onClick={handleCapitalize}
      >
        Capitalize the Text
      </button>
      <button
        disabled={text.length === 0}
        className={`btn btn-${
          props.mode === "light" ? "primary" : "dark"
        } ms-2 my-2`}
        onClick={handleUpChange}
      >
        convert to uppercase
      </button>
      <button
        disabled={text.length === 0}
        className={`btn btn-${
          props.mode === "light" ? "primary" : "dark"
        } ms-2 my-2`}
        onClick={handleLowChange}
      >
        convert to lowercase
      </button>
      <button
        disabled={text.length === 0}
        className={`btn btn-${
          props.mode === "light" ? "primary" : "dark"
        } ms-2 my-2`}
        onClick={handleExtraSpaces}
      >
        remove extra spaces
      </button>

      <button
        disabled={text.length === 0}
        className={`btn btn-${
          props.mode === "light" ? "primary" : "dark"
        } ms-2 my-2`}
        onClick={handleCopy}
      >
        Copy The Text
      </button>
      <button
        disabled={text.length === 0}
        className={`btn btn-${
          props.mode === "light" ? "primary" : "dark"
        } ms-2 my-2`}
        onClick={handleReset}
      >
        Reset Text
      </button>
      <div className="container">
        <p className={`text-${props.mode === "light" ? "Dark" : "light"}`}>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters{" "}
          <p>
            {0.008 *
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length}{" "}
            Minute read{" "}
          </p>
        </p>
      </div>
    </>
  );
}
 