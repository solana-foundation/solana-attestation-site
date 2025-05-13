import { HOME_QUERYResult } from '@/shared/sanity'
import { List, ListItem } from '@/shared/ui/list'
import { Section } from '@/entities/sanity/section'
import { ExtractElementByType } from '@/shared/utils/types'
import { FC } from 'react'
import { fetchLatestGuidesQuery } from '../model/guides-query'

type Content = ExtractElementByType<HOME_QUERYResult, 'guides'>

export const isGuidesBlock = (value: unknown): value is Content => !!value && typeof value === 'object' && '_type' in value && value._type === 'guides'

export const Guides: FC<{ content: Content }> = ({ content }) => (
    <Section content={content}>
        {content.mode === 'latest' && <GuidesLatest amount={content.amount ?? 0} />}
        {content.mode === 'specific' && <GuidesList items={content.references} />}
    </Section>
)

const GuidesLatest: FC<{ amount: number }> = async ({ amount }) => {
    const items = await fetchLatestGuidesQuery(amount)
    return <GuidesList items={items} />
}

const GuidesList: FC<{
    items:
        | {
              _id: string
              title: string | null
              description: string | null
              slug: string | null
              publishedAt: string | null
              cover: string | null
          }[]
        | null
}> = ({ items: references }) => (
    <List>
        {references?.map(item => (
            <ListItem
                key={item._id}
                date={new Date(item.publishedAt ?? '')}
                cover={item.cover ?? '/bg1.png'}
                title={item.title ?? ''}
                description={item.description ?? ''}
                href={`/guide/${item.slug ?? ''}`}
            />
        ))}
    </List>
)
