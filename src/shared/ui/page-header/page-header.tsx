import { ComponentProps, FC, ReactNode } from 'react'
import { Container } from '@/shared/ui/container'
import clsx from 'clsx'
import { NavigationItem } from './navigation-item'
import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from './navigation'

type PageHeaderProps = {
    navigation?: ComponentProps<typeof NavigationItem>[]
    aside?: ReactNode
}

export const PageHeader: FC<PageHeaderProps> = ({ navigation, aside }) => (
    <Container
        as="header"
        layout="full"
        padding={false}
        className={clsx('px-4 sm:px-6 py-4', 'grid grid-cols-[200px_1fr] items-center gap-8 bg-white md:bg-transparent')}
    >
        <Link href="/">
            <Image src="/logo.svg" alt="Logo" width={92} height={23} />
        </Link>

        <Navigation aside={aside}>{navigation?.map((item, index) => <NavigationItem key={index} {...item} />)}</Navigation>
    </Container>
)
