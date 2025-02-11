import type { GlobalConfig } from 'payload'

export const About: GlobalConfig = {
  slug: 'about',
  typescript: {
    interface: 'About',
  },
  fields: [
    { name: 'title', type: 'text' },
    { name: 'content', type: 'textarea' },
  ],
}
