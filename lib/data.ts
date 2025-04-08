import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import diggGrowthImg from "@/public/diggrowth.png";
import incognitoScout from "@/public/incognito score.png";
import invoicing from "@/public/invoicing.png";
import networkon from "@/public/networkOn.png";
import kiosk from "@/public/kiosk.png";
import proscore from "@/public/proscore.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "MERN Stack developer",
    location: "Codedrill Infotech, Chandigarh, India",
    description:
      "Worked as a full stack Developer contributing over 4 Projects in 1 year.",
    icon: React.createElement(LuGraduationCap),
    date: "2021-2022",
  },
  {
    title: "Front-End Engineer",
    location: "Growth Natives, Chandigarh, India",
    description:
      "I worked as a front-end developer. My stack included React, TypeScript, Tailwind and Redux. I worked on 3 projects in 1 year.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Full-Stack Engineer",
    location: "AECC Global, Chennai, India",
    description:
      "I'm now a full-stack developer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Incognito Scout",
    description:
      "A football analytics platform. Prediction, weightage, player comparison, strategy making features.basically a full fledge product for football clubs & coaches",
    tags: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: incognitoScout,
  },
  {
    title: "Proscore soccer",
    description:
      "Same as incognito scout but with more modern touch and ui with faster and efficient tools & techniques.",
    tags: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: proscore,
  },
  {
    title: "DIGG growth",
    description:
      "DiGGrowth empowers CMOs, performance marketers, and the entire marketing team to become data-driven and take fearless decisions.",
    tags: ["React", "Next.js", "Tailwind", "Django-REST", "PostgreSQL"],
    imageUrl: diggGrowthImg,
  },
  {
    title: "Network On",
    description:
      "Delivery Management Software that is easy to deploy, is intuitive, and provides exceptional customer experience and operational efficiency.",
    tags: ["React", "Next.js", "SQL", "Django-REST", "PostgreSQL"],
    imageUrl: networkon,
  },
  {
    title: "Invoicing/finance system",
    description:
      "Aecc Internal product for managing invoices, expenses, and finance. It also has a dashboard for analytics and insights.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer", "AWS"],
    imageUrl: invoicing,
  },
  {
    title: "Kiosk 2.0",
    description:
      "A self checkin kiosk for AECC Global. Student don't have to interact with counsellor they just need to scan QR code fill out the app and do a self checkIn.",
    tags: ["React", "Next.js", "scss", "AWS", "Tailwind", "Framer"],
    imageUrl: kiosk,
  },
] as const;

export const skillsData = [
  "HTML/CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Git",
  "AWS",
  "Tailwind CSS",
  "SCSS",
  "Prisma",
  "MongoDB",
  "Redux.js",
  "GraphQL",
  "Express.js",
  "PostgreSQL",
  "Python",
  "Django-REST",
  "Strapi",
] as const;
