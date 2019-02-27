import { h, Component } from 'preact';

import style from './style';

import SocialLinks from '../social-links';

// Setting - cycle speed...
// Class for current, timeout cycles
export default class Hero extends Component {
	loadClass = () => {
		this.setState({ loaded: true });
	};

	constructor() {
		super();
		this.state.loaded = false;
	}

	componentDidMount() {
		setTimeout(this.loadClass, 0);
	}

	render(props, state) {
		return (
			<footer
				class={`${style.footer} ${this.state.loaded ? style.loaded : ''}`}
			>
				<a href="tel:+441394548734">01394 548734</a>

				<a href="http://maps.google.com/?q=7 Clements Road, Melton Park, Ufford, Suffolk, IP12 1SZ">
					7 Clements Road, Melton Park, IP12 1SZ
				</a>

				<SocialLinks />
			</footer>
		);
	}
}
