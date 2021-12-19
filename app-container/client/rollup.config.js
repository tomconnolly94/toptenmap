import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import postcss from 'rollup-plugin-postcss'
import typescript from 'rollup-plugin-typescript2';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import image from 'rollup-plugin-img';
import { isBundle } from 'typescript';

let distPath = "dist";
let mode = "development";

export default {
   input: 'src/index.tsx',
   output: {
      file: 'public/index.js',
      format: 'iife',
   },
   plugins: [
      commonjs({
         include: [
            'node_modules/**',
         ],
         exclude: [
            'node_modules/process-es6/**',
         ],
      }),
      nodePolyfills(),
      resolve({
        browser: true,
      }),
      babel({
         exclude: 'node_modules/**'
      }),
      postcss({
         autoModules: true
      }),
      typescript({
          typescript: require('typescript')
      }),
      image({
         output: `${distPath}/images`, // default the root
         extensions: /\.(png|jpg|jpeg|gif|svg)$/, // support png|jpg|jpeg|gif|svg, and it's alse the default value
         limit: 8192,  // default 8192(8k)
         exclude: 'node_modules/**'
      }),
      replace({
         preventAssignment: true,
         'process.browser': true,
         'process.env.NODE_ENV': JSON.stringify(mode)
      }),
      livereload('public'),
      serve({
         contentBase: 'public',
         port: 3000,
         open: true,
      }), // index.html should be in root of project
   ]
}
