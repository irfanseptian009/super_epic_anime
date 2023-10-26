import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`
  );
  const topAnime = await response.json();
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
