import { BOTTOM_NAVIGATION_QUERYResult, client } from '@/shared/sanity'
import { groq } from 'next-sanity'

const linkProjection = `{
    _type,
    ...select(
      mode == "external" => {
        "mode": "external",
        url
      },
      mode == "guide-list" => {
        "mode": "guide-list",
      },
      mode == "guide" => {
        "mode": "guide",
        guide -> {
          _id,
          _type,
          title,
          "slug": slug.current
        }
      },
      mode == "home" => {
        "mode": "home",
      },
      mode == "use-case-list" => {
        "mode": "use-case-list",
      },
      mode == "use-case" => {
        "mode": "use-case",
        useCase -> {
          _id,
          title,
          "slug": slug.current
        }
      }
    )
}`

const BOTTOM_NAVIGATION_QUERY = groq`
*[_id == "settings"][0]{
  bottomNavigation {
    groups[] {
      _key,
      _type,
      title,
      items[] {
        _key,
        _type,
        title,
        newWindow,
        link ${linkProjection}
      }
    }
  }
}.bottomNavigation.groups
`

export const fetchBottomNavigationQuery = () => client.fetch<BOTTOM_NAVIGATION_QUERYResult>(BOTTOM_NAVIGATION_QUERY)
