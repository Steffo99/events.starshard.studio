const toml = require("toml");
const pluginRss = require("@11ty/eleventy-plugin-rss")


module.exports = function(eleventyConfig) {
    eleventyConfig.setNunjucksEnvironmentOptions({
        trimBlocks: true,
        lstripBlocks: true,
    })

    eleventyConfig.addDataExtension("toml", contents => toml.parse(contents));
    eleventyConfig.setFrontMatterParsingOptions({
        engines: {
            toml: {
                parse: toml.parse.bind(toml)
            }
        }
    })

	eleventyConfig.addPassthroughCopy("./node_modules/@steffo/bluelib/dist");
	eleventyConfig.addPassthroughCopy("./_tweaks");
    eleventyConfig.addPassthroughCopy("./_media");
    // eleventyConfig.addPassthroughCopy("./_data");

    // https://dev.to/jorik/country-code-to-flag-emoji-a21
	eleventyConfig.addFilter("emojiFlag", function(value) {
        return String.fromCodePoint(...
            value
                .toUpperCase()
                .split('')
                .map(char => 0x1F1A5 + char.charCodeAt())
        )
	})

    eleventyConfig.addFilter("stringToDate", function(value) {
        return new Date(value)
    })
    eleventyConfig.addFilter("mapattr", function(value, attr) {
        let n = []
        for(const v of value) {
            n.push(v[attr])
        }
        return n
    })
    eleventyConfig.addFilter("sortEvents", function(value) {
        let values = Object.values(value)
        values.sort(function(a, b) {
            if(a.date.start < b.date.start) {
                return 1
            }
            else if(a.date.start > b.date.start) {
                return -1
            }
            else if(a.id < b.id) {
                return 1
            }
            else if(a.id > b.id) {
                return -1
            }
            else {
                return 0
            }
        })
        return values
    })
    eleventyConfig.addPlugin(pluginRss);
};
