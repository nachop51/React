import React from "react";
// import Accordion from "./Accordion";
import Search from "./Search";
// import Dropdown from "./Dropdown";

// const items = [
//   {
//     title: "What is React?",
//     content: "React is a front end javascript framework",
//   },
//   {
//     title: "Why use React?",
//     content: "React is a favorite JS library among engineers",
//   },
//   {
//     title: "How do you use React?",
//     content: "You use React by creating components",
//   },
// ];

// const options = [
//   {
//     label: "The Color Red",
//     value: "red",
//   },
//   {
//     label: "The Color Green",
//     value: "green",
//   },
//   {
//     label: "A Shade of Blue",
//     value: "blue",
//   },
// ];

const App = () => {
  // const [selected, setSelected] = useState(options[0]);

  return (
    <React.Fragment>
      {/* <Accordion items={items} /> */}
      <Search />
      {/* <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      /> */}
    </React.Fragment>
  );
};

export default App;
