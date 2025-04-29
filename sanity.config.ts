import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './src/shared/sanity/schema/index'
import { projectId, dataset } from './src/shared/sanity/env'

export default defineConfig({
    name: 'default',
    title: 'Solana SAS',

    projectId,
    dataset,

    plugins: [structureTool(), visionTool()],

    schema: {
        types: schemaTypes,
    },
})
