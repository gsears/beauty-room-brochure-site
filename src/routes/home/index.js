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
					<h1>We're having a makeover!</h1>
					<a class={style.hero_link} aria-label="Main Content" href="#main">
						{' '}
					</a>
				</div>

				<div>
					<p>
						Following government advice on the covid-19 pandemic, we are sadly temporarily closed until the UK government and monitoring bodies deem it safe to reopen.
						In these uncertain times, our main priority is the safety of our team and clients.
						To this end,  Given the nature of our work, we are unable to enforce the social distancing measures that are so important at this time we need to protect ourselves and others. We are working on extra measures and shall continue to do so to ensure everyone’s safety for when we can reopen. We can’t thank you enough for continuing to support our business, your kind words and messages, it means a lot to us and we miss you all.
						A huge thank you to all our key workers and NHS for all your hard work and bravery, you are true heroes and an inspiration to us all.
						Please stay strong, stay safe, stay alert and we shall get through this together 🤍
					</p>
					<p>
						As a thank you for bearing with us, here's a little treat for your
						patience:
					</p>
				</div>


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
