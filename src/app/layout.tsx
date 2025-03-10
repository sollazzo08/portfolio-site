import Link from "next/link";
import "@/app/globals.css"; 

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="background text-foreground min-h-screen flex flex-col">
        {/* Navbar */}
        <nav className="flex justify-between p-4 shadow bg-gray-800 text-white">
          <Link href="/" className="text-xl font-bold ">Portfolio</Link>
          <div className="space-x-4">
            <Link href="/about" className="hover:text-gray-300">About</Link>
            <Link href="/projects" className="hover:text-gray-300">Projects</Link>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-grow p-6">{children}</main>

        {/* Footer */}
        <footer className="text-center p-4 mt-8 border-t color-mint-500">
          © 2025 My Portfolio
        </footer>
      </body>
    </html>
  );
}
