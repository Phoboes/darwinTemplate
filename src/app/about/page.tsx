import getAboutPage from "../../lib/getAboutPage";
import { Metadata } from "next";
import styles from "./page.module.scss";
const data = (await getAboutPage()) as AboutPageData;
import ReactMarkdown from "react-markdown";

interface AboutPageData {
  title: string;
  content: {
    body: string;
  }[];
}

export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: data.title || "About",
    description: data.content?.[0]?.body.slice(0, 160) || "Business about",
    openGraph: {
      title: data.title || "About",
      description: data.content?.[0]?.body.slice(0, 160) || "Business about",
      images: [],
    },
    twitter: {
      card: "summary_large_image",
      title: data.title || "About",
      description: data.content?.[0]?.body.slice(0, 160) || "Business about",
      images: [],
    },

    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: "/about",
    },
  };
}

export default async function About() {
  console.log(data.content);
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <main
          className={`flex-grow md:w-2/3 py-4 mx-auto shadow-lg ${styles.main}`}
        >
          <div className={` w-1/2 m-auto ${styles.wrapper}`}>
            {data.title ? (
              <h1 className="text-3xl md:text-4xl font-bold pageTitle pb-4">
                {data.title}
              </h1>
            ) : null}
            {data.content?.[0]?.body ? (
              <ReactMarkdown>{data.content[0].body}</ReactMarkdown>
            ) : (
              <p>No content available</p>
            )}
          </div>
        </main>
      </div>
    </>
  );
}
