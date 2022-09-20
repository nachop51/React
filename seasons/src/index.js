//jshint esversion:6
import React from "react";
import ReactDOM from "react-dom/client";

const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);

// Rules of State

// 1. Only usable with class components
// 2. You will confuse props with state
// 3. "State" is a JS object that contains data relevant to a component
// 4. Updating "state" on a component causes the component to (almost) instantly rerender
// 5. State must be initialized when a component is created
// 6. State can only be updated using the function "setState"

// Class-based Component example
class App extends React.Component {
  constructor(props) {
    super(props);

    // We never want to set state like this
    // the only exception is when we are initializing state
    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // This is the right way set the state of an object
        // We call setState to update the state object
        this.setState({ lat: position.coords.latitude });
      },
      (err) => console.error(err)
    );
  }

  // React says we have to define render!!
  render() {
    return <div>Latitude: {this.state.lat}</div>;
  }
}

root.render(<App />);
