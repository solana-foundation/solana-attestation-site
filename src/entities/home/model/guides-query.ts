import { client, LATEST_GUIDES_QUERYResult } from '@/shared/sanity'
import { groq } from 'next-sanity'

const LATEST_GUIDES_QUERY = groq`
*[_type == "guide"] {
    _id,
    title,
    "slug": slug.current,
    description,
    publishedAt,
    "cover": cover.asset -> url
} | order(publishedAt desc) [0...$limit]
`

export const fetchLatestGuidesQuery = (limit: number) => client.fetch<LATEST_GUIDES_QUERYResult>(LATEST_GUIDES_QUERY, { limit })
