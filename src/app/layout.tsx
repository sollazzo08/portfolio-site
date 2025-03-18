import "@/app/globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html className="bg-[#191919] font-tektur" lang="en">
      <body className="flex flex-col items-center min-h-screen">
        <Navbar />
        <main className="flex max-w-2xl w-full py-10 flex-grow bg-[##1E1E24]">{children}</main>
        <footer className="flex max-w-2xl w-full text-center border-t border-white">
          <Footer/>
        </footer>
      </body>
    </html>
  );
}
