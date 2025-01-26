import { Phone, Mail } from "lucide-react";

interface ContactButtonsProps {
  phoneNumber: string;
  email: string;
}

export default function ContactButtons({
  phoneNumber,
  email,
}: ContactButtonsProps) {
  return (
    <div className="flex flex-row justify-around my-12">
      <a
        href={`tel:${phoneNumber}`}
        className="flex flex-row py-4 px-8 hover:shadow-lg shadow-gray-800 rounded-2xl bg-gray-400 text-white bold hover:text-gray-100 hover:bg-gray-500 just"
      >
        <Phone className="mr-4" /> Call us
      </a>
      <a
        href={`mailto:${email}`}
        className="flex flex-row py-4 px-8 hover:shadow-lg shadow-gray-800  rounded-2xl bg-gray-400 text-white bold hover:text-gray-100 hover:bg-gray-500 just"
      >
        <Mail className="mr-4" /> Email us
      </a>
    </div>
  );
}
