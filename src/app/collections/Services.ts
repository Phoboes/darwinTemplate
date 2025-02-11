import type { GlobalConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const Services: GlobalConfig = {
  slug: 'services',
  typescript: {
    interface: 'Services',
  },
  fields: [
    { name: 'title', type: 'text' },
    { name: 'content', type: 'textarea' },
    { name: 'richContent', type: 'richText' },
  ],
}
