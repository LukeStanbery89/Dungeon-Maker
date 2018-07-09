import React, { Component } from 'react';
import classnames from 'classnames';

export default class Tile extends Component {
	constructor(props) {
		super(props);

		this.state = {
			visible: this.props.tile.visible,
		}
	}

	handleClick() {
		this.setState({
			visible: !this.state.visible,
		});
	}

	render() {
		const tileClassNames = classnames(
			"tile",
			{
				"visible": this.state.visible,
			}
		);

		return (
			<div className={tileClassNames} data-x={this.props.tile.x} data-y={this.props.tile.y} onClick={this.handleClick.bind(this)}>
				<div>
					x: {this.props.tile.x}
				</div>
				<div>
					y: {this.props.tile.y}
				</div>
			</div>
		);
	}
}