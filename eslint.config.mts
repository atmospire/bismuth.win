import { FlatCompat } from "@eslint/eslintrc";
import typescriptEslintEslintPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettier from "eslint-plugin-prettier";

// import.meta.dirname is available after Node.js v20.11.0
const compat = new FlatCompat({ baseDirectory: import.meta.dirname });

export default [
    ...compat.extends("next", "next/core-web-vitals", "prettier"),
    {
        plugins: {
            prettier,
        },
        rules: {
            "prettier/prettier": "error",
            camelcase: "off",
            "import/prefer-default-export": "off",
            "react/no-unescaped-entities": "off",
            "@next/next/no-page-custom-font": "off",
        },
        ignores: ["node_modules", "src/types/openapi.d.ts", "src/env.mjs", ".next", "src/api/openapi.ts"],
    },
    ...compat.extends("plugin:@typescript-eslint/recommended", "prettier").map((config) => ({
        ...config,
        files: ["**/*.+(ts|tsx)"],
    })),
    {
        files: ["**/*.+(ts|tsx)"],
        plugins: {
            "@typescript-eslint": typescriptEslintEslintPlugin,
        },
        languageOptions: {
            parser: tsParser,
        },
        ignores: ["node_modules", "src/api/openapi.ts", "src/env.mjs", ".next", "@types"],
        rules: {
            curly: ["error", "all"],
            "@typescript-eslint/explicit-function-return-type": "off",
            "@typescript-eslint/no-confusing-void-expression": "off",
            "react/react-in-jsx-scope": "off",
            "@typescript-eslint/no-for-in-array": "off",
            "@typescript-eslint/no-throw-literal": "off",
            "@typescript-eslint/strict-boolean-expressions": "off",
            "@typescript-eslint/no-dynamic-delete": "off",
            "@typescript-eslint/restrict-plus-operands": "off",
            "@typescript-eslint/restrict-template-expressions": "off",
            "@typescript-eslint/no-floating-promises": "off",
            "@typescript-eslint/triple-slash-reference": "off",
        },
    },
];
