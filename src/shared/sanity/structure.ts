import { CogIcon, HomeIcon, ListIcon } from '@sanity/icons'
import { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = S =>
    S.list()
        .id('root')
        .title('Content')

        .items([
            S.listItem()
                // Home page
                .schemaType('home')
                .title('Home')
                .icon(HomeIcon)
                .child(
                    S.editor()
                        // Home page
                        .title('Home')
                        .schemaType('home')
                        .documentId('home')
                ),

            S.divider(),

            S.documentTypeListItem('guide').title('Guides').icon(ListIcon),
            S.documentTypeListItem('use-case').title('Use Cases').icon(ListIcon),

            S.divider(),

            S.listItem()
                // Settings page
                .schemaType('settings')
                .title('Settings')
                .icon(CogIcon)
                .child(
                    S.editor()
                        // Settings page
                        .title('Settings')
                        .schemaType('settings')
                        .documentId('settings')
                ),
        ])
// .initialValueTemplates([{ schemaType: 'home', id: 'home', templateId: 'home-initial', title: 'Home', type: 'initialValueTemplateItem' }])
