import { defineQuery } from 'next-sanity'
import { client } from '../client'
import { POSTS_QUERYResult } from '../types'

const POSTS_QUERY = defineQuery(`*[_type == "post" && defined(slug.current)][0...12]{
  _id, title, slug
}`)

export const fetchPosts = () => client.fetch<POSTS_QUERYResult>(POSTS_QUERY)
