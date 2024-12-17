"use client";

import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter'
import { skillsData } from "@/lib/data";

export default function SectionDivider() {
  return (
    <motion.div
      className="my-24 h-16 !text-5xl rounded-full  sm:block dark:bg-opacity-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    >
      <Typewriter words={skillsData as any} loop cursorBlinking typeSpeed={50} />
    </motion.div>
  );
}
