import { linkProjection } from './link-projection'

export const buttonLinkProjection = `{
  _key,
  _type,
  title,
  url ${linkProjection},
  variant,
  icon,
  newWindow
}`
