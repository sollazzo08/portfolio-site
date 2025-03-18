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
            <div className="text-3xl">
              Michael Sollazzo
            </div>
            <div>
              Analyst and Software Developer
            </div>
          </div>
        </section>
          <p>
          Business analyst and Salsify expert with a background in software development. I specialize in optimizing product information management while leveraging my technical skills to bridge the gap between business needs and technology-driven solutions.
          </p>
      </div>
      <Link href="/about" className="mt-3">Learn More</Link>
      <div className="flex flex-col space-y-7 mt-10 bg-[#191919]">
      <h1 className="text-2xl underline">Recent Projects</h1>
          <ProjectsList limit={3} />
          <Link href="/projects">View More</Link>
      </div>

    </div>
  )
}
