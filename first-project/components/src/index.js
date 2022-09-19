import React from "react";
import ReactDOM from "react-dom/client";
import CommentDetail from "./CommentDetail";

const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />
    </div>
  );
};

root.render(<App />);
