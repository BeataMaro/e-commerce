import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <Spinner
      animation='border'
      role='status'
      style={{
        width: "80px",
        height: "80px",
        display: "block",
        margin: "auto",
      }}
    >
      <span className='sr-only visualy-hidden'>Loading...</span>
    </Spinner>
  );
};

export default Loader;
