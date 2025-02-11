import getAboutPage from "../../lib/getAboutPage";
import { Metadata } from "next";
const data = (await getAboutPage()) as AboutPageData;

interface AboutPageData {
  title: string;
  content: string;
}

export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: data.title || "About",
    description: data.content?.slice(0, 160) || "Business about",
    openGraph: {
      title: data.title || "About",
      description: data.content?.slice(0, 160) || "Business about",
      images: [],
    },
    twitter: {
      card: "summary_large_image",
      title: data.title || "About",
      description: data.content?.slice(0, 160) || "Business about",
      images: [],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow md:w-2/3 py-4 mx-auto shadow-lg">
          {data.title ? (
            <h1 className="text-3xl md:text-4xl font-bold pageTitle pb-4">
              {data.title}
            </h1>
          ) : null}
          <div className="flex flex-col justify-center text-center pageFonts">
            {data.content ? (
              <p className="whitespace-pre-wrap px-4 max-w-2xl mx-auto py-8 text-sm md:text-base">
                {data.content}
              </p>
            ) : (
              <h1 className="text-center text-xl font-bold align-middle">
                You have not provided any data yet.
              </h1>
            )}
          </div>
        </main>
      </div>
    </>
  );
}
