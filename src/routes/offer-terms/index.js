import { h } from 'preact';
import style from './style';
import FaBack from 'preact-icons/fa/angle-left';
import { Link } from 'preact-router';

const Home = () => (
	<section>
		<h1>Offer Terms and Conditions</h1>
		<ul class={style.offer_list}>
			<li>Offer only redeemable once per person.</li>
			<li>Cannot be used in conjunction with any other offer.</li>
			<li>
				The offer is only valid for treatments and is not redeemable against
				retail or voucher purchases.
			</li>
			<li>Promotion ends 1/7/2019</li>
		</ul>
		<p>
			<Link href="/">
				<FaBack />
				Back
			</Link>
		</p>
	</section>
);

export default Home;
