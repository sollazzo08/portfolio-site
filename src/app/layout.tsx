import "@/app/globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html className="bg-[#1e1e1e]" lang="en">
      <body className="flex flex-col items-center min-h-screen">
        <Navbar />
        <main className="flex max-w-2xl w-full py-10 flex-gro bg-[#1e1e1e]">{children}</main>
        <footer className="flex max-w-2xl w-full text-center border-t border-white mt-10">
          <Footer/>
        </footer>
      </body>
    </html>
  );
}
