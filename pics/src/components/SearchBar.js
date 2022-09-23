import React from "react";

// Controlled Elements Flow
//
// User types in input
// Callback gets invoked
// We call setState with the new value
// Component rerenders
// Input is told what its value is (coming from state)

// The main difference between a controlled and uncontrolled element is that
// a controlled element has its value set by state, while an uncontrolled
// element has its value set by the DOM.

class SearchBar extends React.Component {
  state = { term: "" };

  // ! This is the other solution to the problem
  // ! the thing is that arrow functions by default
  // ! bind the value of this to the function
  // ! so there are no broken references
  // ? older:
  // code: onFormSubmit(event)
  // * new:
  onFormSubmit = (event) => {
    event.preventDefault();

    // * Usage of props in a class based component
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        {/* And there is a third way to solve this */}
        {/* based on the second solve, there is this one */}
        {/* code: <form onSubmit={(event) => this.onFormSubmit(event)} className="ui form"> */}
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

// ^ class Car {
// ^   setDriveSound(sound) {
// ^     this.sound = sound;
// ^   }
// ^
// ^   drive() {
// ^     return this.sound;
// ^   }
// ^ }
// ^
// ^ const car = new Car();
// ^ car.setDriveSound("Vroom");
// ^
// ^ const drive = car.drive();
// ^
// ^ drive();

//!!! This will cause the same error !!!

// ^ class SearchBar extends React.Component {
// ^   state = { term: "" };
// ^
// ^   onFormSubmit(event) {
// ^     event.preventDefault();
// ^     console.log(this.state.term);
// ^   }
// ^
// ^   render() {
// ^     return (
// ^       <div className="ui segment">
// ^         <form onSubmit={this.onFormSubmit} className="ui form">

// * The thing is that when we call drive() up there
// * the reference of this that we are passing to that function
// * is undefined. So when we try to access this.sound
// * we get an error.

// * We will not get an error if we call car.drive() because
// * the reference of this is the car object.

// * Same thing happens when we try to call state
// * inside onFormSubmit. The reference of this is undefined
// * because we called this.onFormSubmit and that may be
// * a reference to that particular function, like
// * drive = this.drive() and not the instance of the class.

// ^ Thats the main difference ^

// * The solution is to bind the value of this to the
// * function that we are passing to the event handler.

// ?  This is one solution  ?

// ^ class Car {
// ^   constructor() {
// !     this.drive = this.drive.bind(this);
// ^   }
// ^   setDriveSound(sound) {
// ^     this.sound = sound;
// ^   }
// ^
// ^   drive() {
// ^     return this.sound;
// ^   }
// ^ }
// ^
// ^ const car = new Car();
// ^ car.setDriveSound("Vroom");
// ^
// ^ const drive = car.drive();
// ^
// ^ drive();
