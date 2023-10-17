import React from "react";
import SingleAnimeCard from "../components/AnimeList/SingleAnimeCard";

async function getItems() {
  const resp = await fetch(`https://api.jikan.moe/v4/top/anime`);

  // if (!resp.ok) throw new Error("Failed to fetch data");

  return resp.json();
}

export default async function PopulerAnime() {
  console.log(await getItems());

  const datas = await getItems();
  const populerAnime = datas.data;
  return (
    <>
      <section className=" py-4 md:px-6 xl:px-8">
        <div className="grid place-items-center grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
          <SingleAnimeCard api={populerAnime} />
        </div>
      </section>
    </>
  );
}
