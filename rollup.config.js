import { nodeResolve } from "@rollup/plugin-node-resolve";
import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";

export default {
	input: "lib/index.js",
	output: {
		file: "dist/bundle.js",
		format: "cjs"
	},
	plugins: [nodeResolve(), babel({ babelHelpers: "bundled" }), commonjs()]
};
