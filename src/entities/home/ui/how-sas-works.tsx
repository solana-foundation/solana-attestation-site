import { Section } from '@/shared/ui/section'
import { Tree } from '@/shared/ui/tree'
import { FC } from 'react'

export const HowSasWorks: FC = () => {
    return (
        <Section title="How SAS works?">
            <Tree
                items={[
                    { title: 'Issuer', description: 'Defines credential schema (or re‑uses an existing one) and signs attestation data via SAS SDK' },
                    { title: 'SAS Program', description: 'On‑chain contract verifies issuer signature & writes attestation record' },
                    { title: 'Holder', description: 'Receives the attestation (push or pull), stores reference in their wallet' },
                    { title: 'Verifier', description: 'Requests presentation; holder supplies attestation hash & signature' },
                ]}
            />
        </Section>
    )
}
