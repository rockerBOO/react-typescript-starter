import postcssPresetEnv from "postcss-preset-env";
import cssnano from "cssnano";
import autoprefixer from "autoprefixer";

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
