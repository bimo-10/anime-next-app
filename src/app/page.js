import axios from "axios";
import SingleAnimeCard from "./components/AnimeList/SingleAnimeCard";
import Link from "next/link";
import Header from "./components/AnimeList/Header";

async function getItems() {
  const resp = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`
  );
  return resp.json();
}

async function getTopCharacter() {
  const resp = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/characters?limit=10`
  );
  return resp.json();
}

export default async function Home() {
  const datas = await getItems();
  const animePopuler = datas.data;
  console.log(animePopuler);

  const getCharacter = await getTopCharacter();
  const topCharacter = getCharacter.data;
  console.log(topCharacter);

  return (
    <>
      {/* TOP POPULER ANIME */}
      <main className="py-4 md:px-6 xl:px-8 px-4">
        <Header
          title="Top Anime Populer"
          linkHref={"/populer-anime"}
          linkTitle={"Lihat Semua ->"}
        />

        {/* POPULER ANIME */}
        <section className="grid place-items-center grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
          <SingleAnimeCard api={animePopuler} />
        </section>
      </main>

      {/* TOP POPULER CHARACTER */}
      <main className="py-4 md:px-6 xl:px-8 px-4">
        <Header
          title="Top Character Populer"
          linkHref={"/populer-character"}
          linkTitle={"Lihat Semua ->"}
        />

        {/* POPULER ANIME */}
        <section className="grid place-items-center grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
          <SingleAnimeCard api={topCharacter} />
        </section>
      </main>
    </>
  );
}
