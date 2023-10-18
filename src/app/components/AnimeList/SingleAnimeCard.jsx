"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SingleAnimeCard({ api }) {
  console.log(api.data);
  return (
    <>
      {api.data.map((anime) => {
        return (
          <div className="card w-64 h-96 bg-gray-200 shadow-xl my-4 md:h-[26rem]">
            <figure>
              <Image
                alt={anime.title}
                src={anime.images.webp.image_url}
                width={500}
                height={500}
                className="w-full h-56"
              />
            </figure>
            <div className="absolute w-12 rounded-tl-lg h-12 flex justify-center items-center bg-red-500 text-white">
              <h1 className="">{anime.rank}</h1>
            </div>
            <div className="card-body justify-between px-2">
              <h2 className="font-bold md:card-title text-black">
                {anime.title}
              </h2>

              <div className="card-actions justify-end">
                <Link href={`/${anime.mal_id}`}>
                  <button className="btn btn-primary btn-xs">
                    Lihat Detail
                  </button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
