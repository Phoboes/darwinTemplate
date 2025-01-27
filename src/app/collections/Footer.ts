import type { GlobalConfig } from 'payload'

export const Footer: GlobalConfig = {
  slug: 'footer',
  typescript: {
    interface: 'Footer',
  },
  fields: [
    { name: 'Address line 1', type: 'text' },
    { name: 'Address line 2', type: 'text' },
    { name: 'City', type: 'text' },
    { name: 'Postcode', type: 'number' },
    { name: 'Email', type: 'email' },
    { name: 'Phone number', type: 'text' },
  ],
}
