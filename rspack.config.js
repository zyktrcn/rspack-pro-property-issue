/**
 * @type {import('@rspack/cli').Configuration}
 */
module.exports = {
	context: __dirname,
	mode: 'production',
	entry: {
		main: "./src/main.jsx"
	},
	builtins: {
		html: [
			{
				template: "./index.html"
			}
		]
	},
	target: ['web', 'es5'],
	module: {
		rules: [
			{
				test: /\.svg$/,
				type: "asset"
			}
		]
	}
};
