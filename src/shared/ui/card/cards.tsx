import { cva, VariantProps } from 'class-variance-authority'
import { FC, PropsWithChildren } from 'react'

const cardsVariants = cva('grid grid-cols-1 gap-5', {
    variants: {
        layout: {
            column2: 'lg:grid-cols-[1fr_1fr]',
            column3: 'lg:grid-cols-[1fr_1fr_1fr]',
        },
    },
})

type CardsProps = PropsWithChildren & VariantProps<typeof cardsVariants>

export const Cards: FC<CardsProps> = ({ children, layout = 'column3' }) => <div className={cardsVariants({ layout })}>{children}</div>
