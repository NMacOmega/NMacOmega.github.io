const postcssPresetEnv = require('postcss-preset-env');
const postcssMixins = require('postcss-mixins');
const postcssImport = require('postcss-import');
const postcssConditionals = require('postcss-conditionals');
const postcssSimpleVars = require('postcss-simple-vars');
const postcssFor = require('postcss-for');
const postcssAdvancedVars = require('postcss-advanced-variables');

const config = {
	plugins: [
		postcssImport(),
		postcssMixins(),
		postcssFor(),
		postcssSimpleVars(),
		postcssAdvancedVars(),
		postcssConditionals(),
		postcssPresetEnv({
			stage: 3,
			features: {
				'nesting-rules': true,
				'custom-media-queries': true,
				'media-query-ranges': true
			}
		})
	]
};

module.exports = config;
