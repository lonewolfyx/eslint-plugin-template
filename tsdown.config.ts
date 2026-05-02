import { defineConfig } from 'tsdown'

export default defineConfig({
    platform: 'node',
    dts: {
        resolver: 'tsc',
    },
    clean: true,
    sourcemap: true,
    deps: {
        neverBundle: [
            /^@typescript-eslint\//,
        ],
    },
    treeshake: {
        moduleSideEffects: false,
    },
})
