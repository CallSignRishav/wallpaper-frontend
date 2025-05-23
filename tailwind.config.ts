import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|card|divider|image|input|modal|navbar|skeleton|tabs|popover|ripple|spinner).js"
  ],

  theme: {
    extend: {},
  },

  darkMode: "selector",

  plugins: [nextui()],
};
export default config;
