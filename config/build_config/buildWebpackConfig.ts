import { BuildOptions } from './types/config';
import webpack from 'webpack';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';
export function buildWebpackConfig(options : BuildOptions) : webpack.Configuration{
	return {
		mode : options.mode,
		entry: options.path.entry,
		output: {
			filename : '[name].js',
			path : options.path.build 
		},
		module: {
			rules: buildLoaders(options)
		},
		resolve: buildResolvers(options),
		plugins: buildPlugins(options),
		devtool: options.isDev ? 'inline-source-map' : undefined,
		devServer : options.isDev ? buildDevServer(options) : undefined,
	};  
} 