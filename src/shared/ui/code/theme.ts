import { ThemeInput } from 'shiki'

const theme: ThemeInput = {
    name: 'ayu-light',
    settings: [
        {
            settings: {
                background: '#f8f9fa',
                foreground: '#5c6166',
            },
        },
        {
            name: 'Comment',
            scope: ['comment'],
            settings: {
                fontStyle: 'italic',
                foreground: '#787b8099',
            },
        },
        {
            name: 'String',
            scope: ['string', 'constant.other.symbol'],
            settings: {
                foreground: '#86b300',
            },
        },
        {
            name: 'Regular Expressions and Escape Characters',
            scope: ['string.regexp', 'constant.character', 'constant.other'],
            settings: {
                foreground: '#4cbf99',
            },
        },
        {
            name: 'Number',
            scope: ['constant.numeric'],
            settings: {
                foreground: '#a37acc',
            },
        },
        {
            name: 'Built-in constants',
            scope: ['constant.language'],
            settings: {
                foreground: '#a37acc',
            },
        },
        {
            name: 'Variable',
            scope: ['variable', 'variable.parameter.function-call'],
            settings: {
                foreground: '#5c6166',
            },
        },
        {
            name: 'Member Variable',
            scope: ['variable.member'],
            settings: {
                foreground: '#f07171',
            },
        },
        {
            name: 'Language variable',
            scope: ['variable.language'],
            settings: {
                fontStyle: 'italic',
                foreground: '#55b4d4',
            },
        },
        {
            name: 'Storage',
            scope: ['storage'],
            settings: {
                foreground: '#fa8d3e',
            },
        },
        {
            name: 'Keyword',
            scope: ['keyword'],
            settings: {
                foreground: '#fa8d3e',
            },
        },
        {
            name: 'Operators',
            scope: ['keyword.operator'],
            settings: {
                foreground: '#ed9366',
            },
        },
        {
            name: 'Separators like ; or ,',
            scope: ['punctuation.separator', 'punctuation.terminator'],
            settings: {
                foreground: '#5c6166b3',
            },
        },
        {
            name: 'Punctuation',
            scope: ['punctuation.section'],
            settings: {
                foreground: '#5c6166',
            },
        },
        {
            name: 'Accessor',
            scope: ['punctuation.accessor'],
            settings: {
                foreground: '#ed9366',
            },
        },
        {
            name: 'JavaScript/TypeScript interpolation punctuation',
            scope: ['punctuation.definition.template-expression'],
            settings: {
                foreground: '#fa8d3e',
            },
        },
        {
            name: 'Ruby interpolation punctuation',
            scope: ['punctuation.section.embedded'],
            settings: {
                foreground: '#fa8d3e',
            },
        },
        {
            name: 'Interpolation text',
            scope: ['meta.embedded'],
            settings: {
                foreground: '#5c6166',
            },
        },
        {
            name: 'Types fixes',
            scope: ['source.java storage.type', 'source.haskell storage.type', 'source.c storage.type'],
            settings: {
                foreground: '#399ee6',
            },
        },
        {
            name: 'Inherited class type',
            scope: ['entity.other.inherited-class'],
            settings: {
                foreground: '#55b4d4',
            },
        },
        {
            name: 'Lambda arrow',
            scope: ['storage.type.function'],
            settings: {
                foreground: '#fa8d3e',
            },
        },
        {
            name: 'Java primitive variable types',
            scope: ['source.java storage.type.primitive'],
            settings: {
                foreground: '#55b4d4',
            },
        },
        {
            name: 'Function name',
            scope: ['entity.name.function'],
            settings: {
                foreground: '#f2ae49',
            },
        },
        {
            name: 'Function arguments',
            scope: ['variable.parameter', 'meta.parameter'],
            settings: {
                foreground: '#a37acc',
            },
        },
        {
            name: 'Function call',
            scope: ['variable.function', 'variable.annotation', 'meta.function-call.generic', 'support.function.go'],
            settings: {
                foreground: '#f2ae49',
            },
        },
        {
            name: 'Library function',
            scope: ['support.function', 'support.macro'],
            settings: {
                foreground: '#f07171',
            },
        },
        {
            name: 'Imports and packages',
            scope: ['entity.name.import', 'entity.name.package'],
            settings: {
                foreground: '#86b300',
            },
        },
        {
            name: 'Entity name',
            scope: ['entity.name'],
            settings: {
                foreground: '#399ee6',
            },
        },
        {
            name: 'Tag',
            scope: ['entity.name.tag', 'meta.tag.sgml'],
            settings: {
                foreground: '#55b4d4',
            },
        },
        {
            name: 'JSX Component',
            scope: ['support.class.component'],
            settings: {
                foreground: '#399ee6',
            },
        },
        {
            name: 'Tag start/end',
            scope: ['punctuation.definition.tag.end', 'punctuation.definition.tag.begin', 'punctuation.definition.tag'],
            settings: {
                foreground: '#55b4d480',
            },
        },
        {
            name: 'Tag attribute',
            scope: ['entity.other.attribute-name'],
            settings: {
                foreground: '#f2ae49',
            },
        },
        {
            name: 'Library constant',
            scope: ['support.constant'],
            settings: {
                fontStyle: 'italic',
                foreground: '#ed9366',
            },
        },
        {
            name: 'Library class/type',
            scope: ['support.type', 'support.class', 'source.go storage.type'],
            settings: {
                foreground: '#55b4d4',
            },
        },
        {
            name: 'Decorators/annotation',
            scope: ['meta.decorator variable.other', 'meta.decorator punctuation.decorator', 'storage.type.annotation'],
            settings: {
                foreground: '#e6ba7e',
            },
        },
        {
            name: 'Invalid',
            scope: ['invalid'],
            settings: {
                foreground: '#e65050',
            },
        },
        {
            name: 'diff.header',
            scope: ['meta.diff', 'meta.diff.header'],
            settings: {
                foreground: '#c594c5',
            },
        },
        {
            name: 'Ruby class methods',
            scope: ['source.ruby variable.other.readwrite'],
            settings: {
                foreground: '#f2ae49',
            },
        },
        {
            name: 'CSS tag names',
            scope: [
                'source.css entity.name.tag',
                'source.sass entity.name.tag',
                'source.scss entity.name.tag',
                'source.less entity.name.tag',
                'source.stylus entity.name.tag',
            ],
            settings: {
                foreground: '#399ee6',
            },
        },
        {
            name: 'CSS browser prefix',
            scope: [
                'source.css support.type',
                'source.sass support.type',
                'source.scss support.type',
                'source.less support.type',
                'source.stylus support.type',
            ],
            settings: {
                foreground: '#787b8099',
            },
        },
        {
            name: 'CSS Properties',
            scope: ['support.type.property-name'],
            settings: {
                fontStyle: 'normal',
                foreground: '#55b4d4',
            },
        },
        {
            name: 'Search Results Numbers',
            scope: ['constant.numeric.line-number.find-in-files - match'],
            settings: {
                foreground: '#787b8099',
            },
        },
        {
            name: 'Search Results Match Numbers',
            scope: ['constant.numeric.line-number.match'],
            settings: {
                foreground: '#fa8d3e',
            },
        },
        {
            name: 'Search Results Lines',
            scope: ['entity.name.filename.find-in-files'],
            settings: {
                foreground: '#86b300',
            },
        },
        {
            scope: ['message.error'],
            settings: {
                foreground: '#e65050',
            },
        },
        {
            name: 'Markup heading',
            scope: ['markup.heading', 'markup.heading entity.name'],
            settings: {
                fontStyle: 'bold',
                foreground: '#86b300',
            },
        },
        {
            name: 'Markup links',
            scope: ['markup.underline.link', 'string.other.link'],
            settings: {
                foreground: '#55b4d4',
            },
        },
        {
            name: 'Markup Italic',
            scope: ['markup.italic'],
            settings: {
                fontStyle: 'italic',
                foreground: '#f07171',
            },
        },
        {
            name: 'Markup Bold',
            scope: ['markup.bold'],
            settings: {
                fontStyle: 'bold',
                foreground: '#f07171',
            },
        },
        {
            name: 'Markup Bold/italic',
            scope: ['markup.italic markup.bold', 'markup.bold markup.italic'],
            settings: {
                fontStyle: 'bold italic',
            },
        },
        {
            name: 'Markup Code',
            scope: ['markup.raw'],
            settings: {
                background: '#5c616605',
            },
        },
        {
            name: 'Markup Code Inline',
            scope: ['markup.raw.inline'],
            settings: {
                background: '#5c61660f',
            },
        },
        {
            name: 'Markdown Separator',
            scope: ['meta.separator'],
            settings: {
                fontStyle: 'bold',
                background: '#5c61660f',
                foreground: '#787b8099',
            },
        },
        {
            name: 'Markup Blockquote',
            scope: ['markup.quote'],
            settings: {
                foreground: '#4cbf99',
                fontStyle: 'italic',
            },
        },
        {
            name: 'Markup List Bullet',
            scope: ['markup.list punctuation.definition.list.begin'],
            settings: {
                foreground: '#f2ae49',
            },
        },
        {
            name: 'Markup added',
            scope: ['markup.inserted'],
            settings: {
                foreground: '#6cbf43',
            },
        },
        {
            name: 'Markup modified',
            scope: ['markup.changed'],
            settings: {
                foreground: '#478acc',
            },
        },
        {
            name: 'Markup removed',
            scope: ['markup.deleted'],
            settings: {
                foreground: '#ff7383',
            },
        },
        {
            name: 'Markup Strike',
            scope: ['markup.strike'],
            settings: {
                foreground: '#e6ba7e',
            },
        },
        {
            name: 'Markup Table',
            scope: ['markup.table'],
            settings: {
                background: '#5c61660f',
                foreground: '#55b4d4',
            },
        },
        {
            name: 'Markup Raw Inline',
            scope: ['text.html.markdown markup.inline.raw'],
            settings: {
                foreground: '#ed9366',
            },
        },
        {
            name: 'Markdown - Line Break',
            scope: ['text.html.markdown meta.dummy.line-break'],
            settings: {
                background: '#787b8099',
                foreground: '#787b8099',
            },
        },
        {
            name: 'Markdown - Raw Block Fenced',
            scope: ['punctuation.definition.markdown'],
            settings: {
                background: '#5c6166',
                foreground: '#787b8099',
            },
        },
    ],
}

export default theme
