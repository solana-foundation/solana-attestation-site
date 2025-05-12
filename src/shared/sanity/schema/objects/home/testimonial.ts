import { defineArrayMember, defineField, defineType } from 'sanity'

export const testimonial = defineType({
    name: 'testimonial',
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
            name: 'layout',
            type: 'string',
            title: 'Layout',
            description: 'How the item will be displayed',
            initialValue: 'small',
            options: {
                list: [
                    { title: 'Small', value: 'small' },
                    { title: 'Medium', value: 'medium' },
                    { title: 'Large', value: 'large' },
                ],
            },
            validation: rule => rule.required(),
        }),
        defineField({
            name: 'testimonial',
            type: 'text',
            title: 'Testimonial',
            description: 'Short testimonial from the client',
            placeholder: 'e.g. "Super useful tool for our team"',
            initialValue: '',
            hidden: ({ parent }) => parent?.layout !== 'medium' && parent?.layout !== 'large',
            validation: rule =>
                rule.custom((value, { parent }) => {
                    const document = parent as { layout?: string } | undefined
                    if (document?.layout !== 'medium' && document?.layout !== 'large') return true

                    return !value?.trim() ? 'Text is required' : true
                }),
        }),
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'layout',
            media: 'logo',
        },
    },
})

export const testimonials = defineType({
    name: 'testimonials',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Title',
            description: 'Section title',
            placeholder: 'e.g. "What our clients say"',
            initialValue: '',
            validation: rule => [rule.required(), rule.max(120)],
        }),
        defineField({
            name: 'docsLinkTitle',
            type: 'string',
            title: 'Documentation Link Title',
            placeholder: 'e.g. "Read more"',
            initialValue: '',
        }),
        defineField({
            name: 'docsLink',
            type: 'link',
            title: 'Documentation Link',
        }),
        defineField({
            name: 'content',
            type: 'array',
            of: [defineArrayMember({ type: 'testimonial' })],
        }),
    ],
    preview: {
        select: { title: 'title' },
        prepare: ({ title }) => ({ title: 'Testimonials', subtitle: title }),
    },
})
