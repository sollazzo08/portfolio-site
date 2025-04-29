'use client'

import ProjectsList from "@/components/ProjectsList";
import Link from "next/link";

import {motion} from 'framer-motion';

export default function Home() {
  return (
    <div className="flex flex-col text-gray-400 font-tektu text-md">
      <motion.div
          initial={{ opacity: 0, scale: 0.95 }} // Start hidden and a little lower
          animate={{ opacity: 1, scale: 1 }}  // Animate to fully visible and back to normal position
          transition={{ duration: 1.5, ease: 'easeOut' }} // Timing
          className="relative flex flex-col space-y-7 bg-[#191919]"
      >
        <section className="flex">
          <img
          src="/mike&sawyer3.jpg"
          alt="Michael Sollazzo"
          width="135"
          height="135"
          className="rounded-md object-cover"
        />
          <div className="flex flex-col ml-10">
            <div className="mt-7 text-3xl text-[#ebeaea]">
              Michael Sollazzo
            </div>
            <div>
              Technical Consultant & Developer
            </div>
          </div>
        </section>
          <p>I am Technical Consultant & Developer who leads all Salsify PIM implementations at Huge | Hero Digital.
          </p>
      </motion.div>

      <Link href="/about" className="mt-3 underline text-[#ebeaea]">Learn More</Link>
      <div className="flex flex-col space-y-7 mt-10 bg-[#191919]">
      <h1 className="text-lg underline text-[#ebeaea]">Recent Projects</h1>
          <ProjectsList limit={3} />
          <Link href="/projects" className="underline text-[#ebeaea]">View More</Link>
      </div>

    </div>
  )
}
