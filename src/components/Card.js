export const pokemons = async () => {
	const data = [];

	for (let i = 0; i < 15; i++) {
		const poke = await fetch(
			"https://pokeapi.co/api/v2/pokemon/" + (i * 3 + 1)
		);
		data.push(await poke.json());
	}
	const dataFiltered = data.map((pokemon, index) => {
		return {
			name: pokemon.name,
			image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
				3 * index + 1
			}.png`,
		};
	});

	return dataFiltered;
};
