interface AboutPageData {
  title: string
  content: object[]
}

export default async function getAboutPage(): Promise<AboutPageData> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/about?populate=*`,
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
    throw new Error('Failed to fetch About page data')
  }

  const res = await response.json()

  return {
    title: res.data.title,
    content: res.data.blocks,
  }
}
