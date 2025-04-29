import { defineCliConfig } from 'sanity/cli'
import { projectId, dataset } from './src/shared/sanity'

export default defineCliConfig({
    api: {
        projectId,
        dataset,
    },
    autoUpdates: true,
    vite: {
        css: {
            postcss: {
                path: './src/shared/sanity/postcss.config.mjs',
            },
        },
    },
})
