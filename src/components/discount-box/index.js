import { h } from 'preact';
import style from './style';

const DiscountBox = props => (
	<div class={style.container}>
		<h2>{props.offer}</h2>
		<p>{props.terms}*</p>
	</div>
);

export default DiscountBox;
