import { h, Component } from 'preact';

import style from './style';

// Setting - cycle speed...
// Class for current, timeout cycles
export default class Hero extends Component {
	updateImage = () => {
		const newImageIndex =
			(this.state.currentImageIndex + 1) % this.props.images.length;
		this.setState({ currentImageIndex: newImageIndex });
	};

	loadClass = () => {
		this.setState({ loaded: true });
	};

	constructor() {
		super();

		// set initial time:
		this.state.currentImageIndex = 0;
		this.state.loaded = false;
	}

	componentDidMount() {
		setTimeout(this.loadClass, 0);
		setTimeout(this.updateImage, 0);

		// update time every second
		this.timer = setInterval(this.updateImage, this.props.interval);
	}

	componentWillUnmount() {
		// stop when not renderable
		clearInterval(this.timer);
	}

	render(props, state) {
		return (
			<div
				class={`${style.image_container} ${
					this.state.loaded ? style.intro : ''
				}`}
			>
				{props.images.map((url, i) => (
					<div
						class={`${style.image} ${
							i === state.currentImageIndex ? style.current : ''
						}`}
						style={{
							backgroundImage: `url(${url})`,
							transition: `opacity ${this.props.fadeDuration}ms, 
                            transform 
                                ${this.props.kenBurnsDuration}ms 
                                ${this.props.kenBurnsDelay}ms`
						}}
					/>
				))}
			</div>
		);
	}
}
