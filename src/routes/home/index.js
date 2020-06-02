import { h, Component } from 'preact';
import style from './style';

import { Link } from 'preact-router/match';
import DiscountBox from '../../components/discount-box';

import ScrollAnimation from 'react-animate-on-scroll';

import TrackVisibility from 'react-on-screen';

const AnimatedDiv = ({ delay, isVisible, children }) => (
	<ScrollAnimation
		animateIn={`${style.animation_end} ${style.dur1000}`}
		offset={40}
		delay={isVisible ? delay : 0}
		duration={1}
		animateOnce
	>
		{' '}
		{children}
	</ScrollAnimation>
);

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
				<TrackVisibility>
					<AnimatedDiv delay={3000}>
						<div class={style.tag}>
							<h1>We're having a makeover!</h1>
							<a class={style.hero_link} aria-label="Main Content" href="#main">
								{' '}
							</a>
						</div>
					</AnimatedDiv>
				</TrackVisibility>

				<ScrollAnimation
					animateIn={`${style.animation_end} ${style.dur1000}`}
					offset={40}
					delay={300}
					duration={0.5}
					animateOnce
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
				<ScrollAnimation
					animateIn={`${style.animation_end} ${style.dur1000}`}
					offset={40}
					delay={500}
					duration={0.5}
					animateOnce
				>
					<DiscountBox offer={'10% off'} terms={'Your next treatment'} />
				</ScrollAnimation>

				<ScrollAnimation
					animateIn={`${style.animation_end} ${style.dur1000}`}
					offset={40}
					delay={700}
					duration={0.5}
					animateOnce
				>
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
				</ScrollAnimation>

				<ScrollAnimation
					animateIn={`${style.animation_end} ${style.dur1000}`}
					offset={40}
					delay={900}
					duration={0.5}
					animateOnce
				>
					<div class={style.valediction_container}>
						<p>
							<span class={style.valediction}>With love,</span>
						</p>
						<p class={style.valediction_subject}>The Beauty Room Team</p>
					</div>
				</ScrollAnimation>
			</section>
		);
	}
}
