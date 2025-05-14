import { FC } from 'react'
import { List, ListItem } from '@/shared/ui/list'
import { Section } from '@/shared/ui/section'
import { UrlObject } from 'url'

type PageContentRelatedProps = {
    title: string
    urlPath: string
    linkHref?: string | UrlObject
    linkTitle?: string
    items: {
        _id: string
        title: string | null
        description: string | null
        slug: string | null
        publishedAt: string | null
        cover: string | null
    }[]
}

export const PageContentRelated: FC<PageContentRelatedProps> = ({ title, urlPath, linkHref, linkTitle, items: references }) => (
    <Section title={title} linkHref={linkHref} linkTitle={linkTitle} className="sm:mt-22">
        <List>
            {references.map(item => (
                <ListItem
                    key={item._id}
                    date={new Date(item.publishedAt ?? '')}
                    cover={item.cover ?? '/bg1.png'}
                    title={item.title ?? ''}
                    description={item.description ?? ''}
                    href={`/${urlPath}/${item.slug ?? ''}`}
                />
            ))}
        </List>
    </Section>
)
