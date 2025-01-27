import type { GlobalConfig } from 'payload'

export const Meta: GlobalConfig = {
  slug: 'meta',
  typescript: {
    interface: 'Meta',
  },

  fields: [
    { name: 'title', type: 'text' },
    {
      name: 'favico',
      type: 'upload',
      relationTo: 'media',
    },
    { name: 'description', type: 'text' },
  ],
}
