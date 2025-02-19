interface ContactData {
  addressLine1: string | undefined
  addressLine2: string | undefined
  city: string | undefined
  postcode: string | undefined
  email: string
  phoneNumber: string
}

export default async function getContact(): Promise<ContactData> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/contact?populate=*`,
    {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
      next: {
        revalidate: 0, // revalidate cache every 60 seconds
      },
    },
  )

  if (!response.ok) {
    throw new Error('Failed to fetch homepage data')
  }

  const res = await response.json()
  return {
    addressLine1: res.data.addressLine1,
    addressLine2: res.data.addressLine2,
    city: res.data.city,
    postcode: res.data.postcode,
    email: res.data.email,
    phoneNumber: res.data.phoneNumber,
  }
}
