import ProjectsList from "@/components/ProjectsList";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col text-white font-tektu text-lg">
      <div className="flex flex-col space-y-7 bg-[#1e1e1e]">
        <section className="flex ml-10">
          <div className="flex">Image</div>
          <div className="flex flex-col ml-10">
            <div>
              Michael Sollazzo
            </div>
            <div>
              Analyst and Software Developer
            </div>
          </div>
        </section>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dicta porro ut blanditiis rerum aperiam, consequatur recusandae totam eos autem assumenda atque odio! Eius illo cumque minima odit quos magni?
          </p>
          <Link href="/about">Learn More</Link>
      </div>
      <div className="flex flex-col space-y-7 bg-[#1e1e1e]">
          <ProjectsList limit={3} />
          <Link href="/projects">Learn More</Link>
      </div>

    </div>
  )
}
