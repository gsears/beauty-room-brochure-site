import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

import Logo from '../../assets/images/logo.svg';

export default class Header extends Component {
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
			<header
				class={`${style.header} ${state.loaded ? style.headerLoaded : ''}`}
			>
				<h1 class={state.loaded ? style.titleLoaded : ''}>
					<Link href="/">
						<Logo class={style.logo} />
					</Link>
				</h1>
			</header>
		);
	}
}
