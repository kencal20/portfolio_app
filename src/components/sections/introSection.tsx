"use client";

import HeroSection from "../heroSection";
import Image from "next/image";

const fullName = process.env.NEXT_PUBLIC_USER_NAME;
const  firstName = fullName?.split(" ")[0];



export default function IntroSection() {
  return (
    <HeroSection
      id="home"
      title={`Hi, I'm ${firstName} 👋`}
      subtitle="Frontend Developer & UI Designer"
    >
      <div className="grid md:grid-cols-2 gap-10 items-center text-center md:text-left">
        {/* 🧠 Left Side - Intro Text */}
        <div>
          <h1 className="text-5xl font-bold mb-4 leading-tight">
            Crafting{" "}
            <span className="text-blue-600 dark:text-blue-400">Modern</span> &{" "}
            <span className="text-blue-600 dark:text-blue-400">Functional</span>{" "}
            Web Experiences
          </h1>

          <p className="text-gray-700 dark:text-gray-300 max-w-md">
            I’m passionate about building performant, accessible, and visually
            appealing digital products using React, Next.js, and Tailwind CSS.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a
              href="#projects"
              className="bg-blue-600 dark:bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-400 transition"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 px-5 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-slate-800 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* 🎨 Right Side - Image */}
        <div className="relative w-full h-80 md:h-96 flex justify-center md:justify-end">
          {/* <Image
            src="https://www.michaelpage.com.au/sites/michaelpage.com.au/files/2022-01/Software%20Developer.jpg"
            alt="Developer working illustration"
            fill
            className="object-cover rounded-xl shadow-lg transition-transform duration-500 hover:scale-105"
          /> */}
        </div>
      </div>
    </HeroSection>
  );
}
