import React, { Component } from 'react';
import Tile from './Tile.js';

/**
 * The Gameboard Component renders the rows/columns of tiles.
 */
export default class Gameboard extends Component {
	render() {
		let tiles	= [];
		let rows	= [];
		let columns = [];

		// TODO: Re-write this to use real tile records
		for (let x = 0; x < 50; x++) {
			for (let y = 0; y < 80; y++) {
				tiles.push({
					x: x,
					y: y,
					visible: false,
				});
			}
		}

		// Build the rows/columns
		tiles.map(function (tile, index) {
			if (tile.y === 0) {
				if (tile.x !== 0) {
					rows.push(
						<div key={tile.x} className="tile-row">
							{columns}
						</div>
					);
				}
				columns = [];
			}
			columns.push(
				<Tile key={index} tile={tile}/>
			);
		});

		return (
			<div className="game-board">
				{rows}
			</div>
		);
	}
}