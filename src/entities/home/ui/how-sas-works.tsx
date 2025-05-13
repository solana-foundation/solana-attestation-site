import { HOME_QUERYResult } from '@/shared/sanity'
import { Section } from '@/entities/sanity/section'
import { Tree } from '@/shared/ui/tree'
import { ExtractElementByType } from '@/shared/utils/types'
import { FC } from 'react'

type Content = ExtractElementByType<HOME_QUERYResult, 'steps'>

export const isHowSasWorksBlock = (value: unknown): value is Content => !!value && typeof value === 'object' && '_type' in value && value._type === 'steps'

export const HowSasWorks: FC<{ content: Content }> = ({ content }) => (
    <Section content={content}>
        <Tree
            items={
                content?.content?.map(item => ({
                    title: item.title || '',
                    description: item.description || '',
                })) ?? []
            }
        />
    </Section>
)
