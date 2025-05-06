import { FC } from 'react'
import { BundledLanguage } from 'shiki'
import styles from './code-block.module.css'
import clsx from 'clsx'
import { codeToHtml } from './highlighter'

type CodeBlockProps = {
    language: BundledLanguage
    code: string
}

export const CodeBlock: FC<CodeBlockProps> = async ({ language, code }) => {
    const html = await codeToHtml(code, language)
    return <pre className={clsx('text-xs md:text-sm', styles.block)} dangerouslySetInnerHTML={{ __html: html }}></pre>
}
