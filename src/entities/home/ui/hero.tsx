import { FC } from 'react'
import { Hero as HeroBase } from '@/shared/ui/hero'
import { Button } from '@/shared/ui/button'
import { Icon } from '@/shared/ui/icon'

export const Hero: FC = () => {
    return (
        <HeroBase title="Solana Attestation Service" subTitle="An infrastructure public good for making attestations onchain or offchain about anything.">
            <Button href="https://github.com" variant="primary" icon={Icon.Github}>
                Explore on Github
            </Button>
            <Button href="https://github.com" variant="secondary" icon={Icon.Documentation}>
                Read documentation
            </Button>
        </HeroBase>
    )
}
