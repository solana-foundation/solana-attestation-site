import { ElementType, FC, Fragment, PropsWithChildren } from 'react'
import { PageHeader } from '@/entities/page-header'
import { PageFooter } from '@/entities/page-footer'

type LayoutProps = PropsWithChildren<{
    className?: string
    as?: ElementType
}>

export const Layout: FC<LayoutProps> = ({ children, className, as: Container = Fragment }) => {
    return (
        <Container className={className}>
            <PageHeader />
            {children}
            <PageFooter />
        </Container>
    )
}
