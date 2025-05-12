import { topNavigation } from './objects/top-navigation'
import { bottomNavigation, bottomNavigationGroup } from './objects/bottom-navigation'
import { hero } from './objects/home/hero'
import { buttonLink } from './objects/button-link'
import { testimonial, testimonials } from './objects/home/testimonial'
import { step, steps } from './objects/home/step'
import { quote } from './objects/home/quote'
import { codeExample } from './objects/home/code-example'
import { useCases } from './objects/home/use-cases'
import { guides } from './objects/home/guides'
import { link } from './objects/link'
import { docReference } from './objects/home/doc-reference'
import { textLink } from './objects/text-link'
import { richText } from './objects/rich-text'
import { codeFile } from './objects/code-file'

import { home } from './documents/home'
import { settings } from './documents/settings'
import { guide } from './documents/guide'
import { useCase } from './documents/use-case'

export const schemaTypes = [
    // objects
    topNavigation,
    bottomNavigation,
    bottomNavigationGroup,
    link,
    textLink,
    buttonLink,
    docReference,
    richText,
    hero,
    testimonial,
    testimonials,
    step,
    steps,
    quote,
    codeFile,
    codeExample,
    useCases,
    guides,

    // documents
    home,
    settings,
    guide,
    useCase,
]
