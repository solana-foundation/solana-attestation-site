import { cva, VariantProps } from 'class-variance-authority'
import { FC } from 'react'
import styles from './using-item.module.css'
import clsx from 'clsx'

const usingItemVariants = cva(['bg-white', 'border border-black', 'overflowhidden'], {
    variants: {
        size: {
            default: ['p-4', 'flex items-center justify-center', 'h-30'],
            medium: ['py-3 pl-8 pr-4', 'col-span-2', 'xl:h-30', 'grid grid-cols-[auto_1fr] items-center gap-10'],
            large: ['pt-12 pb-6 xl:pb-8 pl-8 pr-4', 'col-span-2 row-span-2', 'xl:h-65', 'grid grid-rows-[auto_1fr] gap-6 xl:gap-14'],
        },
    },
})

const imageVariants = cva('select-none', {
    variants: {
        size: {
            default: 'max-w-26 xl:max-w-50 max-h-9 md:max-h-15',
            medium: 'max-w-15 max-h-15',
            large: 'max-w-34 xl:max-w-53 max-h-4 xl:max-h-6',
        },
    },
})

const textVariants = cva('', {
    variants: {
        size: {
            default: '',
            medium: ['pt-2', 'text-sm lg:text-base', 'lg:line-clamp-3'],
            large: ['text-sm lg:text-base', 'lg:line-clamp-6 xl:line-clamp-4'],
        },
    },
})

type UsingItemProps = {
    name: string
    image: string
    quote?: string
} & VariantProps<typeof usingItemVariants>

export const UsingItem: FC<UsingItemProps> = ({ name, image, quote, size = 'default' }) => (
    <div className={usingItemVariants({ size })}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={name} className={imageVariants({ size })} />
        {size !== 'default' && quote && (
            <div className="relative">
                <p className={clsx(textVariants({ size }), styles.quote)}>{quote}”</p>
            </div>
        )}
    </div>
)
