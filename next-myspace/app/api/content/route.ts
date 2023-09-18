import { NextResponse } from "next/server";

const posts = [
  {
    title: "Lorem Ipsum",
    slug: "lorem",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    title: "Web Development",
    slug: "web",
    content: "Web development involves designing and building websites and web applications."
  },
  {
    title: "Data Science",
    slug: "data",
    content: "Data science is the field of study that deals with the extraction of knowledge and insights from data."
  },
  {
    title: "JavaScript Basics",
    slug: "javascript",
    content: "JavaScript is a programming language commonly used for web development."
  },
  {
    title: "Random Data Generation",
    slug: "random",
    content: "Generating random data can be useful for testing and development purposes."
  }
];

export function GET() {
  return NextResponse.json(posts)
}