import { defineConfig } from "vite";
import * as path from "path";
import { fileURLToPath, URL } from "url";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/

export default defineConfig(({ command, mode }) => {
	if (command === "serve") {
		console.info("COMMAND SERVE >> ::", command);
		return {
			// dev specific config
			base: "/",
			plugins: [vue()],
			resolve: {
				alias: [
					{ find: "@", replacement: path.resolve(__dirname, "src") },
					{
						find: "@assets",
						replacement: fileURLToPath(
							new URL("src/assets", import.meta.url)
						),
					},
				],
			},
			css: {
				preprocessorOptions: {
					scss: {
						additionalData: `
							@use "/src/scss/settings/" as settings;
							@use "/src/scss/tools/" as tools;

						`,
					},
				},
			},
		};
	} else {
		// command === 'build'
		console.info("COMMAND BUILD >> ::", command);
		return {
			// build specific config
			base: "/todo-app-main/",
			plugins: [vue()],
		};
	}
});
