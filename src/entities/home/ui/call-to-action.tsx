import { FC } from 'react'
import { Hero } from '@/shared/ui/hero'
import { Button } from '@/shared/ui/button'
import { Icon } from '@/shared/ui/icon'

export const CallToAction: FC = () => {
    return (
        <Hero title="Start building on SAS today" subTitle="An infrastructure public good for making attestations onchain or offchain about anything.">
            <Button href="https://github.com" variant="primary" icon={Icon.Github}>
                Explore on Github
            </Button>
            <Button href="https://github.com" variant="secondary" icon={Icon.Documentation}>
                Read documentation
            </Button>
        </Hero>
    )
}
