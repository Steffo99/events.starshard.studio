module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("./node_modules/@steffo/bluelib/dist");
	eleventyConfig.addPassthroughCopy("./_tweaks");
    eleventyConfig.addPassthroughCopy("./_media");
    eleventyConfig.addPassthroughCopy("./_data");

    // https://dev.to/jorik/country-code-to-flag-emoji-a21
	eleventyConfig.addFilter("emojiFlag", function(value) {
        return String.fromCodePoint(...
            value
                .toUpperCase()
                .split('')
                .map(char => 0x1F1A5 + char.charCodeAt())
        )
	})
};
