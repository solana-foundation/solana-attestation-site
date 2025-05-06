import { NextPage } from 'next'
import { Hero, Using } from '@/entities/home'
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
