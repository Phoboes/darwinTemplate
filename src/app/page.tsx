import getHomePage from "../lib/getHomePage";
import getContact from "../lib/getContact";
import Image from "next/image";
import Footer from "./components/Footer";
import ContactButtons from "./components/ContactButtons";

interface Media {
  filename: string;
  title: string;
  alt: string;
  url: string;
}

interface HomePageData {
  title: string;
  image: Media;
  content: string;
}

interface ContactData {
  "Address line 1": string | undefined;
  "Address line 2": string | undefined;
  City: string | undefined;
  Postcode: string | undefined;
  Email: string;
  "Phone number": string;
}

export const revalidate = 0;

export default async function Home() {
  const data = (await getHomePage()) as HomePageData;
  const contactData = (await getContact()) as ContactData;
  console.log(data);
  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-4 navFooter">
        {data.title ? (
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            {data.title}
          </h1>
        ) : null}
      </header>
      <main className="flex-grow m-8">
        <div className="flex flex-col justify-center text-center pageFonts">
          {data.image ? (
            <Image
              src={data.image.url}
              width={500}
              height={500}
              // fill={true}
              title={data.image.title}
              alt={data.image.alt}
              className="justify-center m-auto my-6"
            />
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
          email={contactData.Email}
          phoneNumber={contactData["Phone number"]}
        />
      </main>
      <Footer footerData={contactData} />
    </div>
  );
}
