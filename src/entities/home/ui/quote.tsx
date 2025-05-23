import { HOME_QUERYResult } from '@/shared/sanity'
import { Quote as QuoteBase } from '@/shared/ui/quote'
import { ExtractElementByType } from '@/shared/utils/types'
import { FC } from 'react'

type Content = ExtractElementByType<HOME_QUERYResult, 'quote'>

export const isQuoteBlock = (value: unknown): value is Content => !!value && typeof value === 'object' && '_type' in value && value._type === 'quote'

export const Quote: FC<{ content: Content }> = ({ content }) => (
    <QuoteBase name={content?.name || ''} image={''} quote={content?.testimonial || ''} />
)
