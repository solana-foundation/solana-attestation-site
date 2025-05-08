import { defineField, defineType } from 'sanity'

export const hero = defineType({
    name: 'hero',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Title',
            description: 'Hero section title',
            placeholder: 'e.g. "Welcome to our website"',
            initialValue: '',
            validation: rule => [rule.required(), rule.max(120)],
        }),
        defineField({
            name: 'content',
            type: 'text',
            title: 'Content',
            description: 'Hero section content',
            placeholder: 'e.g. "We are glad to have you here"',
            initialValue: '',
            validation: rule => rule.required(),
        }),
        defineField({
            name: 'links',
            type: 'array',
            of: [{ type: 'button-link' }],
            options: {
                modal: { type: 'dialog' },
            },
            validation: rule => rule.max(2),
        }),
    ],
    preview: {
        select: {
            title: 'title',
        },
        prepare: ({ title }) => ({ title: 'Hero', subtitle: title }),
    },
})
