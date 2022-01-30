import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  input: "./src/components/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
      sourcemap: true,
      strict: false,
    },
  ],
  plugins: [
    typescript({
      objectHashIgnoreUnknownHack: true,
      exclude: [
        "src/stories",
        "src/*.stories.tsx",
        "src/setupTest.ts",
        "src/reportWebVitals.ts",
        "src/*.test.tsx",
        "src/index.tsx",
        "src/App.tsx",
      ],
    }),
  ],
  external: ["react", "react-dom"],
};
