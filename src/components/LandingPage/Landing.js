import './Landing.css';
import React, { Component } from 'react';
import TextHover from './TextHover';
import Code from './assets/Code.jpg';
import { Animated } from 'react-animated-css';

class Landing extends Component {
	state = {
		hovering: 0,
		background: null,
		// loader: 1,
		// logoCollapser: {},
	};
	// componentDidMount() {
	// 	setTimeout(() => {
	// 		this.setState({
	// 			logoCollapser: {
	// 				borderRadius: '100%',
	// 				marginLeft: '10px',
	// 				marginTop: '30px',
	// 				width: '0',
	// 				height: '0',
	// 				color: 'transparent',
	// 			},
	// 		});
	// 	}, 3000);
	// 	setTimeout((s) => {
	// 		this.setState({ loader: 0 });
	// 	}, 4200);
	// }
	mouseEntered = (event) => {
		this.setState({ hovering: 1, background: event.target.id });
	};
	mouseLeft = (event) => {
		this.setState({ hovering: 0, background: null });
	};

	render() {
		let blueSlider = {};
		let backGround = {
			opacity: '0',
			background: `url(${this.state.background})`,
		};
		let headLine = {};

		let footer = {};
		if (this.state.hovering) {
			blueSlider = {
				backgroundPosition: '100% 0',
			};
			backGround = {
				background: `url(${this.state.background})`,
				opacity: '1',
				backgroundSize: 'cover',
				backgroundPosition: 'unset',
				zIndex: '5',
				transform: 'scale(1.1,1.1)',
				position: 'fixed'
			};
			headLine = {
				width: '100%',
			};

			footer = { transform: 'translateY(-3.5vw)' };
		}

		let Screen = (
			<div className='Landing'>
				{/* <div className='Loader' style={{ ...this.state.logoCollapser }}>
					<Animated animationIn='slideInUp' isVisible={true}>
						<div>
							<h3>Hey, this is Pranay and you are watching my portfolio!</h3>
						</div>
					</Animated>
				</div> */}
			</div>
		);

		 
			Screen = (
				<div className='Landing'>
					<nav className="">
						{/* <div className='Logo'>
							<div className='red'>B</div>
						</div> */}
						<span className='Projects'>
							<h4>
								Hobbies{' '}
								<span className='Headline' style={headLine}>
									Hobbies{' '}
								</span>
							</h4>
						</span>
						{/* <div className='Menu'>
							<p>
								More <span>//</span>
							</p>
						</div> */}
					</nav>
					<div className='Background1' style={backGround}></div>
					<div className='BlueSlider' style={blueSlider}></div>

					<div className='MainContainer' >
						{' '}
					
						<TextHover
							id={Code}
							text='Code'
							MouseEntered={this.mouseEntered}
							MouseLeft={this.mouseLeft}
							hoverActive={this.state.hovering}
						/>
						<TextHover
							id={Code}
							text='Code'
							MouseEntered={this.mouseEntered}
							MouseLeft={this.mouseLeft}
							hoverActive={this.state.hovering}
						/>
						<TextHover
							id={Code}
							text='Code'
							MouseEntered={this.mouseEntered}
							MouseLeft={this.mouseLeft}
							hoverActive={this.state.hovering}
						/>
						<TextHover
							id={Code}
							text='Code'
							MouseEntered={this.mouseEntered}
							MouseLeft={this.mouseLeft}
							hoverActive={this.state.hovering}
						/>
						<TextHover
							id={Code}
							text='Code'
							MouseEntered={this.mouseEntered}
							MouseLeft={this.mouseLeft}
							hoverActive={this.state.hovering}
						/>
						<TextHover
							id={Code}
							text='Code'
							MouseEntered={this.mouseEntered}
							MouseLeft={this.mouseLeft}
							hoverActive={this.state.hovering}
						/>
						<TextHover
							id={Code}
							text='Code'
							MouseEntered={this.mouseEntered}
							MouseLeft={this.mouseLeft}
							hoverActive={this.state.hovering}
						/>
						
						
					</div>
				</div>
			);
		
		return Screen;
	}
}

export default Landing;