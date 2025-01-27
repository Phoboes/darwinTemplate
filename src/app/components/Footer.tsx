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
    <footer className="navFooter">
      <div className="flex flex-col md:flex-row md:justify-around max-w-4xl mx-auto">
        <div className="pt-4 px-8 mr-8 text-left w-full py-1 min-w-80 max-w-100 md:py-4 md:w-1/2">
          {footerData["Address line 1"] ||
          footerData["Address line 2"] ||
          footerData["City"] ||
          footerData["Postcode"] ? (
            <MapPinHouse className="mr-4 inline-block" />
          ) : null}
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
        <div className=" px-8 pb-4 text-center min-w-80 max-w-100 md:text-left md:py-4 md:w-1/2 md:ml-12">
          {footerData["Email"] ? (
            <p className="flex flex-row py-1 mr-8">
              <Mail className="mr-4" />
              <a href={`mailto:${footerData["Email"]}`}>
                {footerData["Email"]}
              </a>
            </p>
          ) : null}
          {footerData["Email"] ? (
            <p className="flex flex-row py-1 mr-8">
              <Phone className="mr-4" />
              <a href={`tel:${footerData["Phone number"]}`}>
                {footerData["Phone number"]}
              </a>
            </p>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
