import { useEffect, useState } from "react";
import shuffle from "./utilities/shuffle";
import Card from "./components/Card";
import Header from "./components/Header";
import useAppBadge from "./hooks/useAppBadge";

function App() {
	const [cards, setCards] = useState(shuffle);
	const [pickOne, setPickOne] = useState(null);
	const [pickTwo, setPickTwo] = useState(null);
	const [disabled, setDisabled] = useState(false);
	const [wins, setWins] = useState(0);
	const [setBadge, clearBadge] = useAppBadge();

	const handleClick = (card) => {
		if (!disabled) {
			pickOne ? setPickTwo(card) : setPickOne(card);
		}
	};

	const handleTurn = () => {
		setPickOne(null);
		setPickTwo(null);
		setDisabled(false);
	};

	useEffect(() => {
		let pickTimer;

		if (pickOne && pickTwo) {
			if (pickOne.image === pickTwo.image) {
				setCards((prevCards) =>
					prevCards.map((card) => {
						if (card.image === pickOne.image) {
							return { ...card, matched: true };
						}
						return card;
					})
				);
				handleTurn();
			} else {
				setDisabled(true);
				pickTimer = setTimeout(handleTurn, 1000);
			}
		}

		return () => {
			clearTimeout(pickTimer);
		};
	}, [cards, pickOne, pickTwo]);

	const handleNewGame = () => {
		clearBadge();
		setWins(0);
		handleTurn();
		setCards(shuffle);
	};

	useEffect(() => {
		if (cards.every((card) => card.matched)) {
			setWins((prevWins) => prevWins + 1);
			handleTurn();
			setBadge();
			setCards(shuffle);
		}
	}, [cards, wins]);

	return (
		<>
			<Header handleNewGame={handleNewGame} wins={wins} />
			<div className="grid">
				{cards.map((card) => {
					const { id, image, matched } = card;

					return (
						<Card
							key={id}
							image={image}
							selected={card === pickOne || card === pickTwo || matched}
							onClick={() => handleClick(card)}
						/>
					);
				})}
			</div>
		</>
	);
}

export default App;
