import { fetchUseCaseQuery } from '@/entities/use-case/list'
import { Code } from '@/shared/ui/code'
import { Container } from '@/shared/ui/container'
import { Section } from '@/shared/ui/section'
import { NextPage } from 'next'
import { notFound } from 'next/navigation'

export const UseCase: NextPage<{ params: Promise<{ slug: string }> }> = async ({ params }) => {
    const { slug } = await params

    const document = await fetchUseCaseQuery(slug)
    if (!document) return notFound()

    const { content, ...metadata } = document
    return (
        <Container layout="narrow">
            <Section title={metadata.title || ''} subTitle={metadata.description}>
                <Code
                    files={[
                        {
                            name: 'schema.json',
                            language: 'json',
                            content: JSON.stringify(metadata, null, 2),
                        },
                        {
                            name: 'content.json',
                            language: 'json',
                            content: JSON.stringify(content, null, 2),
                        },
                    ]}
                />
            </Section>
        </Container>
    )
}
