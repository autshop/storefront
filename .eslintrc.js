module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended"
    ],
    plugins: ["react", "@typescript-eslint", "prettier"],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        }
    },
    ignorePatterns: ["*.scss", "*.svg", "*.woff*", "*.ttf"],
    rules: {
        "@typescript-eslint/prefer-interface": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-inferrable-types": "off",
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/camelcase": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/ban-types": [
            "error",
            {
                types: {
                    String: {
                        message: "Use string instead",
                        fixWith: "string"
                    },
                    Boolean: {
                        message: "Use boolean instead",
                        fixWith: "boolean"
                    },
                    Number: {
                        message: "Use number instead",
                        fixWith: "number"
                    },
                    Symbol: {
                        message: "Use symbol instead",
                        fixWith: "symbol"
                    },
                    Function: {
                        message: [
                            "The `Function` type accepts any function-like value.",
                            "It provides no type safety when calling the function, which can be a common source of bugs.",
                            "It also accepts things like class declarations, which will throw at runtime as they will not be called with `new`.",
                            "If you are expecting the function to accept certain arguments, you should explicitly define the function shape."
                        ].join("\n")
                    },
                    Object: {
                        message: [
                            'The `Object` type actually means "any non-nullish value", so it is marginally better than `unknown`.',
                            '- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.',
                            '- If you want a type meaning "any value", you probably want `unknown` instead.'
                        ].join("\n")
                    },
                    object: {
                        message: [
                            "The `object` type is currently hard to use ([see this issue](https://github.com/microsoft/TypeScript/issues/21732)).",
                            "Consider using `Record<string, unknown>` instead, as it allows you to more easily inspect and use the keys."
                        ].join("\n")
                    }
                },
                extendDefaults: false
            }
        ]
    },
    settings: {
        react: {
            pragma: "React",
            version: "detect"
        }
    }
};
