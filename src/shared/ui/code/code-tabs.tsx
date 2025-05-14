'use client'

import clsx from 'clsx'
import { FC, ReactNode, useState } from 'react'
import copy from 'copy-to-clipboard'
import { Icon } from '@/shared/ui/icon'

type CodeTabsProps = {
    className?: string
    tabs: {
        title: string
        file: string
        content: ReactNode
    }[]
}

export const CodeTabs: FC<CodeTabsProps> = ({ className, tabs }) => {
    const [activeTab, setActiveTab] = useState<number>(0)

    return (
        <div className={className}>
            <div className="flex flex-row flex-nowrap">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={clsx(
                            'px-2 py-1',
                            'text-xs md:text-sm tracking-tighter',
                            'overflow-hidden whitespace-nowrap text-ellipsis',
                            'border-black border-t border-r',
                            index === 0 ? 'border-l' : undefined,
                            activeTab !== index ? 'border-b' : 'bg-[#f8f9fa]'
                        )}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.title}
                    </button>
                ))}
                <span className="flex-1 border-black border-b"></span>
            </div>
            <div className={clsx('px-4 py-6', 'relative', 'border-black border-l border-b border-r', 'bg-[#f8f9fa]', 'overflow-hidden')}>
                <button
                    className={clsx(
                        'absolute right-4 top-4',
                        'text-sm tracking-tighter',
                        'flex flex-nowrap items-center gap-1',
                        'transition-all active:translate-x-0.5'
                    )}
                    onClick={() => {
                        copy(tabs[activeTab].file)
                    }}
                >
                    <Icon.Copy className="size-4" />
                    <span className="hidden md:block flex-1">Copy</span>
                </button>
                {tabs.length > activeTab ? tabs[activeTab].content : undefined}
            </div>
        </div>
    )
}
