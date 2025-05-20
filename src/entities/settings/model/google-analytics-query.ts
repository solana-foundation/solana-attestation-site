import { client, GOOGLE_ANALYTICS_QUERYResult } from '@/shared/sanity'
import { groq } from 'next-sanity'

const GOOGLE_ANALYTICS_QUERY = groq`
*[_id == "settings"][0]{
  gaId
}
`

export const fetchGoogleAnalytics = () => client.fetch<GOOGLE_ANALYTICS_QUERYResult>(GOOGLE_ANALYTICS_QUERY)
