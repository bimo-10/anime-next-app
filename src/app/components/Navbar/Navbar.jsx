"use client";
import React from "react";
import Link from "next/link";
import InputNavbar from "./InputNavbar";

export default function Navbar() {
  return (
    <>
      <header className="xl:flex justify-between items-center p-8 sticky top-0 z-10 bg-success">
        <Link href={"/"}>
          <h1 className="text-2xl font-bold text-cyan-800 xl:text-4xl">
            Anime Next App
          </h1>
        </Link>
        <InputNavbar />
      </header>
    </>
  );
}
