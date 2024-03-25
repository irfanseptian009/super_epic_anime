import React from "react";
import { authUserSession } from "./../../../libs/auth";
import Image from "next/image";
import Link from "next/link";

const page = async () => {
  const user = await authUserSession();
  return (
    <div className="mt-8 text-color-primary border-color-dark flex flex-col justify-center items-center">
      <h5 className="text-2xl font-bold ">Welcome, {user.name}</h5>
      <Image
        src={user.image}
        alt="..."
        width={250}
        height={250}
        className="rounded-md mt-3"
      />

      <div className=" flex flex-wrap gap-4 py-8 mt-5">
        <Link
          href="/user/dashboard/collection"
          className="
		bg-color-accent text-color-dark font-bold px-4 py-3 text-xl rounded-md"
        >
          my collection
        </Link>
        <Link
          href="/user/dashboard/comment"
          className="bg-color-accent text-color-dark font-bold px-4 py-3 text-xl rounded-md"
        >
          my comment
        </Link>
      </div>
    </div>
  );
};

export default page;
