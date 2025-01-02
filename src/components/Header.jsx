import "../css/Header.css";

export default function Header({ currScore, highScore }) {
	return (
		<div className="header">
			<h2>Pokemon Memory Game</h2>
			<div className="scores">
                <p>Score: {currScore}</p>
                <p>High Score: {highScore}</p>
            </div>
		</div>
	);
}
