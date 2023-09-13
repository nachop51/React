import css from "../assets/css.png";
import html5 from "../assets/html5.png";
import jquery from "../assets/jquery.png";
import js from "../assets/js.png";
import next from "../assets/next.png";
import node from "../assets/node.png";
import react from "../assets/react.png";
import ts from "../assets/ts.png";

const shuffle = () => {
	const assets = [
		{ image: css, name: "css" },
		{ image: html5, name: "html5" },
		{ image: jquery, name: "jquery" },
		{ image: js, name: "js" },
		{ image: next, name: "next" },
		{ image: node, name: "node" },
		{ image: react, name: "react" },
		{ image: ts, name: "ts" },
	];
	return [...assets, ...assets]
		.sort(() => Math.random() - 0.5)
		.map((card) => ({ ...card, id: Math.random() }));
};

export default shuffle;
