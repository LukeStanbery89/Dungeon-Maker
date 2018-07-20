import React, { Component } from 'react';
import Navbar from "./Navbar.js";
import Gameboard from "./Gameboard.js";

export default class Game extends Component {
	renderGameboard() {
		if (this.props.game) {
			console.log("Game: ", this.props.game);
			return (
				<Gameboard game={this.props.game}/>
			);
		}
	}

	render() {
		console.log("Game props: ", this.props);
		return (
			<div className="app-container">
				<Navbar appName={this.props.appName}/>
				{this.renderGameboard()}
			</div>
		);
	}
}