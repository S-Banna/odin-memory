import { pokemons } from "./Card.js";
import Card from "./Card.jsx";

const data = await pokemons();

export default function CardMaker() {
	return (
		<>
			{data.map((pokemon) => {
				return (
					<Card image={pokemon.image} name={pokemon.name} key={pokemon.name} />
				);
			})}
		</>
	);
}
