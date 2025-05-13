import { client, LATEST_USE_CASES_QUERYResult } from '@/shared/sanity'
import { groq } from 'next-sanity'

const LATEST_USE_CASES_QUERY = groq`
*[_type == "use-case"] {
    _id,
    title,
    "slug": slug.current,
    description,
    "cover": cover.asset -> url
} | order(publishedAt desc) [0...$limit]
`

export const fetchLatestUseCasesQuery = (limit: number) => client.fetch<LATEST_USE_CASES_QUERYResult>(LATEST_USE_CASES_QUERY, { limit })
