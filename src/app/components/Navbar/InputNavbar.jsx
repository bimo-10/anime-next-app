"use client";

import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";

export default function InputNavbar() {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (eve) => {
    // console.log(searchRef);
    if (!searchRef.current.value) return;
    if (eve.key === "Enter" || eve.type === "click") {
      eve.preventDefault();

      const value = searchRef.current.value;
      router.push(`/search/${value}`);
    }
  };

  return (
    <>
      <div className="flex mt-4">
        <input
          type="text"
          placeholder="Search..."
          className="input bg-white w-full text-black xl:h-16 xl:px-8"
          ref={searchRef}
          onKeyDown={handleSearch}
        />
        <button
          className="absolute top-[5.60rem] end-10 xl:top-14"
          onClick={handleSearch}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-blue-500 xl:w-12 xl:h-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
