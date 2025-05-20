import { ComponentProps, FC } from 'react'
import { NavigationItem } from './navigation-item'

type NavigationGroupProps = {
    title: string
    items: ComponentProps<typeof NavigationItem>[]
}

export const NavigationGroup: FC<NavigationGroupProps> = ({ title, items }) => (
    <section className="flex flex-col gap-4">
        <h3 className="text-xs font-medium text-black/50">{title}</h3>
        <ul className="flex flex-col gap-4">
            {items.map((item, index) => (
                <li key={index}>
                    <NavigationItem {...item} />
                </li>
            ))}
        </ul>
    </section>
)
