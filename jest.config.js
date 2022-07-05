module.exports = {
  testEnvironment: "node",
  testMatch: ["<rootDir>/app/**/*.test.ts"],
  transform: {
    "^.+\\.tsx?$": [
      "esbuild-jest",
      {
        // This is needed for inline snapshots to work
        // See: https://github.com/aelbore/esbuild-jest#setting-up-jest-config-file-with-transformoptions
        sourcemap: true,
        loaders: {
          ".test.ts": "tsx",
        },
      },
    ],
  },
  moduleNameMapper: {
    "^~/(.*)$": "<rootDir>/app/$1",
  },
};
