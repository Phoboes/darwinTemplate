"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header({ title }: { title: string }) {
  const pathname = usePathname();

  console.log(pathname);
  return (
    <header>
      <div className="flex flex-row justify-around py-4 space-x-12 max-w-3xl mx-auto border-red-500 border">
        <Link
          href="/"
          className={pathname === "/" ? "underline cursor-default" : ""}
        >
          {title}
        </Link>
        <Link
          href="/about"
          className={pathname === "/about" ? "underline cursor-default" : ""}
        >
          About us
        </Link>
        <Link
          href="/services"
          className={pathname === "/services" ? "underline cursor-default" : ""}
        >
          Our Services
        </Link>
      </div>
    </header>
  );
}
