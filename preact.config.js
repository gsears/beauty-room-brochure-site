import preactCliSvgLoader from 'preact-cli-svg-loader';
import CopyWebpackPlugin from 'copy-webpack-plugin';

export default function(config, env, helpers) {
	preactCliSvgLoader(config, helpers);
	config.plugins.push(
		new CopyWebpackPlugin([{ context: `${__dirname}/src/assets`, from: `*.*` }])
	);
}
