import React from "react";

const Input = ({ children, type, name, id }) => {
  return (
    <>
      <label className="col-sm-3" htmlFor={name}>
        {children}
      </label>
      <input
        className="form-control col-sm-12"
        type={type}
        id={id}
        name={name}
        required
      />
    </>
  );
};

export default Input