import { FC } from 'react'
import { CodeBlock } from './code-block'
import { CodeTabs } from './code-tabs'
import { BundledLanguage } from 'shiki'

type CodeProps = {
    files: {
        name: string
        language: BundledLanguage
        content: string
    }[]
}

export const Code: FC<CodeProps> = ({ files }) => (
    <CodeTabs
        tabs={files.map((file, index) => ({
            title: file.name,
            file: file.content,
            content: <CodeBlock key={index} code={file.content} language={file.language} />,
        }))}
    />
)
