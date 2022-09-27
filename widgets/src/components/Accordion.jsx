import React, { useState } from "react";

// ^ useState hook:
// * useState is a function that is imported from the React library
// * it takes a single argument, which is the initial value of the state
// * it returns an array with two elements
// * the first element is the current value of the state
// * the second element is a function that is used to update the state

const Acordion = (props) => {
  // * useState hook is used to initialize a piece of state
  const [activeIndex, setActiveIndex] = useState(null);

  // * the value of activeIndex will be the index of the active item
  // * to set it, we call setActiveIndex with the index of the item we want to set as active
  const onTitleClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const list = props.items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";

    return (
      <React.Fragment key={item.title}>
        {/* define a callback to call setActiveIndex */}
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  // !Return of the Accordion component
  return <div className="ui styled accordion">{list}</div>;
};

export default Acordion;
