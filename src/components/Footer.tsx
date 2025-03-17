import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col w-full bg-[#191919] text-gray-300 py-8 font-tektur">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 text-center md:text-left w-full">
        <div>
          <h3 className="text-lg font-semibold mb-2">Pages</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/projects" className="hover:text-white">Projects</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Socials</h3>
          <ul className="space-y-2">
            <li>
              <Link href="https://github.com/sollazzo08" target="_blank" className="flex justify-center md:justify-start items-center space-x-2 hover:text-white">
                <span>GitHub</span>
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/msollazzo-cs/" target="_blank" className="flex justify-center md:justify-start items-center space-x-2 hover:text-white">
                <span>LinkedIn</span>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Other</h3>
          <ul className="space-y-2">
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link href="/resume" className="hover:text-white">Resume</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
