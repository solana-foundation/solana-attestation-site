import { List as BaseList, ListItem } from '@/shared/ui/list'
import { FC } from 'react'
import { fetchGuideListQuery } from '../model/guide-list-query'

export const List: FC = async () => {
    const list = await fetchGuideListQuery()

    return (
        <BaseList>
            {list?.map(item => (
                <ListItem
                    key={item._id}
                    date={new Date(item.publishedAt ?? '')}
                    cover={item.cover ?? '/bg1.png'}
                    title={item.title ?? ''}
                    description={item.description ?? ''}
                    href={`/guides/${item.slug ?? ''}`}
                />
            ))}
        </BaseList>
    )
}
