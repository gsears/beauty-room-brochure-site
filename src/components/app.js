import { h, Component } from 'preact';
import { Router } from 'preact-router';
import style from './style';
import Header from './header';
import Footer from './footer';
import Hero from './hero-carousel';
// Code-splitting is automated for routes
import Home from '../routes/home';
import OfferTerms from '../routes/offer-terms';

export default class App extends Component {

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	// handleRoute = e => {
	// 	setTimeout(() => {
	// 		this.setState({
	// 			currentUrl: e.url
	// 		});
	// 	}, 0);
	// };

	render(props, state) {
		return (
			<div id="app" class={style.preload}>
				<Hero
					fadeDuration={3000}
					interval={6000}
					kenBurnsDuration={6000}
					kenBurnsDelay={0}
					images={['../assets/images/photo.jpg', '../assets/images/opi.jpg']}
				/>
				<div class={style.content}>
					<Header />
					<div class={style.main} id="main">
						<Router>
							<Home path="/" />
							<OfferTerms path="/offer-terms-and-conditions/" />
						</Router>
					</div>
					<Footer />
				</div>
			</div>
		);
	}
}
