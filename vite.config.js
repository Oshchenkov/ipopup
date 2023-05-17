import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig(() => {
    return {
        build: {
            lib: {
                // Could also be a dictionary or array of multiple entry points
                entry: resolve(__dirname, 'src/index.ts'),
                name: 'IPopup',
                // the proper extensions will be added
                fileName: 'i-popup',
                formats: ['es', 'umd', 'cjs']
            },
            rollupOptions: {
                // make sure to externalize deps that shouldn't be bundled
                // into your library
                output: {
                    // Provide global variables to use in the UMD build
                    // for externalized deps
                    globals: {},
                },
            },
        },
        plugins: [dts({
            outputDir: "dist/types"
        })],
    };
});