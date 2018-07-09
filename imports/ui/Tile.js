import React, { Component } from 'react';

export default class Tile extends Component {
	render() {
		return (
			<div className="tile" data-x={this.props.x} data-y={this.props.y}>
				<div>
					x: {this.props.x}
				</div>
				<div>
					y: {this.props.y}
				</div>
			</div>
		);
	}
}