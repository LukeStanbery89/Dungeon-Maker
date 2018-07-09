import React, { Component } from 'react';
import Navbar from './Navbar.js';

// Constants
const APP_NAME = 'Dungeon Maker';

// App component - represents the whole app
export default class App extends Component {
	render() {
		return (
			<div className="app-container">
				<Navbar appName={APP_NAME}/>
			</div>
		);
	}
}
