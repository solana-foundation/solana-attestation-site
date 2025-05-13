import { Container } from '@/shared/ui/container'
import { Section } from '@/shared/ui/section'
import { NextPage } from 'next'
import { List as BaseList, fetchUseCaseTitleQuery } from '@/entities/use-case/list'

export const List: NextPage = async () => {
    const title = await fetchUseCaseTitleQuery()

    return (
        <Container as="main" layout="narrow">
            <Section title={title?.useCasesPageTitle || ''} subTitle={title?.useCasesPageDescription || ''}>
                <BaseList />
            </Section>
        </Container>
    )
}
