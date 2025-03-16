import Link from "next/link";

export default function Navbar() {
  return (

      <nav className="sticky top-0 left-0 flex justify-between max-w-2xl w-full p-4 shadow-md bg-[rgba(67,85,108,0.7)] text-white mx-auto rounded-sm">
      <Link href="/" className="text-xl font-bold">
        ≥
      </Link>
      <div className="space-x-4">
        <Link href="/about" className="hover:text-gray-300">About</Link>
        <Link href="/projects" className="hover:text-gray-300">Projects</Link>
      </div>
    </nav>


  );
}

