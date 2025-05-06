import { NextPage } from 'next'
import { CallToAction, Guides, Hero, HowSasWorks, HowToImplement, Quote, UseCases, Using } from '@/entities/home'
import { Container } from '@/shared/ui/container'

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

        <Quote />

        <Container layout="wide">
            <HowToImplement />
        </Container>

        <Container layout="wide">
            <Guides />
        </Container>

        <Container layout="wide">
            <CallToAction />
        </Container>
    </>
)
