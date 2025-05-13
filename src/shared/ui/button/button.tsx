import { cva, VariantProps } from 'class-variance-authority'
import Link from 'next/link'
import { ComponentType, FC, PropsWithChildren } from 'react'
import type { UrlObject } from 'url'

const iconVariants = cva('block shrink-0', {
    variants: {
        size: {
            default: 'size-4.5',
            sm: 'size-6',
        },
    },
})

const buttonVariants = cva(['flex flex-nowrap items-center justify-center gap-2', 'border', 'font-medium tracking-tight', 'overflow-hidden'], {
    variants: {
        variant: {
            primary: 'bg-black text-white border-black hover:bg-gray-800 active:bg-gray-900',
            secondary: 'bg-white text-black border-black hover:bg-gray-100 active:bg-gray-200',
        },
        size: {
            default: 'px-4 py-2 text-base',
            sm: 'px-3 py-1.5 text-sm',
        },
        fill: {
            true: 'w-full',
            false: '',
        },
    },
})

type ButtonProps = PropsWithChildren<{
    icon?: ComponentType<{ className?: string }>
    href: string | UrlObject
    newWindow?: boolean
    onClick?: () => void | Promise<void>
}> &
    VariantProps<typeof buttonVariants>

export const Button: FC<ButtonProps> = ({ children, icon: Icon, variant = 'primary', size = 'default', fill = false, href, newWindow = false, onClick }) => {
    const content = Icon ? (
        <>
            <Icon className={iconVariants({ size })} />
            <span className="overflow-hidden whitespace-nowrap text-ellipsis">{children}</span>
        </>
    ) : (
        <span className="overflow-hidden whitespace-nowrap text-ellipsis">{children}</span>
    )

    return href ? (
        <Link className={buttonVariants({ variant, size, fill })} href={href} target={newWindow ? '_blank' : undefined} onClick={onClick}>
            {content}
        </Link>
    ) : (
        <button className={buttonVariants({ variant, size, fill })} onClick={onClick}>
            {content}
        </button>
    )
}
