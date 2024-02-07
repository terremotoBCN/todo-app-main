export const themeName: string = "todo-theme";
export const themeDark: string = "dark";
export const themeLight: string = "light";

export const storedTheme =
	localStorage.getItem(themeName) ||
	(window.matchMedia("(prefers-color-scheme: dark)").matches
		? themeDark
		: themeLight);

console.info(" :arrow_lower_right:  storedTheme::>>", storedTheme);

document.addEventListener("DOMContentLoaded", (event) => {
	setTheme(storedTheme);
});

export function setTheme(theme: string) {
	localStorage.setItem(themeName, theme);
	document.documentElement.setAttribute("data-theme", theme);

	const themeToogle: HTMLElement | null =
		document.getElementById("theme-toggle");

	switch (theme) {
		case themeDark:
			themeToogle?.classList.remove(
				"todo-header__theme_toggle--" + themeLight
			);
			themeToogle?.classList.add(
				"todo-header__theme_toggle--" + themeDark
			);

			console.log(themeToogle?.classList);

			break;

		case themeLight:
			themeToogle?.classList.remove(
				"todo-header__theme_toggle--" + themeDark
			);
			themeToogle?.classList.add(
				"todo-header__theme_toggle--" + themeLight
			);

			console.log(themeToogle?.classList);
			break;

		default:
			break;
	}
}

export function switchTheme(e: Event) {
	const currentTheme = localStorage.getItem(themeName);

	const targetTheme = currentTheme === themeLight ? themeDark : themeLight;

	setTheme(targetTheme);
}
