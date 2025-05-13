import { HOME_QUERYResult } from '@/shared/sanity'
import { Code } from '@/shared/ui/code'
import { Section } from '@/entities/sanity/section'
import { ExtractElementByType } from '@/shared/utils/types'
import { FC } from 'react'
import { BundledLanguage } from 'shiki'

type Content = ExtractElementByType<HOME_QUERYResult, 'code-examples'>

export const isHowToImplementBlock = (value: unknown): value is Content =>
    !!value && typeof value === 'object' && '_type' in value && value._type === 'code-examples'

export const HowToImplement: FC<{ content: Content }> = ({ content }) => (
    <Section content={content}>
        <Code
            files={
                content.content?.map(item => ({
                    name: item.name || '',
                    language: (item.type ?? 'rust') as BundledLanguage,
                    content: item.code || '',
                })) ?? []
            }
        />
    </Section>
)
