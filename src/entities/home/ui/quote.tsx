import { Quote as QuoteBase } from '@/shared/ui/quote'
import { FC } from 'react'

export const Quote: FC = () => {
    return (
        <QuoteBase
            name="Autodesk"
            image="/using/4.png"
            quote="Integrating SAS allowed us to gate community access based on social trust scores — no more bots, no more headaches. It’s fast, neutral, and built exactly the way a Solana-native attestation layer should be."
        />
    )
}
