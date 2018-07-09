import React, { Component } from 'react';
import Tile from './Tile.js';

export default class Gameboard extends Component {
	render() {
		// TODO: Write renderTiles function
		let tiles	= [];
		let rows	= [];
		let columns = [];
		for (let x = 0; x < 50; x++) {
			for (let y = 0; y < 80; y++) {
				tiles.push({
					x: x,
					y: y,
				});
			}
		}
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
				<Tile key={index} x={tile.x} y={tile.y}/>
			);
		});
		return (
			<div className="game-board">
				{rows}
			</div>
		);
	}
}