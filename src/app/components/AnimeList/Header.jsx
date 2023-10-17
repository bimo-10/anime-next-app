import Link from "next/link";
import React from "react";

export default function Header({ title, linkHref, linkTitle }) {
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-xl">{title}</h1>
        <Link href={linkHref}>
          <h3 className="hover:text-blue-500">{linkTitle}</h3>
        </Link>
      </div>
    </>
  );
}
