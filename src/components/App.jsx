import { useState } from "react";
import "../css/App.css";
import Header from "./Header.jsx";
import Card from "./Card.jsx";
import { pokemons } from "./Card.js";

const initData = await pokemons();

const initClicked = new Map();
initData.forEach((element) => initClicked.set(element.name, false));

function App() {
	const [data, setData] = useState(initData);
	const [hashMap, setHashMap] = useState(initClicked);
	const [score, setScore] = useState(0);
	const [highScore, setHighScore] = useState(0);

	function resetHashMap() {
		setHashMap(initClicked);
		setData(initData);
		if (score > highScore) setHighScore(score);
		setScore(0);
	}

	function updateMap(name, boolean) {
		if (boolean) resetHashMap();
		else {
			const newHashMap = new Map(hashMap).set(name, true);
			setHashMap(newHashMap);
			setScore(score + 1);
		}
	}

	function shuffleArray() {
		let newArray = [].concat(data);
		let currentIndex = newArray.length;
		while (currentIndex != 0) {
			let randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;
			[newArray[currentIndex], newArray[randomIndex]] = [
				newArray[randomIndex],
				newArray[currentIndex],
			];
		}
		setData(newArray);
	}

	function handleClick(name) {
		shuffleArray();
		updateMap(name, hashMap.get(name));
	}

	return (
		<>
			<Header currScore={score} highScore={highScore}></Header>
			<div className="body">
				{data.map((pokemon) => {
					return (
						<Card
							image={pokemon.image}
							name={pokemon.name}
							key={pokemon.name}
							onClick={() => handleClick(pokemon.name)}
						/>
					);
				})}
			</div>
		</>
	);
}

export { App };
