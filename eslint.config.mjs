import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: [
      'next/core-web-vitals', 
      'next/typescript',
    ],
    rules: {
      'no-console': 1,
      '@typescript-eslint/no-unused-vars': 1,
      '@typescript-eslint/no-empty-object-type': 1,
      '@typescript-eslint/no-explicit-any': 1,
      'prefer-const': 1
    },
  }),
];

export default eslintConfig;