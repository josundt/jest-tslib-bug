export default {
    moduleNameMapper: {
        "^(\\.{1,2}/.*)\\.js$": "$1",
    },
    transform: {
        "^.+\\.tsx?$": [
            "ts-jest",
            {
                tsconfig: "tsconfig.json",
                useESM: true,
            },
        ],
    },
    extensionsToTreatAsEsm: [".ts"],

    // Notice that the problem disappears when setting to "node"
    testEnvironment: "jsdom",

    // Notice that the problem disappears when using custon enhanced-resolve based resolver
    // resolver: "./jest.enhanced-resolver.cjs",
};
