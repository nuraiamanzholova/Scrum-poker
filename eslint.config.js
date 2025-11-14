import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [{
  ignores: ["node_modules/**",  "out/**", "build/**", "bin/**"]
}, {
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "react/no-unescaped-entities": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-unused-vars": "off"
  },
}];

export default eslintConfig;
