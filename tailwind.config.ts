import { AppColorsTheme } from "./src/themes/index";
import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				primary: AppColorsTheme.PRIMARY,
				textPrimary: AppColorsTheme.TEXT_PRIMARY,
				textSecondary: AppColorsTheme.TEXT_SECONDARY,
				backgroundPrimary: AppColorsTheme.BACKGROUND_PRIMARY,
			},
		},
	},
	plugins: [],
};
export default config;
