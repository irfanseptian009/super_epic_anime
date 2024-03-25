import React from "react";
import Link from "next/link";

import { authUserSession } from "./../../../../libs/auth";
import prisma from "./../../../../libs/prisma";
import Header from "./../../../../components/AnimeList/Header";

const page = async () => {
  const user = await authUserSession();
  const comments = await prisma.comment.findMany({ where: { user_email: user.email } });

  return (
    <section className="mt-4 px-4 w-full">
      <Header title={"My Comment"} />
      <div className="grid grid-cols-1 py-4 gap-4">
        {comments.map((comment) => {
          return (
            <Link
              href={`/anime/${comment.anime_mal_id}`}
              key={comment.id}
              className="bg-color-primary text-color-dark p-4"
            >
              <p className="text-sm">{comment.anime_title}</p>
              <p className="italic">{comment.comment}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default page;
