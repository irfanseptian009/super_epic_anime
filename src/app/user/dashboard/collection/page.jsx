import Image from "next/image";
import Link from "next/link";
import Header from "../../../../components/Dashboard/Header";
import { authUserSession } from "./../../../../libs/auth";

const page = async () => {
  const user = await authUserSession();
  const collection = await prisma.collection.findMany({
    where: { user_email: user.email },
  });
  return (
    <section className="mt-4 px-4 w-full">
      <Header title={"my collection"} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {collection.map((collect, index) => {
          return (
            <Link
              key={index}
              href={`/anime/${collect.anime_mal_id}`}
              className="relative border-2 border-color-accent"
            >
              <Image
                src={collect.anime_image}
                alt={collect.anime_image}
                width={350}
                height={350}
                className="w-full"
              />
              <div className=" absolute flex items-center justify-center bottom-0 w-full bg-color-accent">
                <h5 className="text-xl text-center">{collect.anime_tittle}</h5>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default page;
