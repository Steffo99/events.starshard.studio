module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("./node_modules/@steffo/bluelib/dist/base.root.css");
	eleventyConfig.addPassthroughCopy("./node_modules/@steffo/bluelib/dist/classic.root.css");
	eleventyConfig.addPassthroughCopy("./node_modules/@steffo/bluelib/dist/glass.root.css");
	eleventyConfig.addPassthroughCopy("./node_modules/@steffo/bluelib/dist/layouts-center.root.css");
	eleventyConfig.addPassthroughCopy("./node_modules/@steffo/bluelib/dist/colors-purplestar.root.css");
	eleventyConfig.addPassthroughCopy("./node_modules/@steffo/bluelib/dist/fonts-fira-ghpages.root.css");
	eleventyConfig.addPassthroughCopy("./index.css");
	eleventyConfig.addPassthroughCopy("./index.js");
	eleventyConfig.addPassthroughCopy("./media/kazuend-2KXEb_8G5vo-unsplash-edited-full.jpg");
	eleventyConfig.addPassthroughCopy("./media/kazuend-2KXEb_8G5vo-unsplash-edited-1080.jpg");
	eleventyConfig.addPassthroughCopy("./media/kazuend-2KXEb_8G5vo-unsplash-edited-720.jpg");
	eleventyConfig.addPassthroughCopy("./media/kazuend-2KXEb_8G5vo-unsplash-edited-480.jpg");

	eleventyConfig.addFilter("flagEmoji", function(value) {
		return {
			"it": "🇮🇹",
			"en": "🇬🇧",
		}[value]
	})
};
