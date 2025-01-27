import { revalidatePath } from 'next/cache'
import type { GlobalConfig } from 'payload'

export const Meta: GlobalConfig = {
  slug: 'meta',
  typescript: {
    interface: 'Meta',
  },
  hooks: {
    afterChange: [
      async () => {
        revalidatePath(`/`)
      },
    ],
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
