// jest.config.js
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFiles: ['./jest.setup.tsx'],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.tsx", "ts-jest-mock-import-meta"],
  moduleNameMapper: {
    "^.+\\.module\\.(css|scss)$": "identity-obj-proxy",
    "\\.(gif|jpg|jpeg|png|svg)$": "jest-transform-stub",
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest", // Transform TypeScript files
    "\\.(jpg|jpeg|png|gif|webp|ttf|eot|woff|woff2|mp4|mkv)$":
      "jest-transform-stub",
  },
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  // ...existing code...
moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
// ...existing code...
};

