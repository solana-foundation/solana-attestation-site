import clsx from 'clsx'
import { FC } from 'react'

type TreeProps = {
    items: {
        title: string
        description: string
    }[]
}

export const Tree: FC<TreeProps> = ({ items }) => {
    return (
        <div>
            {items.map((item, index) => (
                <div key={index} className={clsx('grid', index === 0 ? 'grid-cols-[1fr]' : 'grid-cols-[auto_1fr]', 'items-start gap-6')}>
                    {index > 0 && (
                        <div className="pl-17 hidden xl:block" style={{ marginLeft: index < 4 ? (index - 1) * 200 : 400 }}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="98"
                                height="98"
                                viewBox="0 0 98 98"
                                fill="none"
                                stroke="currentColor"
                                className="text-black"
                            >
                                <path d="M2 0V96H98" strokeWidth="3" />
                            </svg>
                        </div>
                    )}
                    <div className={clsx('grid grid-cols-[auto_1fr] items-start md:items-center gap-4 md:gap-8', index === 0 ? 'pt-0' : 'pt-7')}>
                        <div className="flex items-center justify-center overflow-hidden size-20 md:size-37.5 bg-white">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={`/tree/${(index % 4) + 1}.png`} alt={item.title} className="w-20 md:w-30 select-none" />
                        </div>
                        <div className="flex flex-col gap-4 max-w-md">
                            <h3 className="text-sm md:text-base font-bold tracking-tight uppercase">{item.title}</h3>
                            <p className="text-sm md:text-base tracking-tight">{item.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
