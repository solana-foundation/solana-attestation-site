import { FC, PropsWithChildren } from 'react'
import BaseLink from 'next/link'
import clsx from 'clsx'
import { UrlObject } from 'url'

type LinkProps = PropsWithChildren<{
    href: string | UrlObject
    className?: string
}>

export const Link: FC<LinkProps> = ({ children, href, className }) => (
    <BaseLink href={href} className={clsx('underline hover:opacity-60 active:opacity-95', className)}>
        {children}
    </BaseLink>
)
