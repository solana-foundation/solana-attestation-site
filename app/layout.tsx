import type { Metadata } from 'next'
import { Geist_Mono } from 'next/font/google'
import { FC, PropsWithChildren } from 'react'
import './globals.css'

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
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
        <body className={`${geistMono.variable} antialiased`}>{children}</body>
    </html>
)

export default Layout
