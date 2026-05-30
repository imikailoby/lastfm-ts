import type { RollupOptions } from 'rollup';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

const config: RollupOptions[] = [
    {
        input: 'src/index.ts',
        output: {
            file: 'dist/index.min.js',
            format: 'cjs',
            sourcemap: false,
        },
        plugins: [
            typescript({
                declaration: false,
                declarationMap: false,
            }),
            terser({
                ecma: 2020,
                mangle: { toplevel: true },
                compress: {
                    module: true,
                    toplevel: true,
                    unsafe_arrows: true,
                    drop_console: true,
                    drop_debugger: true,
                },
                output: { quote_style: 1 },
            }),
        ],
    },
    {
        input: 'src/index.ts',
        output: {
            file: 'dist/index.min.d.ts',
            format: 'es',
        },
        plugins: [dts()],
    },
];

export default config;
