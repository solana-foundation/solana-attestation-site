import { USE_CASE_TITLE_QUERYResult, client } from '@/shared/sanity'
import { groq } from 'next-sanity'

const USE_CASE_TITLE_QUERY = groq`
*[_id == "settings"][0]{
  useCasesPageTitle,
  useCasesPageDescription
}
`

export const fetchUseCaseTitleQuery = () => client.fetch<USE_CASE_TITLE_QUERYResult>(USE_CASE_TITLE_QUERY)
