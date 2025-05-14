import { client, GUIDE_QUERYResult } from '@/shared/sanity'
import { groq } from 'next-sanity'

const GUIDE_QUERY = groq`
*[_type == "guide" && slug.current == $slug][0] {
  _id,
  _type,
  title,
  description,
  publishedAt,
  content,
  related[] -> {
    _id,
    _type,
    title,
    "slug": slug.current,
    description,
    publishedAt,
    "cover": cover.asset -> url

  }
}
`

export const fetchGuideQuery = (slug: string) => client.fetch<GUIDE_QUERYResult>(GUIDE_QUERY, { slug })
