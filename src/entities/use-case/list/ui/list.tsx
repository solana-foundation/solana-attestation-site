import { Card, Cards } from '@/shared/ui/card'
import { FC } from 'react'
import { fetchUseCaseListQuery } from '../model/use-case-list-query'

export const List: FC = async () => {
    const list = await fetchUseCaseListQuery()

    return (
        <Cards layout="column2">
            {list?.map(item => (
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
}
