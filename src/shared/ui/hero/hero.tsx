import { FC, PropsWithChildren } from 'react'

type HeroProps = PropsWithChildren<{
    title: string
    subTitle: string
}>

export const Hero: FC<HeroProps> = ({ children, title, subTitle }) => (
    <section className="pt-28 sm:pt-32 pb-12 sm:pb-36 flex flex-col gap-8 max-w-140">
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tighter uppercase">{title}</h1>
        <p className="text-sm sm:text-base">{subTitle}</p>
        <div className="mt-4 flex flex-col sm:flex-row gap-2">{children}</div>
    </section>
)
