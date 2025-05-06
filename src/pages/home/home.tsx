import { NextPage } from 'next'
import { CallToAction, Guides, Hero, HowSasWorks, UseCases, Using } from '@/entities/home'
import { Container } from '@/shared/ui/container'
import { Section } from '@/shared/ui/section'

export const Home: NextPage = () => (
    <>
        <Container as="main" layout="wide">
            <Hero />
        </Container>

        <Container layout="wide">
            <Using />
        </Container>

        <Container layout="wide">
            <HowSasWorks />
        </Container>
        <Container layout="wide">
            <UseCases />
        </Container>
        {/* --- */}
        <Container layout="wide">
            <Section title="How to implement" linkTitle="More in docs" linkHref="/">
                <div className="min-h-96 bg-gray-100/50 rounded"></div>
            </Section>
        </Container>
        <Container layout="wide">
            <Guides />
        </Container>
        <Container layout="wide">
            <CallToAction />
        </Container>
    </>
)
