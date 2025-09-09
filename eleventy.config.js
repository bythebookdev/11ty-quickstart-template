// Added RenderPlugin to inject README.md in index page
import { RenderPlugin } from "@11ty/eleventy";
import { HtmlBasePlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
	eleventyConfig.addPlugin(RenderPlugin, {
		tagName: "renderTemplate", // Change the renderTemplate shortcode name
		tagNameFile: "renderFile", // Change the renderFile shortcode name
		filterName: "renderContent", // Change the renderContent filter name

		// Only available in Liquid right now
		accessGlobalData: false,   // Does rendered content has access to the data cascade?
	});
	eleventyConfig.addPlugin(HtmlBasePlugin);
};
export const config = {
	pathPrefix: "/11ty-quickstart-template/",
}