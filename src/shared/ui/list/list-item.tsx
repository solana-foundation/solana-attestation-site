import clsx from 'clsx'
import Link from 'next/link'
import { FC } from 'react'
import type { UrlObject } from 'url'

type ListItemProps = {
    cover?: string
    date: Date
    title: string
    description: string
    href: string | UrlObject
}

export const ListItem: FC<ListItemProps> = ({ cover, date, title, description, href }) => (
    <Link
        href={href}
        className={clsx(
            'p-5',
            'grid gap-4',
            cover ? 'grid-cols-1 md:grid-cols-[1fr_auto]' : 'grid-cols-1',
            'border border-black',
            'hover:bg-[#E6FFFF] active:bg-[#E6FFFF]/50'
        )}
    >
        <div className="flex flex-col gap-4">
            <h3 className="order-2 text-xl md:text-2xl font-semibold uppercase tracking-tight">{title}</h3>
            <time dateTime="2025-04-30" className="order-1 text-xs tracking-tight">
                30 April
            </time>
            <p className="order-3 text-sm md:text-base tracking-tight">{description}</p>
        </div>
        {cover && (
            <div className="p-4 hidden md:flex items-center justify-center bg-linear-to-b from-[#FFD4FF] to-[#AAFFFF]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={cover} alt={title} className="max-w-full max-h-36" />
            </div>
        )}
    </Link>
)
