import { FC } from 'react'
import { Using as UsingBase, UsingItem } from '@/shared/ui/using'
import { ExtractElementByType } from '@/shared/utils/types'
import { HOME_QUERYResult } from '@/shared/sanity'
import { Section } from '@/entities/sanity/section'

type Content = ExtractElementByType<HOME_QUERYResult, 'testimonials'>

export const isUsingBlock = (value: unknown): value is Content => !!value && typeof value === 'object' && '_type' in value && value._type === 'testimonials'

export const Using: FC<{ content: Content }> = ({ content }) => (
    <Section content={content}>
        <UsingBase>
            {content?.content
                ?.filter(item => !!item.name && !!item.logo)
                .map(item => (
                    <UsingItem
                        key={item._key}
                        name={item.name!}
                        image={item.logo!}
                        size={item.layout === 'small' ? 'default' : item.layout}
                        quote={item.layout === 'medium' || item.layout === 'large' ? (item.testimonial ?? undefined) : undefined}
                    />
                ))}
        </UsingBase>
    </Section>
)
