import { defineType, defineArrayMember } from 'sanity'

/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
export const richText = defineType({
    title: 'Text',
    name: 'rich-text',
    type: 'array',
    of: [
        defineArrayMember({ type: 'code-file', title: 'Code' }),
        defineArrayMember({
            type: 'image',
            options: { hotspot: true },
        }),
        defineArrayMember({
            title: 'Block',
            type: 'block',
            // Styles let you set what your user can mark up blocks with. These
            // correspond with HTML tags, but you can set any title or value
            // you want and decide how you want to deal with it where you want to
            // use your content.
            styles: [
                { title: 'Header 2', value: 'h2' },
                { title: 'Header 3', value: 'h3' },
                { title: 'Header 4', value: 'h4' },
                { title: 'Normal', value: 'normal' },
            ],
            lists: [{ title: 'Bullet', value: 'bullet' }],
            marks: {
                decorators: [
                    { title: 'Strong', value: 'strong' },
                    { title: 'Emphasis', value: 'em' },
                ],
                annotations: [
                    {
                        title: 'URL',
                        name: 'link',
                        type: 'object',
                        fields: [
                            {
                                title: 'URL',
                                name: 'href',
                                type: 'url',
                            },
                        ],
                    },
                ],
            },
        }),
    ],
})
