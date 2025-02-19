interface Media {
  name: string
  caption: string
  alternativeText: string
  url: string
}

interface HomePageData {
  title: string
  landingPageImage: Media
  content: string
  secondaryTitle: string
  secondaryContent: string
}

export default async function getHomePage(): Promise<HomePageData> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/home?populate=*`,
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
    title: res.data.title,
    landingPageImage: res.data.landingPageImage,
    content: res.data.content,
    secondaryTitle: res.data.secondaryTitle,
    secondaryContent: res.data.secondaryContent,
  }
}
