import getHomePage from "../lib/getHomePage";
import getContact from "../lib/getContact";
import Image from "next/image";
import Footer from "./components/Footer";
import ContactButtons from "./components/ContactButtons";
// import getMeta from "../lib/getMeta";
import { Metadata } from "next";
const data = (await getHomePage()) as HomePageData;
const contactData = (await getContact()) as ContactData;
// const metaData = await getMeta();

interface Media {
  name: string;
  caption: string;
  alternativeText: string;
  url: string;
}

interface HomePageData {
  title: string;
  landingPageImage: Media | undefined;
  content: string;
  secondaryContent: string;
}

interface ContactData {
  email: string;
  phoneNumber: string;
}
export const revalidate = 0;

// export async function generateMetadata(): Promise<Metadata> {
//   return {
//     title: data.title || metaData.title || "Homepage",
//     description:
//       data.content?.slice(0, 160) ||
//       metaData.description ||
//       "Business homepage",
//     openGraph: {
//       title: data.title || metaData.title || "Homepage",
//       description:
//         data.content?.slice(0, 160) ||
//         metaData.description ||
//         "Business homepage",
//       images: data.image
//         ? [
//             {
//               url: data.image.url,
//               width: 1200,
//               height: 630,
//               alt: data.image.alt,
//             },
//           ]
//         : [],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: data.title || metaData.title || "Homepage",
//       description:
//         data.content?.slice(0, 160) ||
//         metaData.description ||
//         "Business homepage",
//       images: data.image ? [data.image.url] : [],
//     },
//     icons: {
//       icon: metaData.favicon?.url
//         ? [
//             { url: metaData.favicon.url, sizes: "32x32", type: "image/png" },
//             { url: metaData.favicon.url, sizes: "192x192", type: "image/png" },
//           ]
//         : undefined,
//       apple: metaData.favicon?.url
//         ? [{ url: metaData.favicon.url, sizes: "180x180", type: "image/png" }]
//         : undefined,
//     },
//     robots: {
//       index: true,
//       follow: true,
//     },
//   };
// }

export default async function Home() {
  console.log(data);
  return (
    <>
      <div className="flex flex-col">
        <main className="flex-grow md:w-2/3 mx-auto shadow-lg">
          {data.title ? (
            <h1 className="text-3xl md:text-4xl py-8 font-bold text-gray-800">
              {data.title}
            </h1>
          ) : null}
          <div className="flex flex-col justify-center text-center pageFonts">
            {data.landingPageImage ? (
              <div className="imageWrap max-w-xl mx-auto mb-8">
                <Image
                  src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${data.landingPageImage.url}`}
                  width={1000}
                  height={1000}
                  title={data.landingPageImage.name}
                  alt={data.landingPageImage.alternativeText}
                />
              </div>
            ) : null}
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
          <ContactButtons
            email={contactData.email}
            phoneNumber={contactData.phoneNumber}
          />
          {data.secondaryTitle ? (
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
              {data.secondaryTitle}
            </h1>
          ) : null}
          {data.secondaryContent ? (
            <p className="whitespace-pre-wrap px-4 max-w-2xl mx-auto py-8 text-sm md:text-base">
              {data.secondaryContent}
            </p>
          ) : null}
        </main>
      </div>
    </>
  );
}
