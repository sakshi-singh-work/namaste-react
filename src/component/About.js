// Uncontrolled Component
import React, { useRef } from "react";

function About() {
  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  console.log("Submitted value:", inputRef?.current?.value);

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default About;
