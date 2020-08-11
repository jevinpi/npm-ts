import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
import json from 'rollup-plugin-json';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';
import typescript from 'rollup-plugin-typescript2';
import pkg from '../../package.json';

const { version, name, author } = pkg;

const banner = `/*!
* ${name} v${version}
* (c) ${new Date().getFullYear()} ${author}
*/`;

export default [
    {
        input: 'src/index.ts',
        onwarn: function (warning) {
            if (warning.code === 'THIS_IS_UNDEFINED') {
                return;
            }
            console.error(warning.message);
        },
        plugins: [
            typescript(),
            commonjs({
                // polyfill async/await
                'node_modules/@babel/runtime/helpers/asyncToGenerator.js': ['default']
            }),
            resolve({
                preferBuiltins: true,
                mainFields: false,
            }),
            babel({
                babelrc: false,
                "presets": [
                    ["env", {
                        "modules": false,
                        "targets": {
                            "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
                        }
                    }],
                    "stage-2"
                ],
                "plugins": ["transform-runtime", "external-helpers"],  // 配置runtime，不设置会报错
                exclude: 'node_modules/**',
                runtimeHelpers: true,
            }),
            // terser(),
            uglify(),
            globals(),
            builtins(),
            json({
                include: 'node_modules/**'
            })
        ],
        output: {
            file: `lib/@ascs/packages/index.js`,
            format: 'umd',
            name: `index`,
            globals: {
                'axios': 'axios',
            },
            banner,
        },
        external: ['axios'] // 外部依赖包
    },
];