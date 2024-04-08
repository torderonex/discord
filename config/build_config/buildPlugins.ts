import webpack, { DefinePlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export function buildPlugins(options : BuildOptions) : webpack.WebpackPluginInstance[]{
	return [
		new HtmlWebpackPlugin({
			template: options.path.html
		}),
		new webpack.ProgressPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css',
		}),
		new DefinePlugin({
			__IS_DEV__ : options.isDev
		}),
	].concat(options.isDev ? [new BundleAnalyzerPlugin({
		openAnalyzer:false
	})] : []);
} 