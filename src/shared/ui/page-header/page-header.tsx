import { ComponentProps, FC, ReactNode } from 'react'
import { Container } from '@/shared/ui/container'
import clsx from 'clsx'
import { NavigationItem } from './navigation-item'
import Image from 'next/image'
import Link from 'next/link'

type PageHeaderProps = {
    navigation?: ComponentProps<typeof NavigationItem>[]
    aside?: ReactNode
}

export const PageHeader: FC<PageHeaderProps> = ({ navigation, aside }) => (
    <Container
        as="header"
        layout="full"
        padding={false}
        className={clsx('grid items-center gap-8', aside ? 'grid-cols-[100px_1fr_minmax(0px,_auto)]' : 'grid-cols-[200px_1fr]', 'px-4 sm:px-6 py-4')}
    >
        <Link href="/">
            <Image src="/logo.svg" alt="Logo" width={92} height={23} />
        </Link>

        <div className="overflow-hidden whitespace-nowrap text-ellipsis">{navigation?.map((item, index) => <NavigationItem key={index} {...item} />)}</div>

        {aside && <div className="bg-gray-100 max-w-3xs overflow-hidden">{aside}</div>}
    </Container>
)
