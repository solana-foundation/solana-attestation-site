'use client'

import clsx from 'clsx'
import { FC, PropsWithChildren, ReactNode, useState } from 'react'

type NavaigationProps = PropsWithChildren<{
    aside?: ReactNode
}>

export const Navigation: FC<NavaigationProps> = ({ children, aside }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <div className="w-full flex flex-nowrap justify-end">
            <nav
                className={clsx(
                    'flex-1',
                    'px-4 pt-6 pb-8 md:p-0',
                    isOpen ? 'grid opacity-100 pointer-events-auto' : 'grid opacity-0 md:opacity-100 pointer-events-none md:pointer-events-auto',
                    'fixed top-20 left-0 right-0 md:static md:top-auto md:left-auto md:right-auto',
                    'bg-white md:bg-transparent',
                    'grid grid-rows-[auto_auto] md:grid-rows-1 grid-cols-[1fr_200px] items-center gap-8',
                    'shadow-xl md:shadow-none',
                    'z-30'
                )}
            >
                <div className="md:pt-1.5 col-span-2 md:col-span-1 flex flex-col gap-8 md:gap-0 md:block overflow-hidden whitespace-nowrap text-ellipsis">
                    {children}
                </div>

                {aside && <div className="col-span-2 md:col-span-1 md:max-w-3xs overflow-hidden">{aside}</div>}
            </nav>
            <button className="block md:hidden z-30" onClick={() => setIsOpen(open => !open)}>
                <div className="flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all duration-200">
                    <div className="relative flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                        <div
                            className={clsx('bg-black h-[2px] w-7 transform transition-all duration-300 origin-left delay-100', { 'translate-y-6': isOpen })}
                        ></div>
                        <div
                            className={clsx('bg-black h-[2px] w-7 rounded transform transition-all duration-300 delay-75', { 'translate-y-6 ': isOpen })}
                        ></div>
                        <div className={clsx('bg-black h-[2px] w-7 transform transition-all duration-300 origin-left', { 'translate-y-6': isOpen })}></div>

                        <div
                            className={clsx('absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 flex w-0', {
                                'translate-x-0 w-12': isOpen,
                            })}
                        >
                            <div
                                className={clsx('absolute bg-black h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300', {
                                    'rotate-45': isOpen,
                                })}
                            ></div>
                            <div
                                className={clsx('absolute bg-black h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300', {
                                    '-rotate-45': isOpen,
                                })}
                            ></div>
                        </div>
                    </div>
                </div>
            </button>
            <div
                className={clsx(
                    'block md:hidden fixed top-20 bottom-0 inset-x-0 bg-black/40 z-20',
                    isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none md:pointer-events-none'
                )}
                onClick={() => setIsOpen(false)}
            ></div>
        </div>
    )
}
