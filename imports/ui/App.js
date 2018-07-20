// Imports
import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

// Components
import Game from "./Game";

// Collections
import { Games } from '../api/games.js';

// Constants
const APP_NAME = 'Dungeon Maker';

// App component - represents the whole app
class App extends Component {
	render() {
		return (
			<Game appName={APP_NAME} game={this.props.game}/>
		);
	}
}

// Provide reactivity between the database and the Game instance
export default withTracker(() => {
	let game = Games.findOne({});
	return {
		game: game,
	};
})(App);
