import { Card, Cards } from '@/shared/ui/card'
import { Section } from '@/shared/ui/section'
import { FC } from 'react'

export const UseCases: FC = () => {
    return (
        <Section title="Use cases" linkTitle="Check more" linkHref="/">
            <Cards>
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
        </Section>
    )
}
