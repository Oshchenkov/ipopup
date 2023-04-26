import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig(() => {
    const dir = resolve(__dirname, 'counter.js');
    console.log("-> dir", dir);
    return {
        build: {
            lib: {
                // Could also be a dictionary or array of multiple entry points
                entry: resolve(__dirname, 'src/counter.ts'),
                name: 'MyLib',
                // the proper extensions will be added
                fileName: 'my-lib',
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
    };
});