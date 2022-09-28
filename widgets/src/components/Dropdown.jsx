import React, { useState } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);

  const list = options.map((option) => {
    if (selected.value === option.value) {
      return null;
    }

    return (
      <div
        key={option.value}
        className="item"
        onClick={(e) => {
          onSelectedChange(option);
        }}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="ui form">
      <div className="field">
        <label htmlFor="" className="label">
          Select a color
        </label>
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {list}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
