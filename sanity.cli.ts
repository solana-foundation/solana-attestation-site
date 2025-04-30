import { defineCliConfig } from 'sanity/cli'
import { projectId, dataset, studioHost } from './src/shared/sanity'

export default defineCliConfig({
    api: {
        projectId,
        dataset,
    },
    studioHost,
    autoUpdates: true,
    vite: {
        css: {
            postcss: {
                path: './src/shared/sanity/postcss.config.mjs',
            },
        },
    },
})
