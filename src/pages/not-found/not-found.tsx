import { Container } from '@/shared/ui/container'
import { Link } from '@/shared/ui/link'
import { Section } from '@/shared/ui/section'
import { NextPage } from 'next'

export const NotFound: NextPage = () => (
    <Container layout="wide" className="pt-17 sm:pt-47 pb-14 sm:pb-24">
        <Section
            title="404 — page fell off-chain"
            subTitle={
                <>
                    Our over‑caffeinated intern tried to stake this URL and, well… it got slashed.Hop back to the <Link href="/">homepage</Link> to learn about
                    Solana Attestation Service, or wander footer links.
                </>
            }
        />
    </Container>
)
