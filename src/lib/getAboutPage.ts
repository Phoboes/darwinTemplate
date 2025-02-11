import { getPayload } from 'payload'
import config from '@/payload.config'
const payload = await getPayload({ config })

interface AboutPageData {
  title: string
  content: string
}

export default async function getAboutPage(): Promise<AboutPageData> {
  const result = await payload.findGlobal({
    slug: 'about', // required
    depth: 2,
    locale: 'all',
    fallbackLocale: false,
    overrideAccess: true,
    showHiddenFields: true,
  })

  return result as AboutPageData
}
