import { FC } from 'react'

export const Copy: FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" stroke="currentColor" viewBox="0 0 16 16">
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 11.5v2.25a.75.75 0 0 1-.75.75h-6.5a.75.75 0 0 1-.75-.75v-8.5a.75.75 0 0 1 .75-.75H4.5c.335 0 .67.027 1 .083m5 6.917h2.25a.75.75 0 0 0 .75-.75V7.5a6.002 6.002 0 0 0-6-6H6.25a.75.75 0 0 0-.75.75v2.333m5 6.917H6.25a.75.75 0 0 1-.75-.75V4.583M13.5 9V7.75a2.25 2.25 0 0 0-2.25-2.25h-1a.75.75 0 0 1-.75-.75v-1A2.25 2.25 0 0 0 7.25 1.5H6.5"
        />
    </svg>
)
