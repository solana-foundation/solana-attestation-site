import { fetchUseCaseListQuery } from '@/entities/use-case/list/model/use-case-list-query'
import { UseCase } from '@/pages/use-case/use-case'

export async function generateStaticParams() {
    const useCases = await fetchUseCaseListQuery()

    return useCases
        .filter(({ slug }) => !!slug)
        .map(({ slug }) => ({
            slug: slug!,
        }))
}

export default UseCase
