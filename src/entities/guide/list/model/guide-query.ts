import { client, GUIDE_QUERYResult } from '@/shared/sanity'
import { groq } from 'next-sanity'

const GUIDE_QUERY = groq`
*[_type == "guide" && slug.current == $slug][0]
`

export const fetchGuideQuery = (slug: string) => client.fetch<GUIDE_QUERYResult>(GUIDE_QUERY, { slug })
