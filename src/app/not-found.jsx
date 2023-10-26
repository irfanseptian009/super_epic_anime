"use client";
import { FileSearch } from "@phosphor-icons/react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-color-primary">
      <h1 className="text-6xl font-bold mb-2"><FileSearch className="w-full"/>404 Error </h1>
      <p className="text-xl">Page not found</p>
	  <Link href="/" className="underline">Back to SEA</Link>
    </div>
  );
};

export default NotFoundPage;
