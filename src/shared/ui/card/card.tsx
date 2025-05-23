import clsx from 'clsx'
import Link from 'next/link'
import { FC } from 'react'
import type { UrlObject } from 'url'

type CardProps = {
    cover?: string
    title: string
    description: string
    href: string | UrlObject
}

export const Card: FC<CardProps> = ({ cover, title, description, href }) => (
    <Link
        href={href}
        className={clsx('p-5', 'grid grid-rows-[auto_auto_1fr] gap-1', 'border border-black', 'bg-white hover:bg-[#E6FFFF] active:bg-[#E6FFFF]/50')}
    >
        <div className="mb-3 p-4 flex items-center justify-center bg-linear-to-b from-[#FFD4FF] to-[#AAFFFF]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={cover} alt={title} className="max-w-full max-h-50 aspect-16/9 object-cover" />
        </div>
        <h3 className="text-sm md:text-base font-bold uppercase tracking-tight">{title}</h3>
        <p className="text-sm md:text-base tracking-tight">{description}</p>
    </Link>
)
