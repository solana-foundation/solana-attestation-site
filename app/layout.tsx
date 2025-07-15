import type { Metadata } from 'next'
import { Geist_Mono } from 'next/font/google'
import { FC, PropsWithChildren } from 'react'
import { GoogleAnalytics } from '@/entities/settings'
import './globals.css'

const siteFont = Geist_Mono({ 
    subsets: ['latin'],
    weight: ['400', '700']
})

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
