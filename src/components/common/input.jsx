import React, { Component } from "react";

const Input = ({ type, name, value, label, errorMsg, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="form-control"
      />
      {errorMsg && <div className="text-danger">{errorMsg}</div>}
    </div>
  );
};

export default Input;
