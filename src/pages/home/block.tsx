import { Guides, isGuidesBlock } from '@/entities/home/ui/guides'
import { Hero, isHeroBlock } from '@/entities/home/ui/hero'
import { HowSasWorks, isHowSasWorksBlock } from '@/entities/home/ui/how-sas-works'
import { HowToImplement, isHowToImplementBlock } from '@/entities/home/ui/how-to-implement'
import { Quote, isQuoteBlock } from '@/entities/home/ui/quote'
import { UseCases, isUseCasesBlock } from '@/entities/home/ui/use-cases'
import { Using, isUsingBlock } from '@/entities/home/ui/using'
import { Code } from '@/shared/ui/code'
import { Section } from '@/shared/ui/section'
import { FC } from 'react'

type BlockProps = {
    content: unknown
}

export const Block: FC<BlockProps> = ({ content }) => {
    if (isHeroBlock(content)) return <Hero content={content} />
    if (isUsingBlock(content)) return <Using content={content} />
    if (isHowSasWorksBlock(content)) return <HowSasWorks content={content} />
    if (isQuoteBlock(content)) return <Quote content={content} />
    if (isHowToImplementBlock(content)) return <HowToImplement content={content} />
    if (isUseCasesBlock(content)) return <UseCases content={content} />
    if (isGuidesBlock(content)) return <Guides content={content} />

    return (
        <Section title={!!content && typeof content === 'object' && '_type' in content ? `Unknown Block: ${content._type}` : 'Unknown Block'}>
            <Code files={[{ name: 'schema.json', content: JSON.stringify(content, null, 2), language: 'json' }]} />
        </Section>
    )
}
