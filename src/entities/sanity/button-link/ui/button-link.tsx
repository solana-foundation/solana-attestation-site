import { Button } from '@/shared/ui/button'
import { FC } from 'react'
import { resolveIcon } from '@/entities/sanity/icon'
import { resolveLink } from '@/entities/sanity/link'

type ButtonLinkProps = {
    content: {
        title: string | null
        url:
            | {
                  _type: 'link'
                  mode: 'guide'
                  guide: {
                      title: string | null
                      slug: string | null
                  } | null
              }
            | {
                  _type: 'link'
                  mode: 'external'
                  url: string | null
              }
            | {
                  _type: 'link'
                  mode: 'guide-list'
              }
            | {
                  _type: 'link'
                  mode: 'home'
              }
            | {
                  _type: 'link'
                  mode: 'use-case-list'
              }
            | {
                  _type: 'link'
                  mode: 'use-case'
                  useCase: {
                      title: string | null
                      slug: string | null
                  } | null
              }
            | null
        variant: 'primary' | 'secondary' | null
        icon: 'copy' | 'documentation' | 'github' | null
        newWindow: boolean | null
    }
    fill?: boolean
}

export const ButtonLink: FC<ButtonLinkProps> = ({ content, fill }) => {
    const href = resolveLink(content.url)
    if (!content.title || !content.url || !href) return undefined

    return (
        <Button href={href} variant={content.variant || 'secondary'} fill={fill} newWindow={content.newWindow || undefined} icon={resolveIcon(content.icon)}>
            {content.title}
        </Button>
    )
}
