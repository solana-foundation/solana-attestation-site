import { fetchGuideQuery } from '@/entities/guide/list'
import { Container } from '@/shared/ui/container'
import { PageContent, PageContentHeader, PageContentRelated } from '@/shared/ui/page-content'
import { NextPage } from 'next'
import { notFound } from 'next/navigation'

export const Guide: NextPage<{ params: Promise<{ slug: string }> }> = async ({ params }) => {
    const { slug } = await params

    const document = await fetchGuideQuery(slug)
    if (!document) return notFound()

    const { title, description, publishedAt, content, related } = document

    return (
        <Container layout="narrow">
            <PageContentHeader
                title={title || 'Guide'}
                description={description ?? ''}
                publishedAt={publishedAt ? new Date(publishedAt) : undefined}
                type="Guide"
            />
            {content && <PageContent content={content} />}
            {related && related.length > 0 && (
                <PageContentRelated title="Learn with other guides" urlPath="guides" linkTitle="Check all guides" linkHref="/guides" items={related} />
            )}
        </Container>
    )
}
