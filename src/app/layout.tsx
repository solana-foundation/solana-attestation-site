import { FC, PropsWithChildren } from 'react'
import { PageHeader } from '@/entities/page-header'
import { PageFooter } from '@/entities/page-footer'

export const Layout: FC<PropsWithChildren> = ({ children }) => (
    <>
        <PageHeader />
        {children}
        <PageFooter />
    </>
)