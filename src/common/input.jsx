import React from "react";

const Input = ({
  pattern,
  children,
  type,
  name,
  id,
  readonly,
  value,
  disabled,
  title
}) => {
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
        placeholder={name}
        pattern={pattern}
        title={title}
      />
    </>
  );
};

export default Input;
