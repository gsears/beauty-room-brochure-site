import { h, Component } from 'preact';
import style from './style';

import { Link } from 'preact-router/match';
import DiscountBox from '../../components/discount-box';

import ScrollAnimation from 'react-animate-on-scroll';

export default class Home extends Component {
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
			<section class={`${style.home}`}>
				<div class={style.tag}>
					<h1>We're having a makeover!</h1>
					<a class={style.hero_link} aria-label="Main Content" href="#main">
						{' '}
					</a>
				</div>
				<ScrollAnimation
					animateIn={style.animation_end}
					animateOnce
					offset={40}
					delay={0}
					duration={500}
				>
					<p>
						We're working on bringing the site up to our high standards and hope
						to be up and running soon.
					</p>
					<p>
						As a thank you for bearing with us, here's a little treat for your
						patience:
					</p>
				</ScrollAnimation>
				<DiscountBox offer={'10% off'} terms={'Your next treatment'} />
				<div>
					<p>
						Simply quote 'MAKEOVER19' when booking. *See our{' '}
						<Link href="/offer-terms-and-conditions">full terms here</Link>.
					</p>
					<p>
						In the meantime, be sure to stay up to date with our latest news and{' '}
						<strong>
							exclusive offers on{' '}
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://www.instagram.com/thebeautyroommeltonpark/"
							>
								Instagram
							</a>{' '}
							and{' '}
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://www.facebook.com/TheBeautyRoomMelton/"
							>
								Facebook
							</a>
						</strong>
						.
					</p>
					<p>
						Finally, be sure to view{' '}
						<a
							href="../assets/TBR_PriceList_Spring19.pdf"
							target="_blank"
							rel="noopener noreferrer"
						>
							our latest treatment menu
						</a>
						.
					</p>
				</div>
				<div class={style.valediction_container}>
					<p>
						<span class={style.valediction}>With love,</span>
					</p>
					<p class={style.valediction_subject}>The Beauty Room Team</p>
				</div>
			</section>
		);
	}
}
