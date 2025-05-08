import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './src/shared/sanity/schema/index'
import { projectId, dataset } from './src/shared/sanity/env'
import { structure } from './src/shared/sanity/structure'

const creatableDocuments = ['use-case', 'guide']
const singletonDocuments = ['home', 'settings']

export default defineConfig({
    name: 'default',
    title: 'Solana SAS',

    projectId,
    dataset,

    plugins: [structureTool({ structure }), visionTool()],

    schema: {
        types: schemaTypes,
    },

    document: {
        newDocumentOptions: doc => doc.filter(x => creatableDocuments.includes(x.templateId)),
        actions: (actions, { schemaType }) => {
            if (singletonDocuments.includes(schemaType))
                return actions.filter(({ action }) => action !== 'delete' && action !== 'duplicate' && action !== 'unpublish')

            return actions
        },
    },
})
