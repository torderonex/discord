import webpack from 'webpack';
import path from 'path';
import { buildCssLoader } from '../build_config/loaders/buildCssLoader';
export default function({ config } : {config : webpack.Configuration}) {
	const pth = path.resolve(__dirname,'..','..','src');
	config.resolve.modules.push(pth);
	config.resolve.extensions.push('.ts','.tsx');
    
	config.module.rules.push(buildCssLoader(true));

	config?.module?.rules?.forEach(rule => {
		if (!rule || typeof rule !== 'object') return;
		if (rule.test instanceof RegExp && rule.test.test('.svg')) {
			rule.exclude = /\.svg$/;
		}
	});
	config.module.rules.push({
		test: /\.svg$/,
		use: ['@svgr/webpack'],
	});
	return config;
}