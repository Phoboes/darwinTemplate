import { getPayload } from 'payload'
import config from '@/payload.config'
const payload = await getPayload({ config })

export default async function getMeta() {
  const result = await payload.findGlobal({
    slug: 'meta', // required
    depth: 2,
    locale: 'all',
    fallbackLocale: false,
    overrideAccess: true,
    showHiddenFields: true,
  })

  return result
}
