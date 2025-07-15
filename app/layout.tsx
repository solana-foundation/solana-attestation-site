import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { FC, PropsWithChildren } from 'react'
import { GoogleAnalytics } from '@/entities/settings'
import './globals.css'

const siteFont = localFont({
    src: [
        {
            path: "../public/BerkeleyMono-Regular.otf",
            style: "normal",
            weight: "400"
        },
        {
            path: "../public/BerkeleyMono-Bold.otf",
            style: "bold",
            weight: "700"
        },
        {
            path: "../public/BerkeleyMono-Oblique.otf",
            style: "italic",
            weight: "400"
        },
    ]
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
