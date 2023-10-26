

import NavBar from "@/components/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "super epic",
  description: "list game game di epic store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-color-dark `} suppressHydrationWarning={true}>
       <NavBar/>
        {children}
      </body>
    </html>
  );
}
