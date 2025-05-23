import { formatDateLong, formatDateShort } from '@/shared/utils/format-date'
import { FC } from 'react'
import { PageContentContainer } from './page-content-container'
import clsx from 'clsx'

type PageContentHeaderProps = {
    title: string
    description: string
    publishedAt?: Date
    type?: string
}

export const PageContentHeader: FC<PageContentHeaderProps> = ({ title, description, publishedAt, type }) => (
    <>
        <PageContentContainer>
            <header className="mt-17 mb-8 flex flex-col gap-5">
                <h1 className="order-2 text-2xl sm:text-3xl font-semibold tracking-tighter leading-none uppercase">{title}</h1>
                <p className="order-3 text-sm sm:text-base tracking-tight leading-5 sm:leading-7">{description}</p>
                <div className="order-1 flex flex-row items-center gap-4">
                    {publishedAt && (
                        <time dateTime={formatDateShort(publishedAt)} className="text-xs tracking-tight">
                            {formatDateLong(publishedAt)}
                        </time>
                    )}
                    {publishedAt && type && <span className="text-xs tracking-tight">・</span>}
                    {type && <p className="text-xs tracking-tight">{type}</p>}
                </div>
            </header>
        </PageContentContainer>
    </>
)
