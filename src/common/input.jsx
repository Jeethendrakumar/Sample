import React from "react";

const Input = ({ children, type, name, id, readonly, value, disabled }) => {
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
        value={value}
        readOnly={readonly}
        disabled={disabled}
      />
    </>
  );
};

export default Input