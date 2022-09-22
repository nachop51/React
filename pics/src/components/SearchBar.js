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

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
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
