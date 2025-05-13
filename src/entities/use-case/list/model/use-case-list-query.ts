import { client, USE_CASE_LIST_QUERYResult } from '@/shared/sanity'
import { groq } from 'next-sanity'

const USE_CASE_LIST_QUERY = groq`
*[_type == "use-case"] {
    _id,
    title,
    "slug": slug.current,
    description,
    publishedAt,
    "cover": cover.asset -> url
} | order(publishedAt desc)
`

export const fetchUseCaseListQuery = () => client.fetch<USE_CASE_LIST_QUERYResult>(USE_CASE_LIST_QUERY)
