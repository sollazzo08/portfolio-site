import Link from "next/link";

export default function Navbar() {
  return (

      <nav className="sticky top-0 left-0 flex justify-between max-w-2xl w-full p-4 shadow-md bg-[#284569de] text-white mx-auto rounded-sm  border-b-1 border-b-gray-100 backdrop-blur">
      <Link href="/" className="text-xl font-bold">
      OO1010
      </Link>
      <div className="space-x-4">
        <Link href="/about" className="hover:text-gray-300">About</Link>
        <Link href="/projects" className="hover:text-gray-300">Projects</Link>
      </div>
    </nav>


  );
}

