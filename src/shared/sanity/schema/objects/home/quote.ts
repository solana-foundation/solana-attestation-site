import { defineField, defineType } from 'sanity'

export const quote = defineType({
    name: 'quote',
    type: 'object',
    fields: [
        defineField({
            name: 'logo',
            type: 'image',
            validation: rule => rule.required(),
        }),
        defineField({
            name: 'name',
            type: 'string',
            title: 'Company Name',
            placeholder: 'e.g. "Autodesk"',
            initialValue: '',
            validation: rule => [rule.required(), rule.max(120)],
        }),
        defineField({
            name: 'testimonial',
            type: 'text',
            title: 'Testimonial',
            description: 'Short testimonial from the client',
            placeholder: 'e.g. "Super useful tool for our team"',
            initialValue: '',
            validation: rule => rule.required(),
        }),
    ],
    preview: {
        select: {
            title: 'name',
        },
        prepare: ({ title }) => ({ title: 'Quote', subtitle: title }),
    },
})
