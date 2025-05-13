import { client, TOP_NAVIGATION_QUERYResult } from '@/shared/sanity'
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

const buttonLinkProjection = `{
  _key,
  _type,
  title,
  url ${linkProjection},
  variant,
  icon,
  newWindow
}`

const TOP_NAVIGATION_QUERY = groq`
*[_id == "settings"][0]{
  topNavigation {
    aside[0] ${buttonLinkProjection},
    items[] {
      _key,
      _type,
      title,
      link ${linkProjection},
      newWindow
    }
  }
}.topNavigation
`

export const fetchTopNavigationQuery = () => client.fetch<TOP_NAVIGATION_QUERYResult>(TOP_NAVIGATION_QUERY)
