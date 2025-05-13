import { FC } from 'react'
import { PageFooter as PageFooterBase } from '@/shared/ui/page-footer'
import { resolveLink } from '@/entities/sanity/link'
import { fetchBottomNavigationQuery } from '../model/bottom-navigation-query'

export const PageFooter: FC = async () => {
    const navigation = await fetchBottomNavigationQuery()

    return (
        <PageFooterBase
            navigation={
                navigation?.map(item => ({
                    title: item.title || '',
                    items:
                        item.items?.map(link => ({
                            title: link.title || '',
                            href: resolveLink(link.link) || '',
                            newWindow: link.newWindow || false,
                        })) ?? [],
                })) ?? []
            }
        />
    )
}
