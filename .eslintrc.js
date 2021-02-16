/*
 * Helpful link for getting ESLint and Prettier to play nice:
 * https://dev.to/gsarciotto/migrating-and-configuring-eslint-with-angular-11-3fg1
 */
module.exports = {
  root: true,
  overrides: [
    {
      files: ["*.ts"],
      parserOptions: {
        project: [
          "tsconfig.app.json",
          "tsconfig.spec.json",
          "e2e/tsconfig.json",
        ],
        createDefaultProgram: true,
      },
      extends: [
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates",
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended",
      ],
      rules: {
        "@angular-eslint/component-selector": [
          "error",
          {
            type: "element",
            prefix: "siltstride",
            style: "kebab-case",
          },
        ],
        "@angular-eslint/directive-selector": [
          "error",
          {
            type: "attribute",
            prefix: "siltstride",
            style: "camelCase",
          },
        ],
      },
    },
    {
      files: ["*.html"],
      extends: [
        "plugin:@angular-eslint/template/recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended",
      ],
    },
  ],
};
