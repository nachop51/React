import React from "react";

const Spinner = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};

// This way we can declare DEFAULT values for the props dict
Spinner.defaultProps = {
  message: "Loading...",
};

export default Spinner;
