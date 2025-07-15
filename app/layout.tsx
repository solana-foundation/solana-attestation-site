import type { Metadata } from 'next'
import localFont, { Geist } from 'next/font/google'
import { FC, PropsWithChildren } from 'react'
import { GoogleAnalytics } from '@/entities/settings'
import './globals.css'

const siteFont = Geist({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Solana Attestation Service',
    description: 'SAS',
    openGraph: {
        images: '/og.png',
    },
}

const Layout: FC<PropsWithChildren> = ({ children }) => (
    <html lang="en">
        <body className={`${siteFont.className} antialiased`}>
            {children}
            <GoogleAnalytics />
        </body>
    </html>
)

export default Layout
