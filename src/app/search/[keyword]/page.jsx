import Header from "./../../../components/Dashboard/Header";
import { getAnimeResponse } from "./../../../libs/api-libs";
import AnimeList from "./../../../components/AnimeList/index";

const Page = async ({ params }) => {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword);
  const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`);
  return (
    <>
      <section>
        <Header title={`pencarian untuk ${decodedKeyword}`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
