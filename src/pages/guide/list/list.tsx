import { NextPage } from 'next'
import { Container } from '@/shared/ui/container'
import { Section } from '@/shared/ui/section'
import { List as BaseList } from '@/entities/guide/list'

export const List: NextPage = () => {
    return (
        <Container as="main" layout="narrow">
            <Section title="Guides" subTitle="Role‑based guides to issue, verify, and integrate SAS credentials — copy‑paste ready."></Section>
            <BaseList />
        </Container>
    )
}
