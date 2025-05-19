import { FC, PropsWithChildren } from 'react'
import { Layout as AppLayout } from '@/app'

const Layout: FC<PropsWithChildren> = ({ children }) => <AppLayout>{children}</AppLayout>

export default Layout
