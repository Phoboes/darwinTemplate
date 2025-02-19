interface ServicesPageData {
  title: string
  content: object[]
}

export default async function getServicesPage(): Promise<ServicesPageData> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/services?populate=*`,
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
    throw new Error('Failed to fetch Services page data')
  }

  const res = await response.json()
  console.log(res)

  return {
    title: res.data.title,
    content: res.data.content,
  }
}
