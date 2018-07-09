import React, { Component } from 'react';
import Navbar from "./Navbar.js";
import Gameboard from "./Gameboard.js";

export default class Game extends Component {
	render() {
		return (
			<div className="app-container">
				<Navbar appName={this.props.appName}/>
				<Gameboard/>
			</div>
		);
	}
}