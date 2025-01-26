import { getPayload } from 'payload'
import config from '@/payload.config'
const payload = await getPayload({ config })

interface Media {
  filename: string
  title: string
  alt: string
}

interface HomePageData {
  title: string
  image: Media
  content: string
}

export default async function getHomePage(): Promise<HomePageData> {
  const result = await payload.findGlobal({
    slug: 'homepage', // required
    depth: 2,
    locale: 'en',
    fallbackLocale: false,
    overrideAccess: true,
    showHiddenFields: true,
  })

  return result as HomePageData
}
