import Link from "next/link";
import "@/app/globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html className="bg-amber-600" lang="en">
      <body className="flex flex-col items-center min-h-screen">
        {/* Navbar */}
        <nav className="flex justify-between max-w-2xl w-full p-4 w-shadow bg-gray-800 text-white">
          <Link href="/" className="text-xl font-bold ">Portfolio</Link>
          <div className="space-x-4">
            <Link href="/about" className="hover:text-gray-300">About</Link>
            <Link href="/projects" className="hover:text-gray-300">Projects</Link>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex max-w-2xl w-full bg-white flex-grow">{children}</main>

        {/* Footer */}
        <footer className="flex max-w-2xl w-full text-center p-4 border-t color-mint-500 bg-amber-200">
          © 2025 My Portfolio
        </footer>
      </body>
    </html>
  );
}
