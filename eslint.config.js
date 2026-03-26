import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettier from "eslint-plugin-prettier";

/** @type {import("eslint").Linter.FlatConfig[]} */
const config = [
  {
    ignores: [
      "**/node_modules/**",
      "**/.next/**",
      "**/dist/**",
      "**/build/**",
    ],
  },
  {
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2020,
      sourceType: "module",
    },
    plugins: {
      "@typescript-eslint": tseslint,
      prettier,
    },
    rules: {
      "prettier/prettier": "error",
    },
  },
];

export default config;