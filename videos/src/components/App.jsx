import React from "react";
import SearchBar from "./SearchBar";
import "../apis/youtube";
import youtube from "../apis/youtube";

class App extends React.Component {
  state = { videos: [] };

  onFormSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar onSubmit={this.onFormSubmit} />I have{" "}
        {this.state.videos.length} videos.
      </div>
    );
  }
}

export default App;
