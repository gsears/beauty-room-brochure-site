import { h } from 'preact';
import FaFacebook from 'preact-icons/fa/facebook-official';
import FaInstagram from 'preact-icons/fa/instagram';
import FaTwitter from 'preact-icons/fa/twitter';
import style from './style';

const SocialLinks = () => (
	<div class={style.social_links}>
		<a
			class={style.facebook}
			aria-label="Beauty Room Facebook Page"
			target="_blank"
			rel="noopener noreferrer"
			href="https://www.facebook.com/TheBeautyRoomMelton/"
		>
			<FaFacebook />
		</a>
		<a
			class={style.instagram}
			aria-label="Beauty Room Instagram Page"
			target="_blank"
			rel="noopener noreferrer"
			href="https://www.instagram.com/thebeautyroommeltonpark/"
		>
			<FaInstagram />
		</a>
		<a
			class={style.twitter}
			aria-label="Beauty Room Twitter Page"
			target="_blank"
			rel="noopener noreferrer"
			href="https://twitter.com/meltonbeauty"
		>
			<FaTwitter />
		</a>
	</div>
);

export default SocialLinks;
