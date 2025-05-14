import { FC } from 'react'
import { urlFor, type RichText } from '@/shared/sanity'
import { PortableText, PortableTextComponents } from 'next-sanity'
import { PageContentContainer } from './page-content-container'
import { Code } from '@/shared/ui/code'
import { BundledLanguage } from 'shiki'
import { cva } from 'class-variance-authority'
import clsx from 'clsx'
import styles from './page-content.module.css'

type PageContentProps = {
    content: RichText
}

const blockVariants = cva('tracking-tight leading-5 sm:leading-7', {
    variants: {
        style: {
            normal: 'mb-3 sm:mb-5 text-sm sm:text-base',
            h2: 'mt-12 mb-5 sm:mt-15 sm:mb-6 text-xl sm:text-2xl font-semibold uppercase',
            h3: 'mt-6 mb-3 sm:mt-8 sm:mb-4 text-lg sm:text-xl font-semibold uppercase',
            h4: 'mt-6 mb-1 sm:mt-8 sm:mb-2 text-base sm:text-lg font-semibold uppercase',
        },
    },
})

const components: PortableTextComponents = {
    types: {
        'code-file': ({ value }) =>
            isCodeBlock(value) ? (
                <Code
                    className="py-5 sm:py-8"
                    files={[
                        {
                            name: value.name,
                            language: value.type,
                            content: value.code,
                        },
                    ]}
                />
            ) : undefined,

        'image': props => (
            <PageContentContainer>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={urlFor(props.value.asset._ref).withOptions({ 'max-w': 648 }).auto('format').url()}
                    className="mb-3 sm:mb-5 max-w-full rounded"
                    alt=""
                />
            </PageContentContainer>
        ),
    },

    block: ({ children, value: { style } }) => (
        <PageContentContainer
            as={style === 'h2' ? 'h2' : style === 'h3' ? 'h3' : style === 'h4' ? 'h4' : 'div'}
            className={blockVariants({ style: isValidStyle(style) ? style : 'normal' })}
        >
            {children}
        </PageContentContainer>
    ),
    list: props => (
        <PageContentContainer>
            <ul className={clsx('mb-3 sm:mb-5 ', 'list-outside', props.value.level > 1 ? 'list-disc' : 'list-decimal', { 'pl-4': props.value.level > 1 })}>
                {props.children}
            </ul>
        </PageContentContainer>
    ),
    listItem: props => <li className="mt-1 mb-3 sm:mb-2 text-sm sm:text-base tracking-tight leading-5 sm:leading-7">{props.children}</li>,
}

export const PageContent: FC<PageContentProps> = ({ content }) => (
    <div className={styles.numberedHeadings}>
        <PortableText value={content} components={components} />
    </div>
)

const isValidStyle = (style: string | null | undefined): style is 'normal' | 'h2' | 'h3' | 'h4' =>
    style === 'normal' || style === 'h2' || style === 'h3' || style === 'h4'

const isCodeBlock = (block: unknown): block is { name: string; type: BundledLanguage; code: string } =>
    !!block &&
    typeof block === 'object' &&
    'name' in block &&
    !!block.name &&
    typeof block.name === 'string' &&
    'type' in block &&
    !!block.type &&
    typeof block.type === 'string' &&
    'code' in block &&
    !!block.code &&
    typeof block.code === 'string'
