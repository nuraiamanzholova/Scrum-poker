import js from "@eslint/js";
import globals from "globals";

export default [
    {
        files: ["**/*.{js,mjs,cjs}"],
        languageOptions: {
            globals: globals.browser,
        },
        plugins: { js },
        rules: {
            "no-unused-vars": "warn",
            "no-console": "off",
        },
    },
];
