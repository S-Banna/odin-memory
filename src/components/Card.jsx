export default function Card({ image, name }) {
	return (
		<div className="card">
			<img src={image} alt="pokemon" />
			<p>{name}</p>
		</div>
	);
}
