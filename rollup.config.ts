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
        terser(),
    ],
};

export default config;
