import { FC } from 'react'
import { PageHeader as PageHeaderBase } from '@/shared/ui/page-header'
import { fetchTopNavigationQuery } from '../model/top-navigation-query'
import { ButtonLink } from '@/entities/sanity/button-link'
import { resolveLink } from '@/entities/sanity/link'

export const PageHeader: FC = async () => {
    const navigation = await fetchTopNavigationQuery()

    return (
        <PageHeaderBase
            navigation={navigation?.items?.map(item => ({
                title: item.title || '',
                href: resolveLink(item.link) || '',
                newWindow: item.newWindow || false,
            }))}
            aside={navigation?.aside ? <ButtonLink content={navigation?.aside} /> : undefined}
        />
    )
}
