//jshint esversion:6
import "semantic-ui-css/semantic.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import SeasonDisplay from "./SeasonDisplay";

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
  // If we want to call a constructor method we need to call super(props) (props is an object that contains all the data that was passed to this component)
  // constructor(props) {
  //   super(props);

  //   // We never want to set state like this
  //   // the only exception is when we are initializing state

  //   // This are two valid ways to initialize state
  //   this.state = { lat: null, errorMessage: "" };
  // }

  state = { lat: null, errorMessage: "" };

  // componentDidMount is invoked immediately after a component is mounted (inserted into the tree).
  // Initialization that requires DOM nodes should go here.
  // If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // This is the right way set the state of an object
        // We call setState to update the state object
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  // componentDidUpdate() is invoked immediately after updating occurs. This method is not called for the initial render.
  componentDidUpdate() {
    console.log("My component was just updated - it rerendered!");
  }

  // React says we have to define render!!
  render() {
    // Conditional Rendering
    // If...
    //  the user allows location access, show the latitude
    //  the user denies location access, show the error message
    //  the user has not yet responded, show a loading message

    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <div>Loading!</div>;
  }
}

root.render(<App />);
