export const themeName: string = "theme-todo";
export const themeDark: string = "theme-todo-dark";
export const themeLight: string = "theme-todo-light";

export const storedTheme =
	localStorage.getItem(themeName) ||
	(window.matchMedia("(prefers-color-scheme: dark)").matches
		? themeDark
		: themeLight);

export function switchTheme() {
	const currentTheme = document.documentElement.getAttribute("data-theme");
	let targetTheme: string = themeLight;

	if (currentTheme === themeLight) {
		targetTheme = themeDark;
	}

	try {
		document.documentElement.setAttribute("data-theme", targetTheme);
		localStorage.setItem("theme", targetTheme);
		console.info(" Switching Theme:", targetTheme);
	} catch (error) {
		console.error("Error Swtiching theme", error);
	}
}

// export { themeName, themeDark, themeLight, switchTheme };

// export {};
