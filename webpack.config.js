const path = require('path');

module.exports = {
	mode: 'development',
	devServer: {
		port: 3000,
		hot: true,
	},
	entry: './src/App.js',
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.png$/,
				use: ['file-loader'],
			},
		],
	},
};
