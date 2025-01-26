import { Phone, Mail, MapPinHouse } from "lucide-react";
interface FooterData {
  "Address line 1"?: string;
  "Address line 2"?: string;
  City?: string;
  Postcode?: string;
  Email?: string;
  "Phone number"?: string;
}

export default async function Footer({
  footerData,
}: {
  footerData: FooterData;
}) {
  console.log(footerData);
  return (
    <footer className="flex flex-col md:flex-row md:justify-around bg-emerald-300">
      <div className="pt-4 px-8 mr-8 text-left w-full py-1 md:py-4 md:w-1/2">
        <MapPinHouse className="mr-4 inline-block" />
        {footerData["Address line 1"] ? (
          <>
            <p className="inline-block">
              {footerData["Address line 1"]}
              {footerData["Address line 2"] ||
              footerData["City"] ||
              footerData["Postcode"] ? (
                <>,&nbsp;</>
              ) : null}
            </p>
          </>
        ) : null}
        {footerData["Address line 2"] ? (
          <p className="inline-block md:block md:ml-10">
            {footerData["Address line 2"]}
            {footerData["City"] ? <>,&nbsp;</> : null}
          </p>
        ) : null}
        {footerData["City"] ? (
          <p className="inline-block md:block md:ml-10">
            {footerData["City"]}
            {footerData["Postcode"] ? <>,&nbsp;</> : null}
          </p>
        ) : null}
        {footerData["Postcode"] ? (
          <p className="inline-block md:block md:ml-10">
            {`${footerData["Postcode"]}`}
          </p>
        ) : null}
      </div>
      <div className=" px-8 pb-4 text-center md:text-left md:py-4 md:w-1/2 md:ml-12">
        {footerData["Email"] ? (
          <p className="flex flex-row py-1 mr-8 md:justify-start">
            <Mail className="mr-4" />
            <a
              href={`mailto:${footerData["Email"]}`}
              className="hover:font-bold hover:underlinepx-2"
            >
              {footerData["Email"]}
            </a>
          </p>
        ) : null}
        {footerData["Email"] ? (
          <p className="flex flex-row py-1 mr-8 md:justify-start">
            <Phone className="mr-4" />
            <a
              href={`tel:${footerData["Phone number"]}`}
              className="hover:font-bold hover:underline"
            >
              {footerData["Phone number"]}
            </a>
          </p>
        ) : null}
      </div>
    </footer>
  );
}
