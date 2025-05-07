import Link from 'next/link'
import { FC, PropsWithChildren, ReactNode } from 'react'
import type { UrlObject } from 'url'

type SectionProps = PropsWithChildren<{
    title: string
    subTitle?: string | ReactNode
    linkHref?: string | UrlObject
    linkTitle?: string
}>

export const Section: FC<SectionProps> = ({ children, title, subTitle, linkHref, linkTitle }) => (
    <section className="pt-10 pb-16 space-y-7 sm:space-y-9">
        <header className="grid grid-cols-1 sm:grid-cols-[1fr_auto] items-end gap-x-4">
            <div className="flex flex-col gap-8">
                <h2 className="text-xl sm:text-2xl font-semibold uppercase tracking-tight">{title}</h2>
                {subTitle && <p className="text-sm md:text-base tracking-tight max-w-xl">{subTitle}</p>}
            </div>

            {linkHref && linkTitle && (
                <Link href={linkHref} className="text-sm sm:text-base font-medium tracking-tight text-black hover:text-gray-600 active:text-gray-900">
                    {linkTitle} →
                </Link>
            )}
        </header>
        <div>{children}</div>
    </section>
)
