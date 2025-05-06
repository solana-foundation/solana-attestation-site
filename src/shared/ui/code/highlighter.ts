import { BundledLanguage, bundledLanguages, BundledTheme, createHighlighter, HighlighterGeneric } from 'shiki'
import theme from './theme'

let highlighter: HighlighterGeneric<BundledLanguage, BundledTheme> | undefined = undefined

export const codeToHtml = async (code: string, language: BundledLanguage) => {
    if (highlighter === undefined) {
        highlighter = await createHighlighter({
            themes: [theme],
            langs: Object.keys(bundledLanguages),
        })
    }

    return highlighter.codeToHtml(code, {
        lang: language,
        theme: 'ayu-light',
    })
}
