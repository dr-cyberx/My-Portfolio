"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 mt-20 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a seasoned Full Stack UI Developer with 4+ years of experience in building scalable, responsive web applications using React.js, Next.js, Node.js, and modern web technologies. Proficient in JavaScript/TypeScript, SCSS, Tailwind CSS, and database management with MongoDB and SQL, I specialize in both frontend and backend development. Skilled in DevOps practices, including AWS, Docker, and CI/CD, I currently work at AECC Global delivering high-quality full-stack solutions. I have solved 300+ LeetCode problems and earned a 5-Star HackerRank rating. Passionate about AI integration and creating user-centric applications to enhance workflows and experiences.
      </p>
    </motion.section>
  );
}
