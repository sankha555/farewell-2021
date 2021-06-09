import React, { Component, Fragment } from 'react';
import './TextHover.css';
class TextHover extends Component {
	state = {
		hovering: false,
	};
	render() {
		let spanWidthHandler = {};
		if (this.props.hoverActive) {
			spanWidthHandler = {
				width: '100%',
			};

			if (this.state.hovering) {
				spanWidthHandler = {
					width: '0%',
				};
			}
		}
		return (
			<Fragment>
				<div className='Text'>
					<div className='Overlay'>
						<h1 
                            className='Header1'
							text={this.props.text}
							key={this.props.key}
							id={this.props.id}
							onMouseLeave={(e) => {
								this.props.MouseLeft(e);
								this.setState({ hovering: false });
							}}
							onMouseEnter={(e) => {
								this.props.MouseEntered(e);
								this.setState({ hovering: true });
							}}>
							<span
								className='Half'
								style={spanWidthHandler}
								id={this.props.id}
								onMouseLeave={(e) => {
									this.props.MouseLeft(e);
									this.setState({ hovering: false });
								}}
								onMouseEnter={(e) => {
									this.props.MouseEntered(e);
									this.setState({ hovering: true });
								}}>
								{this.props.text}
							</span>
							<span className='Arrow'></span>
							{this.props.text}
						</h1>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default TextHover;