import { List as BaseList, ListItem } from '@/shared/ui/list'
import { FC } from 'react'

export const List: FC = () => {
    return (
        <BaseList>
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
        </BaseList>
    )
}
