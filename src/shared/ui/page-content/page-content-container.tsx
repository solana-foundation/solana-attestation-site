import clsx from 'clsx'
import { ElementType, FC, PropsWithChildren } from 'react'

type PageContentContainerProps = PropsWithChildren<{
    className?: string
    as?: ElementType
}>

export const PageContentContainer: FC<PageContentContainerProps> = ({ children, className, as: Element = 'div' }) => (
    <Element className={clsx(className, 'mx-auto max-w-162')}>{children}</Element>
)
