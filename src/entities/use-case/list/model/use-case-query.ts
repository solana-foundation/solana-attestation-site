import { client, USE_CASE_QUERYResult } from '@/shared/sanity'
import { groq } from 'next-sanity'

const USE_CASE_QUERY = groq`
*[_type == "use-case" && slug.current == $slug][0] {
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

export const fetchUseCaseQuery = (slug: string) => client.fetch<USE_CASE_QUERYResult>(USE_CASE_QUERY, { slug })
