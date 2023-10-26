import Link from "next/link"
import InputSearch from "./InputSearch"

const NavBar = () => {
	return (
		<header className="bg-color-accent">
		<div className="flex md:flex-row flex-col justify-between p-4 gap-2 md:items-center">
		<Link href="/" className="font-bold text-white text-2xl">SUPER EPIC ANIME</Link>
	<InputSearch/>
		</div>
		</header>
	)
}

export default NavBar