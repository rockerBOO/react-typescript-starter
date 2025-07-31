import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import postcssPresetEnv from "postcss-preset-env";

export default {
	plugins: [
		...(process.env.NODE_ENV === "production"
			? [
					autoprefixer(),
					postcssPresetEnv({
						features: {},
					}),
					cssnano({
						preset: "default",
					}),
				]
			: []),
	],
};
