import { List, ListItem } from '@/shared/ui/list'
import { Section } from '@/shared/ui/section'
import { FC } from 'react'

export const Guides: FC = () => {
    return (
        <Section title="Learn with guides" linkTitle="Check all" linkHref="/guide">
            <List>
                <ListItem
                    cover="/bg1.png"
                    date={new Date(2025, 3, 30)}
                    title="Issuer Playbook"
                    description="Everything an issuer needs—schema design tips, push vs. pull issuance patterns, bulk minting, and revocation best-practices for dynamic credentials."
                    href="/"
                />
                <ListItem
                    cover="/bg1.png"
                    date={new Date(2025, 3, 30)}
                    title="Issuer Playbook"
                    description="Everything an issuer needs—schema design tips."
                    href="/"
                />
                <ListItem
                    cover="/bg1.png"
                    date={new Date(2025, 3, 30)}
                    title="Issuer Playbook"
                    description="Everything an issuer needs—schema design tips, push vs. pull issuance patterns, bulk minting, and revocation best-practices for dynamic credentials."
                    href="/"
                />
                <ListItem
                    cover="/bg1.png"
                    date={new Date(2025, 3, 30)}
                    title="Issuer Playbook"
                    description="Everything an issuer needs—schema design tips."
                    href="/"
                />
                <ListItem
                    cover="/bg1.png"
                    date={new Date(2025, 3, 30)}
                    title="Issuer Playbook"
                    description="Everything an issuer needs—schema design tips, push vs. pull issuance patterns."
                    href="/"
                />
                <ListItem cover="/bg1.png" date={new Date(2025, 3, 30)} title="Issuer Playbook" description="Everything an issuer needs—schema." href="/" />
            </List>
        </Section>
    )
}
