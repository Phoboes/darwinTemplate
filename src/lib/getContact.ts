import { getPayload } from 'payload'
import config from '@/payload.config'
const payload = await getPayload({ config })

export const getContact = async () => {
  const result = await payload.findGlobal({
    slug: 'footer', // required
    depth: 2,
    locale: 'en',
    fallbackLocale: false,
    overrideAccess: true,
    showHiddenFields: true,
  })

  return result
}
