import { getPayload } from 'payload'
import config from '@payload-config'
const payload = await getPayload({ config })

export const getHomePage = async () => {
  const result = await payload.findGlobal({
    slug: 'homepage', // required
    depth: 2,
    locale: 'en',
    fallbackLocale: false,
    overrideAccess: true,
    showHiddenFields: true,
  })

  console.log(result)
  return result
}
