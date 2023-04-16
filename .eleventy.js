module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("./node_modules/@steffo/bluelib/dist/base.root.css");
	eleventyConfig.addPassthroughCopy("./node_modules/@steffo/bluelib/dist/classic.root.css");
	eleventyConfig.addPassthroughCopy("./node_modules/@steffo/bluelib/dist/glass.root.css");
	eleventyConfig.addPassthroughCopy("./node_modules/@steffo/bluelib/dist/layouts-center.root.css");
	eleventyConfig.addPassthroughCopy("./node_modules/@steffo/bluelib/dist/colors-purplestar.root.css");
	eleventyConfig.addPassthroughCopy("./node_modules/@steffo/bluelib/dist/fonts-fira-ghpages.root.css");
	eleventyConfig.addPassthroughCopy("./index.css");
	eleventyConfig.addPassthroughCopy("./index.js");

	eleventyConfig.addFilter("flagEmoji", function(value) {
		return {
			"it": "🇮🇹",
			"en": "🇬🇧",
		}[value]
	})
};
