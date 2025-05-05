import { FC, PropsWithChildren } from 'react'
import { PageHeader } from '@/shared/ui/page-header'
import { Button } from '@/shared/ui/button/button'
import { Icon } from '@/shared/ui/icon'
import { PageFooter } from '@/shared/ui/page-footer'

export const Layout: FC<PropsWithChildren> = ({ children }) => (
    <>
        <PageHeader
            navigation={[
                { title: 'Use Cases', href: '/use-cases' },
                { title: 'Guides', href: '/guides' },
                { title: 'Github', href: 'https://github.com' },
                { title: 'Docs', href: '/docs' },
                { title: 'Discord', href: 'https://discord.com' },
            ]}
            aside={
                <Button href="https://github.com" variant="secondary" size="sm" icon={Icon.Github}>
                    Start building
                </Button>
            }
        />

        {children}

        <PageFooter
            navigation={[
                {
                    title: 'Links',
                    items: [
                        { title: 'Github', href: 'https://github.com' },
                        { title: 'Docs', href: '/docs' },
                        { title: 'Discord', href: 'https://discord.com' },
                    ],
                },
                {
                    title: 'Guides',
                    items: [
                        { title: 'Verifier Cookbook', href: '/' },
                        { title: 'Start in 5 Minutes', href: '/' },
                        { title: 'Issuer Playbook', href: '/' },
                        { title: 'Mainnet Deployment', href: '/' },
                        { title: 'Security Deep-Dive', href: '/' },
                    ],
                },
                {
                    title: 'Solana',
                    items: [
                        { title: 'Discord', href: '/' },
                        { title: 'X (Twitter)', href: '/' },
                        { title: 'Official website', href: '/' },
                    ],
                },
                {
                    title: 'Documentation',
                    items: [
                        { title: 'Verifier Cookbook', href: '/' },
                        { title: 'Start in 5 Minutes', href: '/' },
                        { title: 'Issuer Playbook', href: '/' },
                        { title: 'Mainnet Deployment', href: '/' },
                        { title: 'Security Deep-Dive', href: '/' },
                    ],
                },
            ]}
        />
    </>
)
