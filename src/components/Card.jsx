import "../css/Card.css";

export default function Card({ image, name }) {
	return (
		<div className="card">
			<div className="image">
				<img src={image} alt="pokemon" />
			</div>
			<div className="name">
				<p>{name.slice(0, 1).toUpperCase() + name.slice(1)}</p>
			</div>
		</div>
	);
}
