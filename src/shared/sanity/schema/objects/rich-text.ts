import { defineType, defineArrayMember } from 'sanity'

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
            styles: [
                { title: 'Normal', value: 'normal' },
                { title: 'Header 2', value: 'h2' },
                { title: 'Header 3', value: 'h3' },
                { title: 'Header 4', value: 'h4' },
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
