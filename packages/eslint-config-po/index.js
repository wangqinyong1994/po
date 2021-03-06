/*
 * @Author: ngwang
 * @Date: 2021-04-07 09:48:34
 * @LastEditors: ngwang
 * @LastEditTime: 2021-04-08 10:43:32
 */
module.exports = {
  root: true,
  extends: ["airbnb", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "react-hooks"],
  rules: {
    // 通用配置override
    quotes: ["error", "single"],
    "arrow-parens": "off",
    "object-curly-newline": [
      "error",
      {
        ObjectExpression: "always",
        ObjectPattern: { multiline: true },
        ImportDeclaration: "never",
        ExportDeclaration: { multiline: true, minProperties: 3 },
      },
    ],
    // react插件override
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/react-in-jsx-scope": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/self-closing-comp": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    // import插件override
    "import/prefer-default-export": "off",
  },
};
