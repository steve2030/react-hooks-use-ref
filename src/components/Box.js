import React, { useRef } from "react";

function Box() {
  const elementRef = useRef();
  console.log(elementRef);

  const getMeasurements = () => {
    const div = elementRef.current
    console.log("mesaurments: ", div.getBoundingClientRect())
  }

  return (
    <div ref={elementRef}>
      <h1>Box</h1>
      <button onClick={getMeasurements}>Measure</button>
    </div>
  );
}

export default Box;
