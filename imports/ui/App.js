import React, { Component } from 'react';
import Game from "./Game";

// Constants
const APP_NAME = 'Dungeon Maker';

// App component - represents the whole app
export default class App extends Component {
	render() {
		return (
			<Game appName={APP_NAME}/>
		);
	}
}
