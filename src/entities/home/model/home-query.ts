import { client, HOME_QUERYResult } from '@/shared/sanity'
import { groq } from 'next-sanity'

const linkProjection = `{
    _type,
    ...select(
      mode == "external" => {
        "mode": "external",
        url
      },
      mode == "guide-list" => {
        "mode": "guide-list",
      },
      mode == "guide" => {
        "mode": "guide",
        guide -> {
          _id,
          _type,
          title,
          "slug": slug.current
        }
      },
      mode == "home" => {
        "mode": "home",
      },
      mode == "use-case-list" => {
        "mode": "use-case-list",
      },
      mode == "use-case" => {
        "mode": "use-case",
        useCase -> {
          _id,
          title,
          "slug": slug.current
        }
      }
    )
}`

const buttonLinkProjection = `{
  _key,
  _type,
  title,
  url ${linkProjection},
  variant,
  icon,
  newWindow
}`

const codeFileProjection = `{
  _key,
  _type,
  name,
  type,
  code
}`

const docsLinkProjection = `...select(
  defined(docsLinkTitle) && defined(docsLink) => {
    "docs": {
      "title": docsLinkTitle,
      "link": docsLink ${linkProjection}
    }
  }
)`

const heroProjection = `{
  title,
  content,
  links[] ${buttonLinkProjection},
}`

const testimonialsProjection = `{
  title,
  content[] {
    _key,
    _type,
    "logo": logo.asset -> url,
    name,
    ...select(
      layout == "small" => {
        "layout": "small",
      },
      layout == "medium" => {
        "layout": "medium",
        testimonial
      },
      layout == "large" => {
        "layout": "large",
        testimonial
      },
    )
  }
}`

const stepsProjection = `{
  title,
  content[] {
    _key,
    _type,
    title,
    description
  }
}`

const useCasesProjection = `{
  title,
  ...select(
    mode == "latest" => {
      "mode": "latest",
      "amount": latestAmount
    },
    mode == "specific" => {
      "mode": "specific",
      references[] -> {
        _id,
        _type,
        title,
        description,
        "slug": slug.current,
        "cover": cover.asset -> url
      }
    },          
  )
}`

const quoteProjection = `{
  "logo": logo.asset -> url,
  name,
  testimonial
}`

const codeExamplesProjection = `{
  title,
  content[] ${codeFileProjection}
}`

const guidesProjection = `{
  title,
  ...select(
    mode == "latest" => {
      "mode": "latest",
      "amount": latestAmount
    },
    mode == "specific" => {
      "mode": "specific",
      references[] -> {
        _id,
        _type,
        title,
        description,
        publishedAt,
        "slug": slug.current,
        "cover": cover.asset -> url
      }
    },          
  )
}`

const HOME_QUERY = groq`*[_id == "home"] {
  "content": content[] {
    _key,
    _type,

    ${docsLinkProjection},

    ...select(
      _type == "hero" => ${heroProjection},
      _type == "testimonials" => ${testimonialsProjection},
      _type == "steps" => ${stepsProjection},
      _type == "use-cases" => ${useCasesProjection},
      _type == "quote" => ${quoteProjection},
      _type == "code-examples" => ${codeExamplesProjection},
      _type == "guides" => ${guidesProjection}
    )
  }
}[0].content`

export const fetchHome = () => client.fetch<HOME_QUERYResult>(HOME_QUERY)
