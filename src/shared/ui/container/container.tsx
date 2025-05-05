import { ElementType, FC, PropsWithChildren } from 'react'
import { cva } from 'class-variance-authority'
import clsx from 'clsx'

type ContainerProps = PropsWithChildren<{
    as?: ElementType
    className?: string
    layout?: 'full' | 'wide' | 'narrow'
    padding?: boolean
}>

const containerVariants = cva('mx-auto w-full', {
    variants: {
        layout: {
            full: '',
            wide: 'max-w-[1440px]',
            narrow: 'max-w-[864px]',
        },
        padding: {
            true: 'px-4 sm:px-16',
            false: '',
        },
    },
})

export const Container: FC<ContainerProps> = ({ as: Element = 'div', className, layout = 'wide', padding = true, children }) => (
    <Element className={clsx(containerVariants({ layout, padding }), className)}>{children}</Element>
)
