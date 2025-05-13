import { FC } from 'react'
import { Hero as HeroBase } from '@/shared/ui/hero'
import { ExtractElementByType } from '@/shared/utils/types'
import { HOME_QUERYResult } from '@/shared/sanity'
import { ButtonLink } from '@/entities/sanity/button-link'

type Content = ExtractElementByType<HOME_QUERYResult, 'hero'>

export const isHeroBlock = (value: unknown): value is Content => !!value && typeof value === 'object' && '_type' in value && value._type === 'hero'

export const Hero: FC<{ content: Content }> = ({ content }) => (
    <HeroBase title={content.title ?? ''} subTitle={content.content ?? ''}>
        {content.links?.map(link => <ButtonLink key={link._key} content={link} />)}
    </HeroBase>
)
