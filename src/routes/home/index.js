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
		opactity={isVisible ? 0.9 : 0}
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
			<section class={`${style.home} ${state.loaded ? style.animation : ''}`}>
				<div class={style.tag}>
					<h1>Covid-19 Updates</h1>
					<a class={style.hero_link} aria-label="Main Content" href="#main">
						{' '}
					</a>
				</div>

				<div>
					<h3>
						Following government advice on the coronavirus pandemic, we are sadly temporarily closed until the UK government and monitoring bodies deem it safe to reopen.
					</h3>
				</div>
				<div>
					<p>

						In these uncertain times, our main priority is the safety of our team and clients. Unfortunately, given the nature of our work, we are unable to enforce the social distancing measures that are so important in counteracting the spread of coronavirus.
						Thus we have had to make the difficult decision to stop our treatments and trading for the time being. </p>
					<p>
						Rest assured that we are making preparations for our reopening, including additional measures that will prioritise our customers' safety.
						</p>
					<p>
						We can’t thank you enough for continuing to support our business. Your kind words and messages mean so much to us and we miss you all.
						In particular we'd like to give a special thank you to all our key workers and NHS staff for all your hard work and bravery. You are true heroes and an inspiration to us all.
						</p>
					<p>
						Please stay strong, stay safe, stay alert and we shall get through this together.
					</p>

				</div>

				<div class={style.valediction_container}>
					<p>
						<span class={style.valediction}>With love,</span>
					</p>
					<p class={style.valediction_subject}>The Beauty Room Team</p>
				</div>

				<div>

					<p>
						Be sure to stay up to date with the latest developments on <strong>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://www.instagram.com/thebeautyroommeltonpark/"
							>
								Instagram
							</a>{' '}
						</strong>
							and{' '}
						<strong>
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
						<a
							href="../assets/TBR_PriceList_Spring19.pdf"
							target="_blank"
							rel="noopener noreferrer"
						>
							Our treatment menu
						</a>
						{' '} is still available for download.
					</p>

				</div>



			</section>
		);
	}
}
