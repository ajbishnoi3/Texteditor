import React from "react";
export default function About(props) {
  return (
    <>
      <h1 className={`text-${props.mode === "light" ? "Dark" : "light"}`}>
        About Us
      </h1>
      <div className={`accordion my-3`} id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className={`accordion-button collapsed bg-${props.mode} text-${
                props.mode === "light" ? "Dark" : "light"
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              What "Text edits" really do ?
            </button>
          </h2>
          <div
            id="collapseOne"
            className={`accordion-collapse collapse text-${
              props.mode === "light" ? "Dark" : "light"
            } bg-${props.mode}`}
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className={`accordion-button collapsed text-${
                props.mode === "light" ? "Dark" : "light"
              } bg-${props.mode}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Is the "Text edits" really usefull ?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className={`accordion-collapse collapse text-${
              props.mode === "light" ? "Dark" : "light"
            } bg-${props.mode}`}
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className={`accordion-button collapsed text-${
                props.mode === "light" ? "Dark" : "light"
              } bg-${props.mode}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Feedback from our customers :-
            </button>
          </h2>
          <div
            id="collapseThree"
            className={`accordion-collapse collapse
            text-${props.mode === "light" ? "Dark" : "light"} bg-${props.mode}`}
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
