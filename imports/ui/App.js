// Imports
import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

// Components
import Game from "./Game";

// Collections
import { Games } from '../api/games.js';

// Constants
const APP_NAME = 'Dungeon Maker';

// Variables
let game;

// App component - represents the whole app
class App extends Component {
	constructor(props) {
		super(props);

		game = this.props.game;
	}
	render() {
		return (
			<Game appName={APP_NAME} game={game}/>
		);
	}
}

export default withTracker(() => {
	return {
		game: Games.findOne(),
	};
})(App);
