import { GUIDES_TITLE_QUERYResult, client } from '@/shared/sanity'
import { groq } from 'next-sanity'

const GUIDES_TITLE_QUERY = groq`
*[_id == "settings"][0]{
  guidesPageTitle,
  guidesPageDescription
}
`

export const fetchGuidesTitleQuery = () => client.fetch<GUIDES_TITLE_QUERYResult>(GUIDES_TITLE_QUERY)
