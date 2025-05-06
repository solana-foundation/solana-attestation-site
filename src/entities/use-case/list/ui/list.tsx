import { Card, Cards } from '@/shared/ui/card'
import { FC } from 'react'

export const List: FC = () => {
    return (
        <Cards layout="column2">
            <Card
                cover="/bg1.png"
                title="Issuer Playbook"
                description="Everything an issuer needs—schema design tips, push vs. pull issuance patterns, bulk minting, and revocation best-practices for dynamic credentials."
                href="/"
            />
            <Card cover="/bg1.png" title="Issuer Playbook" description="Everything an issuer needs—schema design tips." href="/" />
            <Card
                cover="/bg1.png"
                title="Issuer Playbook"
                description="Everything an issuer needs—schema design tips, push vs. pull issuance patterns, bulk minting, and revocation best-practices for dynamic credentials."
                href="/"
            />
            <Card cover="/bg1.png" title="Issuer Playbook" description="Everything an issuer needs—schema design tips." href="/" />
            <Card
                cover="/bg1.png"
                title="Issuer Playbook"
                description="Everything an issuer needs—schema design tips, push vs. pull issuance patterns."
                href="/"
            />
            <Card cover="/bg1.png" title="Issuer Playbook" description="Everything an issuer needs—schema." href="/" />
        </Cards>
    )
}
