import { NextPage } from 'next'
import { Container } from '@/shared/ui/container'
import { Section } from '@/shared/ui/section'
import { List as BaseList, fetchGuidesTitleQuery } from '@/entities/guide/list'

export const List: NextPage = async () => {
    const title = await fetchGuidesTitleQuery()

    return (
        <Container as="main" layout="narrow">
            <Section title={title?.guidesPageTitle || ''} subTitle={title?.guidesPageDescription || ''}>
                <BaseList />
            </Section>
        </Container>
    )
}
