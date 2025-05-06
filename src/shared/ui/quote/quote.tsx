import { FC } from 'react'
import clsx from 'clsx'
import styles from './quote.module.css'

type QuoteProps = {
    name: string
    image: string
    quote: string
}

export const Quote: FC<QuoteProps> = ({ name, image, quote }) => (
    <div className={clsx('px-4 py-12', 'bg-[url(/footer-bg.png)] bg-size-[2440px_auto] bg-[center_top_-850px] bg-no-repeat')}>
        <div className={clsx('mx-auto', 'pt-12 pb-6 xl:pb-8 pl-8 pr-4', 'bg-white', 'max-w-168', 'grid grid-rows-[auto_1fr] gap-6 xl:gap-14')}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image} alt={name} className={clsx('select-none', 'max-w-34 xl:max-w-53 max-h-4 xl:max-h-6')} />
            <div className="relative">
                <p className={clsx('text-sm lg:text-base', 'lg:line-clamp-6 xl:line-clamp-4', styles.quote)}>{quote}”</p>
            </div>
        </div>
    </div>
)
