export const themeName: string = "theme-todo";
export const themeDark: string = "dark";
export const themeLight: string = "light";

export const storedTheme =
	localStorage.getItem(themeName) ||
	(window.matchMedia("(prefers-color-scheme: dark)").matches
		? themeDark
		: themeLight);

console.warn("storedTheme::>>", storedTheme);

export function setTheme(theme: string) {
	const themeToogle = document.getElementById("theme-toggle");

	switch (theme) {
		case themeDark:
			themeToogle?.classList.remove(
				"todo-header__theme_toggle--" + themeLight
			);
			themeToogle?.classList.add(
				"todo-header__theme_toggle--" + themeDark
			);

			break;

		case themeLight:
			themeToogle?.classList.remove(
				"todo-header__theme_toggle--" + themeDark
			);
			themeToogle?.classList.add(
				"todo-header__theme_toggle--" + themeLight
			);

			break;

		default:
			break;
	}
}

export function switchTheme() {
	const themeToogle = document.getElementById("theme-toggle");
	const currentTheme = document.documentElement.getAttribute("data-theme");
	let targetTheme: string = themeLight;

	if (currentTheme === themeLight) {
		targetTheme = themeDark;
	}

	try {
		document.documentElement.setAttribute("data-theme", targetTheme);
		themeToogle?.classList.remove(
			"todo-header__theme_toggle--" + currentTheme
		);
		themeToogle?.classList.add("todo-header__theme_toggle--" + targetTheme);
		localStorage.setItem(themeName, targetTheme);
		console.info(" Switching Theme:", targetTheme);
	} catch (error) {
		console.error("Error Swtiching theme", error);
	}
}

// export { themeName, themeDark, themeLight, switchTheme };

// export {};
