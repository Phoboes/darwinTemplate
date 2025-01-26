import { getPayload } from 'payload'
import config from '@/payload.config'
const payload = await getPayload({ config })

interface ContactData {
  'Address line 1': string | undefined
  'Address line 2': string | undefined
  City: string | undefined
  Postcode: string | undefined
  Email: string
  'Phone number': string
}

export default async function getContact(): Promise<ContactData> {
  const result = await payload.findGlobal({
    slug: 'footer', // required
    depth: 2,
    locale: 'all',
    fallbackLocale: false,
    overrideAccess: true,
    showHiddenFields: true,
  })

  console.log('RESULT:', result)

  const returnObj = {
    'Address line 1': result['Address line 1'],
    'Address line 2': result['Address line 2'],
    City: result['City'],
    Postcode: result['Postcode'],
    Email: result['Email'],
    'Phone number': result['Phone number'],
  }

  return returnObj as ContactData
}
