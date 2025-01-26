import getHomePage from "../lib/getHomePage";
import Image from "next/image";
import Footer from "./components/Footer";
import { getContact } from "../lib/getContact";
import ContactButtons from "./components/ContactButtons";

export default async function Home() {
  const data = await getHomePage();
  const contactData = await getContact();
  console.log(data);
  return (
    <>
      <header className="border border-emerald-900 py-4 bg-emerald-300">
        {data.title ? <h1 className="text-3xl">{data.title}</h1> : null}
      </header>
      <main className=" m-8">
        <div
          className="flex flex-col justify-center text-center border border-red-400
        
        "
        >
          {data.image ? (
            <Image
              src={`https://${process.env.NEXT_PUBLIC_AWS_BUCKET}.s3.${process.env.NEXT_PUBLIC_AWS_REGION}.amazonaws.com/${data.image.filename}`}
              width={500}
              height={500}
              title={data.image.title}
              alt={data.image.alt}
              className="justify-center m-auto my-6"
            />
          ) : null}
          {data.content ? (
            <p className="whitespace-pre-wrap border border-green-200 px-4 text-left">
              {data.content}
            </p>
          ) : null}
        </div>
        <ContactButtons
          email={contactData["Email"]}
          phoneNumber={contactData["Phone number"]}
        />
      </main>
      <Footer footerData={contactData} />
    </>
  );
}
