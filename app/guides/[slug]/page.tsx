import { fetchGuideListQuery } from '@/entities/guide/list'
import { Guide } from '@/pages/guide/guide'

export async function generateStaticParams() {
    const guides = await fetchGuideListQuery()

    return guides
        .filter(({ slug }) => !!slug)
        .map(({ slug }) => ({
            slug: slug!,
        }))
}

export default Guide
