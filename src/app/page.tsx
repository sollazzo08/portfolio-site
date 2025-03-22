import ProjectsList from "@/components/ProjectsList";
import Link from "next/link";
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col text-gray-400 font-tektu text-md">
      <div className="flex flex-col space-y-7 bg-[#191919]">
        <section className="flex">
          <Image
          src="/github-image.jpeg" // Replace with actual path
          alt="Michael Sollazzo"
          width={80} // Adjust as needed
          height={80} // Adjust as needed
          className="rounded-md object-cover"
        />
          <div className="flex flex-col ml-10">
            <div className="text-3xl text-[#ebeaea]">
              Michael Sollazzo
            </div>
            <div>
              Technical Consultant & Developer
            </div>
          </div>
        </section>
          <p>I am Technical Consultant & Developer who leads all Salsify PIM implementations at Huge | Hero Digital.
          </p>
      </div>
      <Link href="/about" className="mt-3 underline text-[#ebeaea]">Learn More</Link>
      <div className="flex flex-col space-y-7 mt-10 bg-[#191919]">
      <h1 className="text-lg underline text-[#ebeaea]">Recent Projects</h1>
          <ProjectsList limit={3} />
          <Link href="/projects" className="underline text-[#ebeaea]">View More</Link>
      </div>

    </div>
  )
}
