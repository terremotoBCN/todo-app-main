import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
/*
export default defineConfig({
	base: "/",
	plugins: [vue()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
				// Layout
				$Layout-Mobile: 375px;
				$Layout-Desktop: 1440px;

				// Primary
				$Bright-Blue: hsl(220, 98%, 61%);
				$Check-Background: linear-gradient(90deg, hsl(192, 100%, 67%) 0%, hsl(280, 87%, 65%) 100%);

				// Light Theme
				$Light-Gray: hsl(0, 0%, 98%);
				$Lighter-Grayish-Blue: hsl(236, 33%, 92%);
				$Light-Grayish-Blue: hsl(233, 11%, 84%);
				$Dark-Grayish-Blue: hsl(236, 9%, 61%);
				$Darker-Grayish-Blue: hsl(235, 19%, 35%);

				// Dark Theme
				$Darker-Blue: hsl(235, 21%, 11%);
				$Darker-Desaturated-Blue: hsl(235, 24%, 19%);
				$Light-Grayish-Blue: hsl(234, 39%, 85%);
				$Light-Grayish-Blue-hover: hsl(236, 33%, 92%);
				$Dark-Grayish-Blue: hsl(234, 11%, 52%);
				$Darker-Grayish-Blue: hsl(233, 14%, 35%);
				$Darker-Grayish-Blue-hover: hsl(237, 14%, 26%);

				//	Typography

				//	Body Copy
				$Font-Size: 18px;

				//	Font

				$Font-Family: 'Josefin Sans', sans-serif;

				$Regular-Weight: 400;
				$Bold-Weight: 700;

				`,
			},
		},
	},
});
*/

export default defineConfig(({ command, mode }) => {
	if (command === "serve") {
		console.info("COMMAND SERVE >> ::", command);
		return {
			// dev specific config
			base: "/",
			plugins: [vue()],
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
