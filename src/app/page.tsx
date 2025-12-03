"use client";

import ProjectsList from "@/components/ProjectsList";
import Link from "next/link";
import { motion } from "framer-motion";
import TextScramble from "@/components/TextScramble";

export default function Home() {
  return (
    <div className="flex flex-col text-gray-400 font-tektu text-md px-4 sm:px-0">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="relative flex flex-col space-y-7 bg-[#191919]"
      >
        <section className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
          <img
            src="/mike-portfolio-site-image.jpg"
            alt="Michael Sollazzo"
            width={135}
            height={135}
            className="rounded-md object-cover w-[135px] h-[135px] sm:w-[135px] sm:h-[135px]"
          />
          <div className="flex flex-col sm:ml-10 text-center sm:text-left">
            <TextScramble
              className="mt-2 sm:mt-7 text-3xl text-[#ebeaea]"
              text="Michael Sollazzo"
            />
            <TextScramble text="Business Analyst & Software Developer" />
          </div>
        </section>

        <p>
          Hello! I’ve been in the tech industry for about 4 years, and for the
          past 3, I’ve been consulting clients on commerce platforms like
          Salesforce and Adobe Commerce, as well as product experience platforms
          like Salsify.
        </p>
      </motion.div>

      <Link href="/about" className="mt-3 underline text-[#ebeaea]">
        Learn More
      </Link>

      <div className="flex flex-col space-y-7 mt-10 bg-[#191919]">
        <h1 className="text-lg underline text-[#ebeaea]">Recent Projects</h1>
        <ProjectsList limit={3} />
        <Link href="/projects" className="underline text-[#ebeaea]">
          View More
        </Link>
      </div>
    </div>
  );
}
