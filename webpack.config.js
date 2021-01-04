const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	// input
	entry: ['babel-polyfill', './src/js/index.js'],
	output: {
		// path to the folder need to be an absolute path
		// __dirname: the current absolute path  -> the FORKIFY directory
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/bundle.js'
	},
	devServer: {
		contentBase: './dist',
		historyApiFallback: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/index.html'
		})
	],
	module: {
		rules: [
			// babel-loader
			{
				test: /\.js$/, //regular expression
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	}
};
