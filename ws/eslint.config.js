import pkg from "eslint";
import globals from "globals";

const { defineConfig } = pkg;

export default defineConfig({
    files: ["**/*.{js,mjs,cjs}"],
    extends: ["eslint:recommended"],
    languageOptions: {
        globals: globals.browser,
        ecmaVersion: 2021,
        sourceType: "module",
    },
    rules: {
    },
});
