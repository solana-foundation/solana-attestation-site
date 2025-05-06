import { FC } from 'react'
import { Using as UsingBase, UsingItem } from '@/shared/ui/using'
import { Section } from '@/shared/ui/section'

export const Using: FC = () => {
    return (
        <Section title="Teams using SAS">
            <UsingBase>
                <UsingItem name="Blue Wolf" image="/using/1.png" />
                <UsingItem name="Xometry" image="/using/8.png" />
                <UsingItem
                    name="Autodesk"
                    image="/using/4.png"
                    size="large"
                    quote="Integrating SAS allowed us to gate community access based on social trust scores — no more bots, no more headaches. It’s fast, neutral, and built exactly the way a Solana-native attestation layer should be."
                />
                <UsingItem name="SHV Energy" image="/using/3.png" />
                <UsingItem name="WAF" image="/using/5.png" />
                <UsingItem name="Xometry" image="/using/7.png" />
                <UsingItem name="MiddleGround Capital" image="/using/2.png" />
                <UsingItem name="Blue Wolf" image="/using/9.png" />
                <UsingItem name="WAF" image="/using/10.png" />
                <UsingItem
                    name="TTI"
                    image="/using/6.png"
                    size="medium"
                    quote="Simple SDK, but very powerful results. Our matchmaking now filters out bots using onchain attestations."
                />
                <UsingItem name="SHV Energy" image="/using/11.png" />
                <UsingItem name="MiddleGround Capital" image="/using/12.png" />
            </UsingBase>
        </Section>
    )
}
