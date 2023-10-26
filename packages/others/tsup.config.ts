import {defineConfig} from 'tsup';

export default defineConfig({
  splitting: true,
  treeshake: true,
  external: ['react', 'react-dom'],
  clean: true, // clean up the dist folder
  dts: true, // generate dts files
  format: ['esm'], // generate cjs and esm files
  minify: true,
  sourcemap: true,
  bundle: true,
  skipNodeModulesBundle: true,
  watch: false,
  target: 'es2022',
  outDir: 'dist',
  entry: ['src/**/*.ts'], //include all files under src
});