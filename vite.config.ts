import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import biome from "vite-plugin-biome";
import checker from "vite-plugin-checker";
import stylelint from "vite-plugin-stylelint";

export default defineConfig({
	plugins: [react(), stylelint(), biome(), checker({ typescript: true })],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
});
