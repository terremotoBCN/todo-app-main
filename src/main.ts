import { createApp } from "vue";
import App from "./App.vue";

//	theme
import { storedTheme, switchTheme } from "./ts/themes";

createApp(App).mount("#app");
if (storedTheme)
	document.documentElement.setAttribute("data-theme", storedTheme);

const toggle = document.getElementById("theme-toggle");
if (toggle) {
	toggle.addEventListener("click", switchTheme);
}
