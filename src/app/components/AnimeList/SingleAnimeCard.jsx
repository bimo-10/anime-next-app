"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SingleAnimeCard({ api }) {
  return (
    <>
      {api.map((anime) => {
        console.log(anime);
        const { mal_id, title, rank, images, name } = anime;

        return (
          <div className="card w-48 h-96 bg-gray-200 shadow-xl my-4 md:w-56 md:h-[26rem] xl:w-64">
            <figure>
              <Image
                alt={title}
                src={images.webp.image_url}
                width={500}
                height={500}
                className="w-full h-56"
              />
            </figure>
            <div className="absolute w-12 rounded-tl-lg h-12 flex justify-center items-center bg-red-500 text-white">
              <h1 className="">{rank}</h1>
            </div>
            <div className="card-body justify-between px-2">
              <h2 className="font-bold md:card-title text-black">
                {title || name}
              </h2>

              <div className="card-actions justify-end">
                <Link href={`/${mal_id}`}>
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
