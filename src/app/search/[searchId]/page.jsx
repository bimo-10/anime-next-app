import Header from "@/app/components/AnimeList/Header";
import SingleAnimeCard from "@/app/components/AnimeList/SingleAnimeCard";

async function getItems(searchId) {
  const resp = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${searchId}`
  );
  return resp.json();
}

export default async function SearchIdPage({ params }) {
  // console.log(params);
  const { searchId } = params;

  const newParams = decodeURI(searchId);

  // console.log(await getItems(searchId));
  const datas = await getItems(newParams);
  console.log(datas);
  const animePopuler = datas.data;

  return (
    <>
      <main className="py-4 md:px-6 xl:px-8 px-4">
        <Header title={`Daftar pencarian dari ${newParams}...`} />

        {/* POPULER ANIME */}
        <section className="grid place-items-center grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
          <SingleAnimeCard api={animePopuler} />
        </section>
      </main>
    </>
  );
}
