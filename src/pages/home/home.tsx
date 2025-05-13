import { NextPage } from 'next'
import { fetchHome } from '@/entities/home'
import { Container } from '@/shared/ui/container'
import { Block } from './block'

export const Home: NextPage = async () => {
    const home = await fetchHome()

    return home?.map(block =>
        block._type !== 'quote' ? (
            <Container key={block._key} layout="wide">
                <Block content={block} />
            </Container>
        ) : (
            <Block key={block._key} content={block} />
        )
    )
}
