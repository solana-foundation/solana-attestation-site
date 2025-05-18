import { HOME_QUERYResult } from '@/shared/sanity'
import { Card, Cards } from '@/shared/ui/card'
import { Section } from '@/entities/sanity/section'
import { ExtractElementByType } from '@/shared/utils/types'
import { FC } from 'react'
import { fetchLatestUseCasesQuery } from '../model/use-cases-query'

type Content = ExtractElementByType<HOME_QUERYResult, 'use-cases'>

export const isUseCasesBlock = (value: unknown): value is Content => !!value && typeof value === 'object' && '_type' in value && value._type === 'use-cases'

export const UseCases: FC<{ content: Content }> = ({ content }) => (
    <Section content={content}>
        {content.mode === 'latest' && <UseCasesLatest amount={content.amount ?? 0} />}
        {content.mode === 'specific' && <UseCasesList items={content.references} />}
    </Section>
)

const UseCasesLatest: FC<{ amount: number }> = async ({ amount }) => {
    const items = await fetchLatestUseCasesQuery(amount)
    return <UseCasesList items={items} />
}

const UseCasesList: FC<{
    items:
        | {
              _id: string
              title: string | null
              description: string | null
              slug: string | null
              cover: string | null
          }[]
        | null
}> = ({ items: references }) => (
    <Cards>
        {references?.map(item => (
            <Card
                key={item._id}
                cover={item.cover ?? '/bg1.png'}
                title={item.title ?? ''}
                description={item.description ?? ''}
                href={`/use-cases/${item.slug ?? ''}`}
            />
        ))}
    </Cards>
)
