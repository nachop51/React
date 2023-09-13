import { useEffect } from "react";

const Header = ({ handleNewGame, wins }) => {
	useEffect(() => {
		document.title = `Memento | Wins: ${wins}`;
	}, [wins]);

	return (
		<header className="header">
			<h4>{wins} wins</h4>
			<h3>Memory Game</h3>
			<button onClick={handleNewGame}>New Game</button>
		</header>
	);
};

export default Header;
