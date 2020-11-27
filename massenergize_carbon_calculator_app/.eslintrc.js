module.exports = {
  plugins: [
    // "html",
    "prettier",
  ],
  extends: [ "airbnb", "airbnb/hooks", "prettier", "prettier/react"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 8,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      impliedStrict: true,
      classes: true
    }
  },
  env: {
    browser: true,
    node: true,
    jquery: true
    // ignore jest globals
    // jest: true,
    // "jest/globals": true
  },
  rules: {
    "no-debugger": 0,
    "no-alert": 0,
    "no-await-in-loop": 0,
    "no-return-assign": ["error", "except-parens"],
    "no-restricted-syntax": [
      2,
      "ForInStatement",
      "LabeledStatement",
      "WithStatement"
    ],
    "no-unused-vars": [
      "error",
      {
        ignoreSiblings: true,
        argsIgnorePattern: "res|next|^err"
      }
    ],
    "prefer-const": [
      "error",
      {
        destructuring: "all"
      }
    ],
    "arrow-body-style": [2, "as-needed"],
    "no-unused-expressions": [
      1,
      {
        allowTaggedTemplates: true
      }
    ],
    "no-param-reassign": [
      2,
      {
        props: false
      }
    ],
    "no-console": 0,
    "import": 0,
    "func-names": 0,
    "space-before-function-paren": 0,
    "comma-dangle": 0,
    "max-len": 0,
    "no-underscore-dangle": 0,
    "consistent-return": 0,
    radix: 0,
    "no-shadow": [
      2,
      {
        hoist: "all",
        allow: ["resolve", "reject", "done", "next", "err", "error"]
      }
    ],
    quotes: [
      2,
      "single",
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    "import/prefer-default-export": 0,
    "import/extensions": 0,
    "import/no-extraneous-dependencies": ["error", { packageDir: "./" }],
    "react/jsx-props-no-spreading":0,
    "react/display-name": 1,
    "react/no-array-index-key": 0,
    "react/react-in-jsx-scope": 0,
    "react/prefer-stateless-function": 0,
    "react/forbid-prop-types": 0,
    "react/no-unescaped-entities": 0,
    "react/require-default-props": 0,
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"]
      }
    ],
    "prettier/prettier": [
      "error",
      {
        trailingComma: "es5",
        singleQuote: true,
        printWidth: 80,
        endOfLine: "auto"
      }
    ],
    "jsx-a11y/accessible-emoji": 0,
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/anchor-is-valid": [
      "warn",
      {
        aspects: ["invalidHref"]
      }
    ],
    // "jest/no-disabled-tests": "warn",
    // "jest/no-focused-tests": "error",
    // "jest/no-identical-title": "error",
    // "jest/prefer-to-have-length": "warn",
    // "jest/valid-expect": "error",
  }
};
