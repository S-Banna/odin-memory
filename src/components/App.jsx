import "../css/App.css";
import CardMaker from "./CardMaker";
import Header from "./header";

function App() {
	return (
		<>
			<Header></Header>
			<div className="body">
				<CardMaker></CardMaker>
			</div>
		</>
	);
}

export { App };
