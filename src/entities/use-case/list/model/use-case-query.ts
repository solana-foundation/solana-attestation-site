import { client, USE_CASE_QUERYResult } from '@/shared/sanity'
import { groq } from 'next-sanity'

const USE_CASE_QUERY = groq`
*[_type == "use-case" && slug.current == $slug][0]
`

export const fetchUseCaseQuery = (slug: string) => client.fetch<USE_CASE_QUERYResult>(USE_CASE_QUERY, { slug })
