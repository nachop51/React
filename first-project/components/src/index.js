//jshint esversion:6
import "./style/App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import { faker } from "@faker-js/faker";

const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45PM"
          image={faker.image.image()}
          text="Nice blog post!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 2:00PM"
          image={faker.image.image()}
          text="I like the subject"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Yesterday at 5:00PM"
          image={faker.image.image()}
          text="I like the writing"
        />
      </ApprovalCard>
    </div>
  );
};

root.render(<App />);
