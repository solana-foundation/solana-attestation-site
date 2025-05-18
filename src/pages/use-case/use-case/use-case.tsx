import { fetchUseCaseQuery } from '@/entities/use-case/list'
import { Container } from '@/shared/ui/container'
import { PageContent, PageContentHeader, PageContentRelated } from '@/shared/ui/page-content'
import { NextPage } from 'next'
import { notFound } from 'next/navigation'

export const UseCase: NextPage<{ params: Promise<{ slug: string }> }> = async ({ params }) => {
    const { slug } = await params

    const document = await fetchUseCaseQuery(slug)
    if (!document) return notFound()

    const { title, description, publishedAt, content, related } = document

    return (
        <Container layout="narrow">
            <PageContentHeader
                title={title || 'Use Case'}
                description={description ?? ''}
                publishedAt={publishedAt ? new Date(publishedAt) : undefined}
                type="Use Case"
            />
            {content && <PageContent content={content} />}
            {related && related.length > 0 && (
                <PageContentRelated title="View other use cases" urlPath="use-cases" linkTitle="View More" linkHref="/use-cases" items={related} />
            )}
        </Container>
    )
}
