import { defineField, defineType } from 'sanity'

export const useCase = defineType({
    name: 'use-case',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Title',
            validation: rule => rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: rule => rule.required(),
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
            validation: rule => rule.required(),
        }),
        defineField({
            name: 'description',
            type: 'text',
            title: 'Description',
            validation: rule => rule.required(),
        }),
        defineField({
            name: 'cover',
            type: 'image',
            title: 'Cover',
        }),
        defineField({
            name: 'content',
            type: 'rich-text',
            title: 'Content',
            validation: rule => rule.required(),
        }),
        defineField({
            name: 'related',
            type: 'array',
            title: 'Related Content',
            of: [{ type: 'reference', to: { type: 'use-case' } }],
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'description',
            media: 'cover',
        },
    },
})
