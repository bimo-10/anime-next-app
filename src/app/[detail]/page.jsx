import axios from "axios";

import Link from "next/link";
import React from "react";

async function getAnimeDetail(detail) {
  const data = await fetch(`https://api.jikan.moe/v4/anime/${detail}`);
  return data.json();
}

export default async function Detailpage({ params: { detail } }) {
  //   console.log(params);
  console.log(await getAnimeDetail(detail));
  const datas = await getAnimeDetail(detail);
  const data = datas.data;

  let number_string = data.members.toString(),
    sisa = number_string.length % 3,
    member = number_string.substr(0, sisa),
    ribuan = number_string.substr(sisa).match(/\d{3}/g);

  if (ribuan) {
    let separator = sisa ? "." : "";
    member += separator + ribuan.join(".");
  }
  //   console.log(data.genres);

  return (
    <>
      {/* HERO CONTAINER */}
      <div className="hero min-h-screen bg-base-200">
        {/* HERO CONTENT */}
        <div className="hero-content flex-col xl:gap-10 lg:flex-row">
          {/* IMAGE */}
          <img
            src={data.images.webp.image_url}
            alt={data.title}
            className="max-w-sm rounded-lg shadow-2xl xl:w-96"
          />
          <div>
            {/* TITLE */}
            <h1 className="text-5xl font-bold">{data.title}</h1>

            {/* SCORE */}
            <div className="flex text-center gap-6 my-4">
              <div>
                <p className="text-xl">Score:</p>
                <p className="text-2xl text-warning">#{data.score}</p>
              </div>
              <div>
                <p className="text-xl">Rank:</p>
                <p className="text-2xl text-warning">#{data.rank}</p>
              </div>
              <div>
                <p className="text-xl">Popularity:</p>
                <p className="text-2xl text-warning">#{data.popularity}</p>
              </div>
              <div>
                <p className="text-xl">Member:</p>
                <p className="text-2xl text-warning">{member}</p>
              </div>
            </div>

            {/* GENRES */}
            <div className="flex gap-4">
              {data.genres.map((genre) => {
                return (
                  <p className="bg-success rounded-lg py-1 px-4 text-white">
                    {genre.name}
                  </p>
                );
              })}
            </div>

            {/* STUDIO */}
            <div className="flex mt-4 gap-4">
              <p>{data.type}</p>
              <p>{data.season}</p>
              {data.studios.map((studio) => {
                return <p>{studio.name}</p>;
              })}
            </div>

            {/* SINOPSIS */}
            <p className="py-6 text-justify">{data.synopsis}</p>
          </div>
        </div>
      </div>
    </>
  );
}
