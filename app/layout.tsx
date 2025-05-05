import type { Metadata } from 'next'
import { Geist_Mono } from 'next/font/google'
import './globals.css'
import { Layout as AppLayout } from '@/app'
import { FC, PropsWithChildren } from 'react'

import styles from './layout.module.css'

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Solana Attestation Service',
    description: 'SAS',
}

const Layout: FC<PropsWithChildren> = ({ children }) => (
    <html lang="en">
        <body className={`${geistMono.variable} ${styles.background} antialiased`}>
            <AppLayout>{children}</AppLayout>
        </body>
    </html>
)

export default Layout
