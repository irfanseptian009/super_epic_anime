import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse } from "./libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit-8");
  return (
    <>
      <section>
        <Header title="popular" linkTitle="see more" linkHref="/Popular" />
        <AnimeList api={topAnime} />
      </section>
    </>
  );
};

export default Page;
