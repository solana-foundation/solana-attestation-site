import { client, GUIDE_LIST_QUERYResult } from '@/shared/sanity'
import { groq } from 'next-sanity'

const GUIDE_LIST_QUERY = groq`
*[_type == "guide"] {
    _id,
    title,
    "slug": slug.current,
    description,
    publishedAt,
    "cover": cover.asset -> url
} | order(publishedAt desc)
`

export const fetchGuideListQuery = () => client.fetch<GUIDE_LIST_QUERYResult>(GUIDE_LIST_QUERY)
