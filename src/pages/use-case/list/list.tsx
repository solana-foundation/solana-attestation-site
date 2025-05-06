import { Container } from '@/shared/ui/container'
import { Section } from '@/shared/ui/section'
import { NextPage } from 'next'
import { List as BaseList } from '@/entities/use-case/list'

export const List: NextPage = () => {
    return (
        <Container as="main" layout="narrow">
            <Section title="Use cases" subTitle="Role‑based guides to issue, verify, and integrate SAS credentials — copy‑paste ready."></Section>
            <BaseList />
        </Container>
    )
}
