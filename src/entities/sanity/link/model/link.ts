export const resolveLink = (
    link:
        | {
              mode: 'guide'
              guide: {
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
                  slug: string | null
              } | null
          }
        | null
): string | undefined => {
    if (!link) return undefined

    switch (link.mode) {
        case 'external':
            return link.url ?? undefined
        case 'home':
            return '/'
        case 'guide-list':
            return '/guide'
        case 'guide':
            return link.guide?.slug ? `/guide/${link.guide.slug}` : undefined
        case 'use-case-list':
            return '/use-case'
        case 'use-case':
            return link.useCase?.slug ? `/guide/${link.useCase.slug}` : undefined
    }
}
