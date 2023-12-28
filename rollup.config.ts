import type { RollupOptions } from 'rollup';
import terser from '@rollup/plugin-terser';
import ts from 'rollup-plugin-ts';

const config: RollupOptions = {
    input: 'src/index.ts',
    output: {
        file: 'dist/index.min.js',
        format: 'cjs',
        sourcemap: false,
    },
    plugins: [
        ts({
            exclude: ['rollup.config.ts', 'jest.config.ts'],
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
};

export default config;
