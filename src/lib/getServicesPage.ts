import { getPayload } from 'payload'
import config from '@/payload.config'
const payload = await getPayload({ config })

interface ServicesPageData {
  title: string
  content: string
  richContent: string
}

export default async function getServicesPage(): Promise<ServicesPageData> {
  const result = await payload.findGlobal({
    slug: 'services', // required
    depth: 2,
    locale: 'all',
    fallbackLocale: false,
    overrideAccess: true,
    showHiddenFields: true,
  })

  return result as ServicesPageData
}
