import { FC, PropsWithChildren } from 'react'
import { Section as SectionBase } from '@/shared/ui/section'
import { resolveLink } from '../../link'

type SectionProps = PropsWithChildren<{
    content: {
        title: string | null
        docs: {
            title: string | null
            link:
                | {
                      mode: 'guide'
                      guide: {
                          title: string | null
                          slug: string | null
                      } | null
                  }
                | {
                      mode: 'external'
                      url: string | null
                  }
                | {
                      mode: 'guide-list'
                  }
                | {
                      mode: 'home'
                  }
                | {
                      mode: 'use-case-list'
                  }
                | {
                      mode: 'use-case'
                      useCase: {
                          title: string | null
                          slug: string | null
                      } | null
                  }
                | null
        }
    }
    className?: string
}>

export const Section: FC<SectionProps> = ({ children, content, className }) => (
    <SectionBase title={content?.title ?? ''} linkTitle={content?.docs?.title ?? undefined} linkHref={resolveLink(content?.docs?.link)} className={className}>
        {children}
    </SectionBase>
)
