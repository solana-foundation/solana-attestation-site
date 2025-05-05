import { Button } from '@/shared/ui/button/button'
import { Container } from '@/shared/ui/container'
import { Hero } from '@/shared/ui/hero'
import { Icon } from '@/shared/ui/icon'
import { Section } from '@/shared/ui/section'
import { NextPage } from 'next'

const Page: NextPage = () => {
    return (
        <>
            <Hero title="Solana Attestation Service" subTitle="An infrastructure public good for making attestations onchain or offchain about anything.">
                <Button href="https://github.com" variant="primary" icon={Icon.Github}>
                    Explore on Github
                </Button>
                <Button href="https://github.com" variant="secondary" icon={Icon.Documentation}>
                    Read documentation
                </Button>
            </Hero>
            <Container layout="wide">
                <Section title="Teams using SAS">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
                        <div className="bg-gray-100/50 rounded min-h-32"></div>
                        <div className="bg-gray-100/50 rounded min-h-32"></div>
                        <div className="bg-gray-100/50 rounded min-h-64 col-span-2 row-span-2"></div>
                        <div className="bg-gray-100/50 rounded min-h-32"></div>
                        <div className="bg-gray-100/50 rounded min-h-32"></div>
                        <div className="bg-gray-100/50 rounded min-h-32"></div>
                        <div className="bg-gray-100/50 rounded min-h-32"></div>
                        <div className="bg-gray-100/50 rounded min-h-32"></div>
                        <div className="bg-gray-100/50 rounded min-h-32"></div>
                        <div className="bg-gray-100 rounded min-h-32 col-span-2"></div>
                        <div className="bg-gray-100/50 rounded min-h-32"></div>
                        <div className="bg-gray-100/50 rounded min-h-32"></div>
                    </div>
                </Section>
            </Container>
            <Container layout="wide">
                <Section title="How sas works?">
                    <div className="min-h-96 bg-gray-100/50 rounded"></div>
                </Section>
            </Container>
            <Container layout="wide">
                <Section title="Use cases" linkTitle="Check more" linkHref="/">
                    <div className="min-h-96 bg-gray-100/50 rounded"></div>
                </Section>
            </Container>
            {/* --- */}
            <Container layout="wide">
                <Section title="How to implement" linkTitle="More in docs" linkHref="/">
                    <div className="min-h-96 bg-gray-100/50 rounded"></div>
                </Section>
            </Container>
            <Container layout="wide">
                <Section title="Learn with guides" linkTitle="Check all" linkHref="/">
                    <div className="min-h-96 bg-gray-100/50 rounded"></div>
                </Section>
            </Container>
            <Container layout="wide">
                <Section title="Start building on SAS today">
                    <div className="min-h-96 bg-gray-100/50 rounded"></div>
                </Section>
            </Container>
        </>
    )
}

export default Page
