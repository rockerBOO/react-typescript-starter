import postcssPresetEnv from "postcss-preset-env";
import cssnano from "cssnano";
import autoprefixer from "autoprefixer";

export default {
  plugins: [
    autoprefixer,
    postcssPresetEnv({
      features: {},
    }),
    ...(process.env.NODE_ENV === "production"
      ? [
          cssnano({
            preset: "default",
          }),
        ]
      : []),
  ],
};
